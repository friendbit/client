import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';

import PropTypes from "prop-types";

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main'
  }

  static propTypes = {
    contacts: PropTypes.array
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.contacts &&
          <Text>
            Loading contacts
          </Text>
        }
        {this.props.contacts &&
          <ScrollView style={[styles.fblist]}>
            {
              this.props.contacts.map(contact => {
                console.log("processing contact " + contact.id);
                // console.log("thumb" + contact.thumbnail.uri);
                return (
                  <FblistItem key={contact.id}
                    name={contact.firstName + contact.lastName}
                    receivedFbs="50"
                    thumbnailData={contact.thumbnail.uri}/>
                    )
              })
            }

            <FblistItem name="TODO" receivedFbs="10" />
          </ScrollView>
        }
      </View>
    );
  }
}

class FblistItem extends React.Component {
  render() {
    return (
      <View style={[styles.fblistitem, styles.container]}>
        {/* <Image source={require('../../icons/profilepicmissing.png')} /> */}
        <Image 
          style={{width: 40, height: 40, resizeMode: Image.resizeMode.contain}}
          source={{uri: this.props.thumbnailData}}/>
        <Text>{this.props.name}</Text>
        {/* <ReceivedFbs receivedFbs={this.props.receivedFbs} />
        <SentFbs sentFbs={this.props.sentFbs} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  fblistitem: {
    flexDirection: 'row'
  },
  fblist: {
    flexDirection: 'column'
  },
});

function mapStateToProps(state) {
  return {
    contacts: state.user.contacts
  }
}

const mapDispatchToProps = (dispatch) => ({});

const MainScreenWithProp = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenWithProp;
