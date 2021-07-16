from rest_framework.routers import DefaultRouter
from django.urls import path
from accounts.views import CRUDUser, Login

router = DefaultRouter()
router.register(r'accounts', CRUDUser)

urlpatterns = router.urls
urlpatterns += [path('login/', Login.as_view())]
