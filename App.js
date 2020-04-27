import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

import QuipListItem from './src/components/QuipListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NICK/QUIPS</Text>
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <QuipListItem />
          <QuipListItem />
          <QuipListItem />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  titleContainer: {
    backgroundColor: '#B3B6B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    backgroundColor: '#ECF0F1',
    flex: 1,
  },
  titleText: {
    fontSize: 48,
    color: '#333',
  }
});
