import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

import QuipListItem from './src/components/QuipListItem';
import quips from './assets/audio/audio_map.json';

function getQuipJSX() {
  let result;
  let quipsJSX = [];
  let i = 0;
  quips.forEach((q) => {
    quipsJSX.push(<QuipListItem key={i} quipName={q.name} />);
    i++;
  });
  result = (
    <ScrollView>
      {quipsJSX}
    </ScrollView>
  );
  return result;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NICK/QUIPS</Text>
      </View>
      <View style={styles.listContainer}>
        {getQuipJSX()}
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
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    backgroundColor: '#ECF0F1',
    flex: 1,
  },
  titleText: {
    fontSize: 48,
    color: '#FFFFFF',
  }
});
