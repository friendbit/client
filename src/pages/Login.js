import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import { loginFailed, loginSuccess, loginFbSuccess } from '../actions'
import {login} from '../api/Login';
import {logInFb} from '../api/LoginFb'

import { fbcolors } from '../Constants';

/**onPress={this.press.bind(this)} */

class Login extends Component {
    // static navigationOptions = {
    //     title: 'Login',
    //     header: {
    //       visible: false
    //     }
    //   }
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.user.userId,
            password: "password"
        };
    }


    static propTypes = {
        user: PropTypes.object.isRequired,
        dispatchLoginFailed: PropTypes.func.isRequired,
        dispatchLoginSuccess: PropTypes.func.isRequired,
        dispatchLoginFbSuccess: PropTypes.func.isRequired
    }


    onFacebookSigninPressed() {
        console.log("onFacebookSigninPressed Pressed");

        (async () => {
            console.log("calling logInFb");
            try{
                var loginFbResult = await logInFb();
                this.props.dispatchLoginFbSuccess(loginFbResult);
                this.props.navigation.navigate('MainScreen')
            } catch (error) {
                console.warn("FB Login failed: " + error)
            }
        })();

        
    }

    onSigninPressed() {
        console.log("onSigninPressed Pressed");

        login(this.state.userId, this.state.password)
        .then((loginSuccess) => {
            if(loginSuccess == true){
                console.log("login success");
                this.props.dispatchLoginSuccess(this.state.userId);
                console.log("switch screen");
                this.props.navigation.navigate('MainScreen')
            } else {
                console.log("login failed: " + loginSuccess);
                this.props.dispatchLoginFailed(this.state.userId);
            }
        })
        .catch(error => {
            console.log("login error " + error)
            //console.log(this.state)
            this.props.dispatchLoginFailed(this.state.userId)}
        );


        // this.props.dispatchLogin(this.state.userId, this.state.password);
    }

    getErrorMessage() {
        if (this.props && this.props.user && this.props.user.message) {
            console.log("render message")
            return <Label text={this.props.user.message} />;
        }
        console.log("render " + JSON.stringify(this.props))

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
                        value={this.state.userId}
                        onChangeText={(userId) => this.setState({ userId })}
                   />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
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

                <Container>
                    <Button
                        styles={{ button: styles.transparentButton }}
                        onPress={this.onFacebookSigninPressed.bind(this)}
                    >
                        <View style={styles.inline}>
                            <Icon name="facebook-official" size={30} color="#3B5699" />
                            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                            <Text style={styles.buttonBlueText}>with Facebook</Text>
                        </View>
                    </Button>
                </Container>

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
        marginTop: 30
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchLoginSuccess: (userId)        => dispatch(loginSuccess(userId)),
        dispatchLoginFbSuccess: (userId)        => dispatch(loginFbSuccess(userId)),
        dispatchLoginFailed: (userId)   => dispatch(loginFailed(userId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)