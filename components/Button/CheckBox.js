import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const CheckBox = () => {
  const [value, setValue] = React.useState('man');
 

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.container}>
        <View style={styles.CheckMan}>
      <RadioButton color="#fff"  value="man"  />
        <Text style={styles.text}>ชาย</Text>
      </View>

      <View style={styles.CheckFemale}>
      <RadioButton color="#fff" value="female" />
        <Text style={styles.text}>หญิง</Text>
      </View>
      <View style={styles.CheckNot}>
      <RadioButton color="#fff" value="not" />
        <Text style={styles.text}>ไม่ระบุ</Text>
      </View>
      </View>
    </RadioButton.Group>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    color:"#fff"
  },
  CheckMan:{
    flexDirection: 'row',
   
  },
  CheckFemale:{
    flexDirection: 'row',
  },
  CheckNot:{
    flexDirection: 'row',
    
  },

  text: {
    color: '#fff',
    fontSize: 19,
    marginTop:4,
    marginHorizontal: 15,
}
});