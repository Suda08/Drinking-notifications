import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, StatusBar, SafeAreaView, Picker } from 'react-native';
import FormInputSignup from '../components/FormInput/FormInputSignup';
import FormButtonSignup from '../components/Button/FormButtonSignup';
import FormInputPage from '../components/FormInput/FormInputPage';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { IP } from '../ipaddress';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUSer] = useState();
  const [weight, setWieght] = useState();
  const [gender, setGender] = useState();
  const [typenoti, settypenoti] = useState();
  const [endnoti, setEndnoti] = useState();
  const [startnoti, setStarnoti] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [submit, setSubmit] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let ftime = 'Hours: ' + tempDate.getHours() + ' | minute' + tempDate.getMinutes();

    setText(fDate + '(' + ftime + ')')
    setStarnoti(ftime)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    const Login = async () => {
      try {
        const res = await axios.get(IP + '/register.php', {
          params: {
            email: email,
            password: password,
            username: user,
            weight: weight,
            gender: gender,
            s_n: '09:00:00',
            e_n: '18:00:00',
            n_t: typenoti,
          }

        })
        if (res.data == 'success') {
          setSubmit(false)
          alert(res.data);
          navigation.navigate('Login');
        } else {
          alert('กรอกใหม่')
          setSubmit(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (submit) Login();
  }, [submit])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor='#003357' barStyle="light-content" />
        <Image style={styles.logo} source={require('../assets/icon.png')} />

        <Text style={styles.text2}>ลงทะเบียน</Text>

        <Text style={styles.text_footer}>ชื่อผู้ใช้</Text>
        <FormInputPage
          value={user}
          onChangeText={(userPassword) => setUSer(userPassword)}
          placeholderText="ชื่อผู้ใช้"
          iconType="user" />
        <Text style={styles.text_footer}>อีเมล</Text>
        <FormInputSignup
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="อีเมล"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false} />

        <Text style={styles.text_footer}>รหัสผ่าน</Text>
        <FormInputSignup
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="รหัสผ่าน"
          iconType="lock"
          secureTextEntry={true} />

        <Text style={styles.text_footer}>ยืนยันรหัสผ่าน</Text>
        <FormInputSignup
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholderText="ยืนยันรหัสผ่าน"
          iconType="lock"
          secureTextEntry={true} />

       

        <Text style={styles.text_footer}>น้ำหนัก</Text>
        <FormInputPage
          value={weight}
          onChangeText={(userPassword) => setWieght(userPassword)}
          placeholderText="น้ำหนัก"
          iconType="user" />

        <Text style={styles.text_footer}>เพศ</Text>
        <RadioButton.Group onValueChange={(newValue) => setGender(newValue)} value={gender}>
          <View style={styles.containerbox}>
            <View style={styles.CheckMan}>
              <RadioButton color="#fff" value="0" />
              <Text style={styles.text}>ชาย</Text>
            </View>

            <View style={styles.CheckFemale}>
              <RadioButton color="#fff" value="1" />
              <Text style={styles.text}>หญิง</Text>
            </View>
            <View style={styles.CheckNot}>
              <RadioButton color="#fff" value="2" />
              <Text style={styles.text}>ไม่ระบุ</Text>
            </View>
          </View>
        </RadioButton.Group>




        <Text style={styles.text_footer}>รูปแบบการแจ้งเตือน</Text>
        <Picker
          selectedValue={typenoti}
          style={{ height: 50, width: 180, color: '#fff',marginHorizontal: 30,flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 10, }}
          onValueChange={(itemValue, itemIndex) => settypenoti(itemValue)}
        >
          <Picker.Item label="30 นาที" value="0" />
          <Picker.Item label="1 ชั่วโมง" value="1" />
          <Picker.Item label="1 ชั่วโมง 30 นาที" value="2" />
          <Picker.Item label="2 ชั่วโมง" value="3" />
        </Picker>

        <FormButtonSignup
          buttonTitle="ลงทะเบียน"
          onPress={() => setSubmit(true)} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

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
  containerbox: {
    flexDirection: 'row',
    marginHorizontal: 30,
    color: "#fff",
   
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  scrollView: {
    marginHorizontal: -10,
    marginTop: -20,
  },
  logo: {
    height: 135,
    width: 120,
    resizeMode: 'cover',
    marginHorizontal: 140,
    marginTop: 40,
  },
  text_footer: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
    marginTop: 0,
    fontSize: 17,
    marginHorizontal:15,
    marginTop: 5,
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
  CheckMan: {
    flexDirection: 'row',
    color: '#fff',

  },
  CheckFemale: {
    flexDirection: 'row',
  },
  CheckNot: {
    flexDirection: 'row',

  },
});
