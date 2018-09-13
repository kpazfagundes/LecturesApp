import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

export default class LectureCard extends Component {
    state = {
        activeSection: false,
        collapsed: true,
    };
  
    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };
    
    render() {
    var foto = this.props.image;
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleExpanded}>
        <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.lectureName} </Text>
        <Text style={styles.headerText}>{this.props.author}</Text>
        </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
        <Image source={foto} style={styles.image} align="center"/>
        <View style={styles.content}>
        <Text>
        {this.props.lectureDescription}</Text>
        <Text>
        <Text style={{fontWeight: '500'}}>Sobre o {this.props.author}:</Text> {this.props.authorDescription}
        </Text>
        </View>
        </Collapsible>
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
    