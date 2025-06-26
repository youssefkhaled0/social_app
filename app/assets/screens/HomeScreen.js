import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

const { height: screenHeight } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const postHeight = screenHeight / posts.length;

  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={{ height: postHeight }}>
          <PostCard post={post} onPress={() => navigation.navigate('PostDetails', { post })} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fc55",
  },
});

export default HomeScreen;
