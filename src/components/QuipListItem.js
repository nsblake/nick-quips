import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function QuipListItem() {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemTextContainer}>
          <Text style={styles.quipText}>Example Text</Text>
        </View>
        <View style={styles.soundButton}>
          <FontAwesome.Button name="volume-up" backgroundColor="transparent" color="#333" size={30} />
        </View>
      </View> 
    )
}

const styles = StyleSheet.create({
  listItem: {
    height: 80,
    padding: 15,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
  },
  listItemTextContainer: {
    width: 200,
  },
  quipText: {
    fontSize: 32,
    color: '#333333',
  },
  soundButton: {
    position: 'absolute',
    right: 35,
    top: 15,
    width: 55,
  }
});