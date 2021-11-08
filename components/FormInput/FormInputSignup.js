import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimentions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInputSignup = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={26} color="#ffffff" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#C3D1DB"
        {...rest}
      />
    </View>
  );
};

export default FormInputSignup;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: -10,
    width: '90%',
    height: windowHeight / 16,
    borderColor: '#114A6F',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#114A6F',
    marginHorizontal: 22,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#114A6F',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
