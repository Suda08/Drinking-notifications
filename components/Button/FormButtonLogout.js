import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimentions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer } {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
  
    width: '90%',
    height: windowHeight / 16,
    padding: 0,
    borderRadius: 3,
    marginLeft: 20,
    marginTop: 0,
    flexDirection: 'row',
    borderColor:'#FE685E',
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
});
