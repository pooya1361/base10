import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight
} from 'react-native';
//const timer = require('react-native-timer');


export default class base10 extends Component {

    constructor() {
        super();
        this.state = {
            pressed: false,
        };
    }

    Press() {
        this.props.navigator.push({
            id: 'Menu'
        });
    }

    componentDidMount() {
        setTimeout(() => { if (!this.state.pressed) this.Press() }, 3000);
    }

    render() {
        return (
            <TouchableHighlight underlayColor='white' style={{flex: 1}} onPress={() => {this.setState({pressed: true}); this.Press()}} >
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('./logo.jpg')} />
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }}>
                        <Text className='blinking' style={styles.text}>BASE10</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', paddingTop: 8 }} >{'\u24B8'}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    logo: {
        width: '90%',
        height: '70%',
        resizeMode: 'contain',
        //borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 48,
        fontWeight: 'bold',
    }
});