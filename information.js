import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Linking,
    View,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

export default class base10 extends Component {

    backButtonPressed() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={this.backButtonPressed.bind(this)} style={styles.backButton}><Text style={styles.title}>«</Text></TouchableHighlight>
                    <Text style={styles.title}>Information</Text>
                    <Text style={styles.backButton}> </Text>
                </View>
                <View style={styles.content}>
                    <ScrollView style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%' }}>
                        <Text style={styles.text}>
                            <Text style={styles.header}>Address</Text>
                            <Text>{"\n"}</Text>
                            <Text>Klostergatan 10</Text>
                            <Text>{"\n"}</Text>
                            <Text>753 21 Uppsala</Text>
                            <Text>{"\n"}</Text>
                            <Text>{"\n"}</Text>

                            <Text style={styles.header}>Website</Text>
                            <Text>{"\n"}</Text>
                            <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://www.base10.se')}>www.base10.se</Text>
                            <Text>{"\n"}</Text>
                            <Text>{"\n"}</Text>

                            <Text style={styles.header}>Wiki</Text>
                            <Text>{"\n"}</Text>
                            <Text>You can find all our plans and pricing in the wiki at </Text>
                            <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://bit.ly/base10wiki')}>http://bit.ly/base10wiki</Text>
                            <Text>{"\n"}</Text>



                        </Text>
                        <View style={{ position: 'relative', flex: 3, width: '100%', height: 500 }}>
                            <View style={styles.mapContainer}>
                                <MapView
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: 59.861148,
                                        longitude: 17.6376936,
                                        latitudeDelta: 0.002,
                                        longitudeDelta: 0.002,
                                    }}
                                >
                                    <MapView.Marker
                                        coordinate={{
                                            latitude: 59.861148,
                                            longitude: 17.6376936,
                                        }} >
                                        <View style={{width: 40, height: 60}}>
                                            <Image  style={{flex: 1, width: '100%', height: '100%'}} source={require('./logo.jpg')} />
                                        </View>
                                    </MapView.Marker>
                                </MapView>
                            </View>
                        </View>
                    </ScrollView>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    backButton: {
        height: '80%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: '#9b59b6',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        minHeight: 50,
        elevation: 10,
    },
    content: {
        flex: 8,
        width: '100%',
        //height: '90%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    scrollview: {
        padding: 8,
        paddingBottom: 36,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    header: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },

    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,

    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});