import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../header';
import * as constants from '../../constants';
import styles from './styles';


class StartScreen extends Component {
  state = { name: '' };

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={require('../../../../static/images/Tic_tac_toe_logo.jpg')}
        style={styles.container}>
        {/* <Header title="Tic Tac Toe" /> */}
        <View style={styles.textContainer}>
          <View>
            <Text style={[styles.textStyles, { paddingRight: 60 }]}>Write</Text>
          </View>
          <View>
            <Text style={[styles.textStyles, { paddingLeft: 60 }]}>your</Text>
          </View>
          <View>
            <Text style={[styles.textStyles, { paddingLeft: 180 }]}>name</Text>
          </View>
        </View>
        <TextInput
          style={styles.inputText}
          onChangeText={(name) => this.setState({ name })}
          placeholder="Name"
          value={this.state.name}
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            navigation.navigate(constants.gameScreen, { name: this.state.name });
          }}>
          <Text style={styles.submitText}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default StartScreen;
