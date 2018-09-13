import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LectureCard from './src/components/lecture-card';
// import lecturesData from './data.json';


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
      transition="backgroundColor">
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

      createGrid = (data) => {
        let grid = []
        for (let i = 0; i < data.length; i++) {
          grid.push(<LectureCard lectureName={data.lectureName}
            lectureDescription={data.lectureDescription}
            author={data.author}
            authorDescription={data.authorDescription}
            // image={require(data.image)}
            />)
        }
        return grid
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

            {/* {this.createGrid(lecturesData)} */}

            {/* const lectureData = LecturesData; */}
           
                          
           {/* {for (let i = 0; i < lectureData.length; i++) {
              <LectureCard lectureName={this.props.lectureData.lectureName}
              lectureDescription={this.props.lectureData.lectureDescription}
              author={this.props.lectureData.author}
              authorDescription={this.props.lectureData.authorDescription}
              image={this.props.lectureData.image}/>
           }} */}
            {/* <LectureCard lectureName=""
                          lectureDescription="a"
                          author="a"
                          authorDescription="a"
                          image={require('./images/luiz.jpg')} />
            <LectureCard lectureName="b"
                          lectureDescription="b"
                          author="ba"
                          authorDescription="ba"
                          image={require('./images/luiz.jpg')} /> */}
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
        