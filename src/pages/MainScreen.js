import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is the Main screen
        </Text>
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
  }
});

const mapStateToProps = ({ global }) => ({
  appName: "testApp"
});

const mapDispatchToProps = (dispatch) => ({});

const MainScreenWithProp = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenWithProp;
