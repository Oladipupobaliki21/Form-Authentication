from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from .serializers import UserRegistrationSerializer, UserLoginSerializer
from rest_framework.permissions import AllowAny

User = get_user_model()

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            return Response({"message": "Login successful", "user_id": user.id}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this endpoint

    def get(self, request):
        user = request.user
        if user.is_authenticated:
            data = {
                'username': user.username,
                'email': user.email,
            }
            return Response(data, status=status.HTTP_200_OK)
        return Response({'message': 'User is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)