from django.urls import path
from .views import UserRegistrationView, UserLoginView, UserDetailView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('user/', UserDetailView.as_view(), name='user-detail'),
]