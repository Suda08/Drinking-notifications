import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';


import { useTheme } from '@react-navigation/native';

const InputPage3 = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#003357' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/page5.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {backgroundColor: colors.background}]} animation="fadeInUpBig">
            <Text style={[styles.title, {color: colors.text}]}>เป้าหมายของคุณ</Text>

            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('AppStack')} colors={['#FE685E', '#F9867E']}>
                    < View style={styles.signIn}>
                    <Text style={styles.textSign} >ถัดไป</Text>
               </View>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default InputPage3;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#003357'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 170,
      paddingHorizontal: 75
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop:-140
  },
  text: {
      color: '#FE685E',
      marginTop:5
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      backgroundColor:'#FE685E',
      borderRadius: 20,
      marginHorizontal: -60,
  },
  signIn: {
      width: 500,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
  },
  textSign: {
      color: '#fff',
      fontSize: 22, 
  },
});
