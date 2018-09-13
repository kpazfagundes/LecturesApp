import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import lecturesData from '../../data.json';

export default class LectureCards extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSection = section => {
    this.setState({ activeSection: section });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor" >
        <Text style={styles.headerText}>{section.lectureName}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Image style={styles.image}
          source={{ uri: section.image }}
        />
        <Animatable.Text style={styles.subtitle} animation={isActive ? 'bounceIn' : undefined}>
          {section.author}
        </Animatable.Text>
        <Animatable.Text style={styles.paragraph} animation={isActive ? 'bounceIn' : undefined}>
          {section.lectureDescription}
        </Animatable.Text>
        <Animatable.Text style={styles.bold} animation={isActive ? 'bounceIn' : undefined}>
          Sobre {section.author}
        </Animatable.Text>
        <Animatable.Text style={styles.paragraph} animation={isActive ? 'bounceIn' : undefined}>
          {section.authorDescription}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    return (
      <Accordion
        activeSection={this.state.activeSection}
        sections={lecturesData}
        touchableComponent={TouchableOpacity}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        duration={400}
        onChange={this.setSection}
      />
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  bold: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(0,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  image: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
});