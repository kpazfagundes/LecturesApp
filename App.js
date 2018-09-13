import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import LectureCard from './components/lecture-card';
import LecturesData from './data.json';


const BACON_IPSUM =
'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

export default class App extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };
    
  setSection = section => {
    this.setState({ activeSection: section });
  };
  
  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
      duration={400}
      style={[styles.header, isActive ? styles.active : styles.inactive]}
      transition="backgroundColor"
      >
      <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
      );
    };
    
    renderContent(section, _, isActive) {
      return (
        <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
        >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
        {section.content}
        </Animatable.Text>
        </Animatable.View>
        );
      }
      
      render() {
        
        return (
          <View style={styles.container}>
          <Text style={styles.title}>Developers Day</Text>
          
          
          <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Palestras:</Text>
          {SELECTORS.map(selector => (
            <TouchableOpacity
            key={selector.title}
            onPress={() => this.setSection(selector.value)}
            >
            <View style={styles.selector}>
            <Text
            style={
              selector.value === this.state.activeSection &&
              styles.activeSelector
            }
            >
            {selector.title}
            </Text>
            </View>
            </TouchableOpacity>
            ))}
            </View>
            const lectureData = LecturesData;
           
                          
           for (var index in lectureData){
              <LectureCard lectureName={this.props.lectureData.lectureName}
              lectureDescription={this.props.lectureData.lectureDescription}
              author={this.props.lectureData.author}
              authorDescription={this.props.lectureData.authorDescription}
              image={this.props.lectureData.image}/>
           }
            <LectureCard lectureName=""
                          lectureDescription="a"
                          author="a"
                          authorDescription="a"
                          image={require('./images/luiz.jpg')} />
            <LectureCard lectureName="b"
                          lectureDescription="b"
                          author="ba"
                          authorDescription="ba"
                          image={require('./images/luiz.jpg')} />
            </View>

            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
            justifyContent: 'center',
            backgroundColor: '#F5FCFF',
          },
          title: {
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '300',
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
            backgroundColor: 'rgba(255,255,255,1)',
          },
          inactive: {
            backgroundColor: 'rgba(245,252,255,1)',
          },
          selectors: {
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          },
          selector: {
            backgroundColor: '#F5FCFF',
            padding: 10,
          },
          activeSelector: {
            fontWeight: 'bold',
          },
          selectTitle: {
            fontSize: 14,
            fontWeight: '500',
            padding: 10,
          },
          image: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        });
        