from rest_framework.permissions import BasePermission


class Permission(BasePermission):
    def has_permission(self, request, view):
        if request.method == "GET" or request.method == "POST":
            return True
        if request.user:
            return True
