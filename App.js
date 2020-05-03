import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Button, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="Send general feedback, quip requests, bug reports, etc."
            onChangeText={text => setText(text)}
            defaultValue={text}
            multiline={true}
          />
        </View>
          <View style={styles.modalButtons}>
            <Button 
              onPress={() => {
                setModalVisible(!modalVisible);
                setText('');
              }}
              title="SUBMIT"
              color="#2ECC71"
              disabled={text == ''}
            />
            <Button 
              onPress={() => {
                setModalVisible(!modalVisible);
                setText('');
              }}
              title="CLOSE"
              color="#E74C3C"
            />
          </View>
        </View>
      </Modal>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NICK/QUIPS</Text>
        <View style={styles.openModal}>
          <FontAwesome.Button 
            name="comment" 
            backgroundColor="transparent" 
            color="#fff" 
            size={30} 
            onPress={() => {
              setModalVisible(true);
            }}/>
        </View>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listContainer: {
    backgroundColor: '#ECF0F1',
    flex: 1,
  },
  titleText: {
    fontSize: 48,
    color: '#FFFFFF',
    marginLeft: 15
  },
  modalButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  openModal: {
    position: 'absolute',
    right: 0,
  },
});
