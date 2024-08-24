from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# @api_view(['GET'])
# def hello_world(request):
#     return Response({'message': 'Hello, world!'})

def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def example_endpoint(request):
    data = {
        'message': 'This is data from the Django backend!',
        'status': 'success'
    }
    return Response(data)