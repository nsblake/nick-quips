import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>NickQuips</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
