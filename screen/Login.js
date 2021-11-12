import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FormInput from '../components/FormInput/FormInputLogin';
import FormButtonLogin from '../components/Button/FormButtonLogin';
import SocialButton from '../components/Button/SocialButton';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/**   <Image
          source={require('../assets/icon.png')}
          style={styles.logo}
        />*/}
        <Text style={styles.text}>เข้าสู่ระบบ</Text>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="อีเมล"
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
          onPress={() => navigation.navigate('MyTabs')}
        />

        <Text style={styles.text1}>หรือ</Text>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="ลงชื่อเข้าใช้ด้วย Facebook"
              btnType="facebook"
              color="#ffffff"
              backgroundColor="#3E5C9A"
              onPress={() => fbLogin()}
            />

            <SocialButton
              buttonTitle="ลงชื่อเข้าใช้ด้วย Google"
              btnType="google"
              color="#fff"
              backgroundColor="#DF4B38"
              onPress={() => googleLogin()}
            />
          </View>
        ) : null}


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
    height: 125,
    width: 110,
    resizeMode: 'cover',
    marginHorizontal: 150,
    marginTop: 10,

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
