import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import _ from 'lodash';
import styles from './styles';

const TextInput = ({
  meta: { touched, error },
  type,
  placeholder,
  iconName,
  input: { onChange, ...restInput }
}) => {
  return (
    <Input
      onChangeText={onChange}
      {...restInput}
      secureTextEntry={type == 'password'}
      keyboardType={type == 'email-address' ? 'email-address' : 'default'}
      placeholder={placeholder}
      errorStyle={{ color: 'red' }}
      textContentType={type ? _.camelCase(type) : 'none'}
      errorMessage={touched && error ? error : ''}
      shake={true}
      inputContainerStyle={styles.field}
      leftIcon={<Icon name={iconName} size={24} color="black" />}
    />
  );
};

export default TextInput;
