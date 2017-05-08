import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    ScrollView,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';
//import Communications from 'react-native-communications';

export default class base10 extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            text: '',
        };
    }
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            text: '',
        };
    }

    sendMail(name, email, subject, text) {
        fetch("https://mandrillapp.com/api/1.0/messages/send.json",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "key": "XX-xxxxxxxx-XXXX",
                    "message": {
                        "from_name": "IT Support",
                        "from_email": "it@*****",
                        "subject": "Feedback from App",
                        "text": " Name : " + this.state.name +
                        " Email : " + this.state.email +
                        " Feedback : " + this.state.feedback,
                        "to": [
                            {
                                "email": "contact@******",
                                "name": "kjhk",
                                "type": "to"
                            }
                        ]
                    }
                }),
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Response Body -> " + JSON.stringify(responseData));

                this.setState({ name: "" });
                this.setState({ email: "" });
                this.setState({ feedback: "" });

                ToastAndroid.show("Message has been delivered", ToastAndroid.LONG);
            }).catch(function (err) {
                console.log(err);
                ToastAndroid.show("Your Message has not been delivered", ToastAndroid.LONG);
            }).done()
    }

    backButtonPressed() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={this.backButtonPressed.bind(this)} style={styles.backButton}><Text style={styles.title}>«</Text></TouchableHighlight>
                    <Text style={styles.title}>Contact us</Text>
                    <Text style={styles.backButton}> </Text>
                </View>

                <View style={styles.content}>
                    <ScrollView style={styles.scrollview}>
                        <TextInput
                            placeholder='Your name *'
                            returnKeyType='next'
                            style={styles.input}
                            autoCapitalize='words'
                            onSubmitEditing={() => this.emailInput.focus()}
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />
                        <TextInput
                            placeholder='Your email *'
                            returnKeyType='next'
                            keyboardType='email-address'
                            style={styles.input}
                            ref={(input) => this.emailInput = input}
                            onSubmitEditing={() => this.subjectInput.focus()}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            placeholder='Subject'
                            returnKeyType='next'
                            style={styles.input}
                            ref={(input) => this.subjectInput = input}
                            onSubmitEditing={() => this.textInput.focus()}
                            onChangeText={(subject) => this.setState({ subject })}
                            value={this.state.subject}
                        />
                        <TextInput
                            placeholder='Your text *'
                            style={styles.input}
                            maxLength={2000}
                            multiline={true}
                            numberOfLines={8}
                            ref={(input) => this.textInput = input}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <Button
                            disabled={this.state.name === '' ||
                                this.state.email === '' ||
                                this.state.text === ''
                                ? true : false}
                            onPress={() => this.sendMail(this.state.name, this.state.email, this.state.subject, this.state.text)}
                            title='Send'
                        />
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
        backgroundColor: '#f39c12',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        //height: '10%',
        elevation: 10,
        minHeight: 50,
    },
    content: {
        flex: 8,
        //backgroundColor: 'green',
        width: '100%',
    },
    scrollview: {
        padding: 8,
        paddingTop: 16,
        paddingBottom: 36,
        opacity: 1,
        flex: 1,
        //alignItems: 'center',
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
    input: {
        fontSize: 20,
    },
});