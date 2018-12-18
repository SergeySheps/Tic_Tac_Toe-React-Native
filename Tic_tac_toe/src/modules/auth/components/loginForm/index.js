import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from '../input';
import { Field, reduxForm } from 'redux-form';
import * as validators from '../../../validationRules';
import styles from './styles';

class RegisterScreen extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name={'arrow-circle-left'}
            size={38}
            style={styles.backIcon}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Text h1 style={styles.title}>
            Login
          </Text>
        </View>
        <Field
          name="userName"
          iconName="user"
          placeholder="User Name"
          component={TextInput}
          validate={[validators.required]}
        />
        <Field
          name="password"
          iconName="lock"
          placeholder="Password"
          component={TextInput}
          type="password"
          validate={[validators.required]}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            // navigation.navigate(constants.gameScreen, { name: this.state.name });
          }}>
          <Text style={styles.textStyle}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(RegisterScreen);
