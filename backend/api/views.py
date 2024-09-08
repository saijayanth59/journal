from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, EntrySerializer
from django.contrib.auth.models import User
from .models import Entry


class ListUser(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, ]
    
    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)   
class CreateUser(generics.CreateAPIView):
    serializer_class = UserSerializer


class EntryListCreate(generics.ListCreateAPIView):
    serializer_class = EntrySerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)


class EntryDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EntrySerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)
