import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FormInput from '../components/FormInput/FormInputLogin';
import FormButtonLogin from '../components/Button/FormButtonLogin';
import SocialButton from '../components/Button/SocialButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTabs from './Tabs';
import { IP } from '../ipaddress';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [uid, setUid] = useState();
  const [submit, setSubmit] = useState(false);


  const Getid = async () => {
    try {
      const res = await AsyncStorage.getItem('u_id');
      setUid(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Getid();
  });



  useEffect(() => {
    const Login = async () => {
      try {
        const res = await axios.get(IP + '/login.php', {
          params: {
            username: email,
            password: password
          }
        })
        if (res.data.onLogin == 'success') {
          await AsyncStorage.setItem('u_id', res.data.u_id);
          navigation.navigate('MyTabs');
          setSubmit(false)
        } else {
          alert('รหัสผ่านผิดกรุณากรอกใหม่')
          setSubmit(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (submit) Login();
  }, [submit])


  return (
    <>
      {uid == null ? (
        <>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Image style={styles.logo} source={require('../assets/icon.png')} />
         
        
              <Text style={styles.text}>เข้าสู่ระบบ</Text>

              <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="ชื่อผู้ใช้"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="รหัสผ่าน"
                iconType="lock"
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>ลืมรหัสผ่าน ?</Text>
              </TouchableOpacity>


              <FormButtonLogin
                buttonTitle="เข้าสู่ระบบ"
                onPress={() => setSubmit(true)}
              />

             


              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                  ยังไม่ลงทะเบียน ?   {' '}
                </Text>

                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => navigation.navigate('SignupScreen')}>
                  <Text style={styles.nav1ButtonText}>ลงทะเบียน</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      ) : (
        <>
          <MyTabs />
        </>
      )}

    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003357',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    marginHorizontal: -18,
    marginTop: -20,
  },
  logo: {
    height: 135,
    width: 120,
    resizeMode: 'cover',
    marginHorizontal: 150,
    marginTop: 90,

  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    marginHorizontal: 150,
    marginTop: 20,
  },
  text1: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: "center",
    justifyContent: "center"
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginTop: 20,
    marginLeft: 290
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Lato-Regular',
    marginTop: 10,


  },
  nav1ButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',

  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
    marginTop: 50,
  },
  color_textPrivate: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: '#fff',
    marginTop: 14,
  },
});
