from .models import UserModel
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import UserSerializer, CredentialSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .permission import Permission
import ipdb


class CRUDUser(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = [Permission]
    authentication_classes = [TokenAuthentication]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        up = request.user.__dict__

        for k, v in request.data.items():
            up[k] = v

        serializer = self.get_serializer(instance, data=up, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)


class Login(APIView):
    @staticmethod
    def post(request):
        serializers = CredentialSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)

        user = authenticate(email=request.data['email'], password=request.data['password'])
        if user is not None:
            token = Token.objects.get_or_create(user=user)[0]

            return Response({
                'token': token.key,
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'biography': user.biography
            })
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
