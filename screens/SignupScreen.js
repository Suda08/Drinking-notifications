import React, {useState} from 'react';
import {View, Text, TouchableOpacity,ScrollView, Image,  StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import FormInputSignup from '../components/FormInput/FormInputSignup';
import FormButtonSignup from '../components/Button/FormButtonSignup';
import { AuthContext } from '../navigation/AuthProvider';
import FormInputPage from '../components/FormInput/FormInputPage';
import CheckBox from '../components/Button/CheckBox';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = React.useContext (AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
       <StatusBar backgroundColor='#003357' barStyle="light-content"/>
      <Image
        source={require('../assets/Icon.png')}
        style={styles.logo}
      />
 
 <Text style={styles.text2}>ลงทะเบียน</Text>

 <Text style={styles.text_footer}>อีเมล</Text>
      <FormInputSignup
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="อีเมล"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}/>

 <Text style={styles.text_footer}>รหัสผ่าน</Text>
      <FormInputSignup
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="รหัสผ่าน"
        iconType="lock"
        secureTextEntry={true}/>

 <Text style={styles.text_footer}>ยืนยันรหัสผ่าน</Text>
      <FormInputSignup
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="ยืนยันรหัสผ่าน"
        iconType="lock"
        secureTextEntry={true}/>

 <Text style={styles.text_footer}>ชื่อผู้ใช้</Text>
      <FormInputPage
        placeholderText="ชื่อผู้ใช้"
        iconType="user"/>

 <Text style={styles.text_footer}>น้ำหนัก</Text>
      <FormInputPage
        placeholderText="น้ำหนัก"
        iconType="user"/>

 <Text style={styles.text_footer}>เพศ</Text>
             <CheckBox/>

 <Text style={styles.text_footer}>รูปแบบการแจ้งเตือน</Text>
      <FormInputPage
        placeholderText="รูปแบบการเตือน"
        iconType="user"/>

 <Text style={styles.text_footer}>ช่วงเวลาการแจ้งเตือน</Text>
      <FormInputPage
        placeholderText="ช่วงเวลาการเตือน"
        iconType="user"/>

      <FormButtonSignup
        buttonTitle="ลงทะเบียน"
        onPress={() => register(email, password)}/>

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          มีบัญชีผู้ใช้แล้ว ?   {' '}
        </Text>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003357',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    marginHorizontal: -10, 
    marginTop:-20,
  },
  logo: {
    height: 125,
    width: 110,
    resizeMode: 'cover',
    marginHorizontal: 140, 
  },
  text_footer: {
    color: '#fff',
    fontSize:20,
    marginTop:20,
    marginHorizontal: 20,
},
text: {
  color: '#FE685E',
  marginTop:0
},
  text1: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: '#fff',
    marginTop: 50,
    textAlign: "center",
    justifyContent: "center"
  },
  text2: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    marginHorizontal: 144, 
    marginTop: 20,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
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
    marginTop: 40,
  },
  color_textPrivate: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: '#fff',
    marginTop: 14,
  },
});
