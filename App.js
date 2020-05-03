import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

import QuipListItem from './src/components/QuipListItem';
import quips from './assets/audio/audio_map.json';
import { sendEmail } from './send-email.js';
import { emailAddress, aboutMessage } from './config';

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
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{padding: 10}}>
          <Text style={styles.aboutMessage}>{aboutMessage}</Text>
        </View>
          <View style={styles.modalButtons}>
            <Button 
              onPress={async () => {
                setModalVisible(!modalVisible);
                await sendEmail(
                  emailAddress,
                  'NickQuips Feedback',
                  '(Replace this text with general feedback, quip requests, bug reports, etc.)'
                );
              }}
              title="SUBMIT FEEDBACK"
              color="#2ECC71"
            />
            <Button 
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="CLOSE"
              color="#E74C3C"
            />
          </View>
        </View>
      </Modal>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NICKQUIPS</Text>
        <View style={styles.openModal}>
          <FontAwesome.Button 
            name="bars" 
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
  aboutMessage: {
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
    color: "#333",
    lineHeight: 28,
  },
});
