import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import LectureCards from './src/components/lecture-cards';

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Developers Day</Text>

        <ScrollView>
          <LectureCards />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 40,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',

  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,
    color: '#5d1049',
  },
});
