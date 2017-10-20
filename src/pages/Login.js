import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

import {loginAttempt} from '../actions'

import fbcolors from '../Constants';

/**onPress={this.press.bind(this)} */

class Login extends Component {
    // constructor(props){
    //     super(props);
    //     this.getErrorMessage = this.getErrorMessage.bind(this);
    // }

    onSigninPressed() {
        console.log("onSigninPressed Pressed");
        this.props.dispatchLogin();
    }

    getErrorMessage(){
        if(this.props && this.props.user && this.props.user.message){
            console.log("render message")
            return <Label text={this.props.user.message} />;
        }
        console.log("render null " + JSON.stringify(this.props))
        
        return null;
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <Container>
                    <Button
                        label="Forgot Login/Pass"
                        styles={{ button: styles.alignRight, label: styles.label }}
                    />
                </Container>
                <Container>
                    <Label text="Username" />
                    {this.getErrorMessage()}
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Button
                        styles={{ button: styles.transparentButton }}

                    >
                        <View style={styles.inline}>
                            <Icon name="facebook-official" size={30} color="#3B5699" />
                            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                            <Text style={styles.buttonBlueText}>with Facebook</Text>
                        </View>
                    </Button>
                </Container>

                <View style={styles.footer}>
                    <Container>
                        <Button
                            label="Sign In"
                            styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                            onPress={this.onSigninPressed.bind(this)}
                        />
                    </Container>
                    <Container>
                        <Button
                            label="CANCEL"
                            styles={{ label: styles.buttonBlackText }}
                        />
                    </Container>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: fbcolors.green,
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 20,
        backgroundColor: '#EEE'
    },

    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },

    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 100
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchLogin: (user, password) => dispatch(loginAttempt(user, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)