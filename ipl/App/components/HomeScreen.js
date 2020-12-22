// screens/HomeScreen.js

import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableBudget: 0,
    };
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter budget amount"
          keyboardType="numeric"
          maxLength={16}
          value={this.state.myNumber}
          onChangeText={(e) => this.onTextChanged(e)}
        />
        <TouchableHighlight
          style={styles.submitButton}
          onPress={() => this.onNextPress()}>
          <Text
            style={styles.submitButtonText}
            onPress={() => this.onNextPress()}>
            Next
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onNextPress() {
    if (this.state.availableBudget && this.state.availableBudget > 0) {
      this.props.navigation.navigate('AvailablePlayers', {
        availableBudget: this.state.availableBudget,
      });
    } else {
      Alert.alert('Please enter valid budget amount');
    }
  }

  onTextChanged(e) {
    if (/^\d+$/.test(e.toString())) {
      this.setState({availableBudget: e});
    }
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 10,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    width: 150,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
});
export default HomeScreen;
