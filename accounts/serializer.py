from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import UserModel


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

        extra_kwargs = {

            "first_name": {
                "required": True
            },
            "last_name": {
                "required": True
            },
            "email": {
                "required": True
            },
            "password": {
                "write_only": True
            },
            "biography": {
                "default": None
            }
        }

    def create(self, validated_data):
        return UserModel.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        if "is_active" in validated_data.keys():
            instance.is_active = validated_data["is_active"]

        if "groups" in validated_data.keys():
            instance.groups = validated_data["groups"]

        if "user_permissions" in validated_data.keys():
            instance.user_permissions = validated_data["user_permissions"]

        if validated_data["biography"] is not None:
            instance.biography = validated_data["biography"]

        if "isVisible" in validated_data.keys():
            instance.isVisible = validated_data["isVisible"]

        if "contact" in validated_data.keys():
            instance.contact = validated_data["contact"]

        instance.first_name = validated_data["first_name"]
        instance.last_name = validated_data["last_name"]
        instance.save()

        return {
            "id": instance.id,
            "last_login": instance.last_login,
            "is_superuser": instance.is_superuser,
            "first_name": instance.first_name,
            "last_name": instance.last_name,
            "is_active": instance.is_active,
            "date_joined": instance.date_joined,
            "email": instance.email,
            "biography": instance.biography,
            "groups": instance.groups,
            "user_permissions": instance.user_permissions,
            "isVisible": instance.isVisible,
            "contact": instance.contact
        }


class CredentialSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
    email = serializers.CharField()
    password = serializers.CharField()

