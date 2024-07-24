from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Entry

# user serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'id']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

# entry serializer


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'body', 'created', 'updated']
