from django.urls import path
from . import views

urlpatterns = [
    path('example-endpoint', views.example_endpoint, name='example-endpoint'),
]