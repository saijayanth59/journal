from rest_framework import generics
from base.serializers import UserSerializer, EntrySerializer
from base.models import Entry
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

# registering new user


class CreateUser(generics.CreateAPIView):
    serializer_class = UserSerializer


class EntryListCreate(generics.ListCreateAPIView):
    """
    URL :- /entry
    GET request -> for listing user entries  
    POST request -> create new entry of user 

    """
    permission_classes = [IsAuthenticated, ]
    serializer_class = EntrySerializer

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EntryDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    URL :- /entry/pk
    GET -> Retrive a single instance
    UPDATE -> Update instance
    DELETE -> Delete instance

    """

    permission_classes = [IsAuthenticated, ]
    serializer_class = EntrySerializer
    lookup_field = 'pk'

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)
