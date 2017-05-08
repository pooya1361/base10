/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Splash from './splash.js';
import Menu from './menu.js';
import Membership from './membership.js';
import Information from './information.js';
import Contact from './contact.js';

export default class base10 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Splash'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Splash':
        return (<Splash navigator={navigator} title='Splash' />);
        break;
    
      case 'Menu':
        return (<Menu navigator={navigator} title='Menu' />);
        break;
    
      case 'Membership':
        return (<Membership navigator={navigator} title='Membership' />);
        break;
    
      case 'Information':
        return (<Information navigator={navigator} title='Information' />);
        break;
    
      case 'Contact':
        return (<Contact navigator={navigator} title='Contact' />);
        break;
    
      default:
        break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('base10', () => base10);
