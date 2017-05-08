import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator,
    Linking
} from 'react-native';
import Membership from './membership.js';


export default class base10 extends Component {

    membershipPress() {
        this.props.navigator.push({
            id: 'Membership'
        });
    }

    openFB() {
    const FANPAGE_ID = '881840645220173'
    const FANPAGE_URL_FOR_APP = `fb://page/${FANPAGE_ID}`
    const FANPAGE_URL_FOR_BROWSER = `https://fb.com/${FANPAGE_ID}`
    Linking.canOpenURL(FANPAGE_URL_FOR_APP)
      .then((supported) => {
        if (!supported) {
          Linking.openURL(FANPAGE_URL_FOR_BROWSER)
        } else {
          Linking.openURL(FANPAGE_URL_FOR_APP)
        }
    })
      .catch(err => console.error('An error occurred', err))
    }

        //var FbIntent = require('react-native-fbintent');        
        //FbIntent.open('881840645220173');
    //     const FANPAGE_ID = '881840645220173'
    //     const FANPAGE_URL_FOR_APP = `fb://page/${FANPAGE_ID}`
    //     const FANPAGE_URL_FOR_BROWSER = `https://fb.com/${FANPAGE_ID}`
    //     Linking.canOpenURL(FANPAGE_URL_FOR_APP)
    //         .then((supported) => {
    //             if (!supported) {
    //                 Linking.openURL(FANPAGE_URL_FOR_BROWSER)
    //             } else {
    //                 Linking.openURL(FANPAGE_URL_FOR_APP)
    //             })
    //             .catch(err => console.error('An error occurred', err))
    //         }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableHighlight onPress={this.membershipPress.bind(this)} style={[styles.button, { backgroundColor: '#2ecc71' }]}>
                        <Text style={styles.buttonText}>Membership</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { }} style={[styles.button, { backgroundColor: '#e74c3c' }]}>
                        <Text style={styles.buttonText}>Events</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight onPress={() => { this.props.navigator.push({ id: 'Information' }); }} style={[styles.button, { backgroundColor: '#9b59b6' }]}>
                        <Text style={styles.buttonText}>Information</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigator.push({ id: 'Contact' }); }} style={[styles.button, { backgroundColor: '#f39c12' }]}>
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight onPress={() => { this.openFB() }} style={[styles.button, { backgroundColor: '#2980b9' }]}>
                        <Text style={styles.buttonText}>Facebook</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, { backgroundColor: '#f1c40f' }]}>
                        <Text style={styles.buttonText}>News</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: '#EEE',
    },
    button: {
        flex: 1,
        backgroundColor: '#FBF',
        //borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

AppRegistry.registerComponent('base10', () => base10);
