from rest_framework import serializers
from .models import Room

# Converts model attributes into frontend readable code


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'roomcode', 'hostname', 'guest_can_pause',
                  'votes_to_skip', 'created_at'),
