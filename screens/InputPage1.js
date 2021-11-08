import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, StatusBar, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import FormInputPage from '../components/FormInput/FormInputPage';
import CheckBox from '../components/Button/CheckBox';
import PaginationDot from 'react-native-animated-pagination-dot';
import ExampleDotPaginate from './ExampleDotPaginate';


   
const InputPage1 = ({navigation}) => {
        const { colors } = useTheme();
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor='#003357' barStyle="light-content"/>
          <View style={styles.header}>
              <Animatable.Image 
                  animation="bounceIn"
                  duraton="1500"
              source={require('../assets/page2.png')}
              style={styles.logo}
              resizeMode="stretch"
              />
          </View>
          <Animatable.View 
              style={styles.footer} animation="fadeInUpBig">
              <Text style={[styles.title, {color: colors.text}]}>ป้อนข้อมูลของคุณ</Text>
              <Text style={styles.text_footer}>วัน/เดือน/ปีเกิด</Text>
              <FormInputPage
                 placeholderText="วัน/เดือน/ปีเกิด"
                 iconType="user"
              />
              <Text style={styles.text_footer}>น้ำหนัก</Text>
               <FormInputPage
                 placeholderText="น้ำหนัก"
                 iconType="user"
              />
              <Text style={styles.text_footer}>เพศ</Text>
            
             <CheckBox/>
             
             <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('InputPage2')} colors={['#FE685E', '#F9867E']}>
                    < View style={styles.signIn}>
                    <Text style={styles.textSign} >ถัดไป</Text>
               </View>
            </TouchableOpacity>
            </View>

             
              
          </Animatable.View>
        </View>
            
        );
    
};
export default InputPage1;


     


const {height} = Dimensions.get("screen");
const height_logo = height * 0.21;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#003357',
    
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
      paddingVertical: 200,
      paddingHorizontal: 90
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
      marginTop:-170
  },
  text: {
      color: '#FE685E',
      marginTop:5
  },
  text_footer: {
    color: '#05375a',
    fontSize:20,
    marginTop:30,
    marginHorizontal: -60,
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
  Example: {
    marginTop: 40,
    
  }
});
