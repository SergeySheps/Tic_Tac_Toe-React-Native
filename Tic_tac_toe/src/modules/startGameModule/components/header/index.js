import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
};

export default Header;
