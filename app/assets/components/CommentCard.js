import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CommentCard({ comment }) {
  return (
    <View>
      <Image source={{ uri: comment.userAvatar }} style={{ width: 40, height: 40 }} />
      <Text>{comment.userName}</Text>
      <Text>{comment.content}</Text>
    </View>
  );
}