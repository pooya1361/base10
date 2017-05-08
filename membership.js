import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Linking,
    View,
    TouchableHighlight
} from 'react-native';

export default class base10 extends Component {

    backButtonPressed(){
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={this.backButtonPressed.bind(this)} style={styles.backButton}><Text style={styles.title}>«</Text></TouchableHighlight>
                    <Text style={styles.title}>Membership</Text>
                    <Text style={styles.backButton}> </Text>
                </View>

                <View style={styles.content}>
                    <ScrollView style={styles.scrollview}>
                        <Text style={styles.text}>
                            <Text style={{fontWeight: 'bold'}}>{"\n"}Membership Pricing{"\n"}</Text>
                            <Text>This is a little work in progress but is currently as follows. All plans require members to apply and we take into account many different attributes depending on the plan type, but the common ones are:</Text>
                            <Text>{"\n"}</Text>
                            <Text>{'\u2022'} An interest/passion for technology startups{"\n"}</Text>
                            <Text>{'\u2022'} A cultural fit, people who favour collaboration, community and who bring a ray of sunshine into our daily lives!{"\n"}</Text>
                            <Text>{'\u2022'} High growth plans in a disruptive area within technology (for startup or private room plans only).{"\n"}</Text>
                            <Text>{"\n"}{"\n"}</Text>
                            <Text style={{ fontWeight: 'bold' }}>FREE OPEN AREAS{"\n"}</Text>
                            <Text>- Access weekdays, 06:00 till 20:00{"\n"}</Text>
                            <Text>- Free coffee, free 300 megabit wifi{"\n"}</Text>
                            <Text>- By application, limited places (should be involved/engaged in tech startup community){"\n"}</Text>                            
                            <Text>- Apply at: <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://bit.ly/base10applyopen')}>http://bit.ly/base10applyopen</Text>{"\n"}</Text>
                            <Text>{"\n"}{"\n"}</Text>
                            <Text style={{ fontWeight: 'bold' }}>HOT DESKS{"\n"}</Text>
                            <Text>- Access 24 hours{"\n"}</Text>
                            <Text>- All free perks + kitchen, shower, printing, free board room bookings, and a dedicated (quiet) room shared room to work from.{"\n"}</Text>
                            <Text>- Access to private member social events + BASE10 network for connections to investors, press, and other contacts.{"\n"}</Text>
                            <Text>- Must be engaged within the technology industry{"\n"}</Text>
                            <Text>- Regular Hotdesks: 2500 SEK per person per month (discount for anyone building a technology startup to 1000 SEK per person per month).{"\n"}</Text>
                            <Text>- Apply at <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://bit.ly/base10applyhotdesk')}>http://bit.ly/base10applyhotdesk</Text>{"\n"}</Text>
                            <Text>{"\n"}{"\n"}</Text>
                            <Text style={{ fontWeight: 'bold' }}>PRIVATE ROOMS{"\n"}</Text>
                            <Text>- All other perks, plus a choice of the available private rooms still left.{"\n"}</Text>
                            <Text>- See available rooms/prices at <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://bit.ly/base10viewrooms')}>http://bit.ly/base10viewrooms</Text>{"\n"}</Text>
                            <Text>- Apply at <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://bit.ly/base10applyrooms')}>http://bit.ly/base10applyrooms</Text>{"\n"}</Text>
                            <Text>{"\n"}{"\n"}</Text>
                            <Text style={{ fontWeight: 'bold' }}>EVENTS{"\n"}</Text>
                            <Text>For the ongoing events we run for anyone within Uppsala, follow <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.facebook.com/base10uppsala')}>BASE10</Text> on Facebook to be kept up to date.{"\n"}{"\n"}</Text>
                        </Text>
                    </ScrollView>
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
        flexDirection: 'column'
    },
    backButton: {
        //font: 'Wingdings',
        //backgroundColor: 'red',
        height: '80%',
        width: 50,
        justifyContent: 'center',        
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: '#2ecc71',
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
    },
});