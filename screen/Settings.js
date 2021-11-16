import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Settings, TextInput, Picker, Button, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import FormButtonLogout from '../components/Button/FormButtonLogout';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '../ipaddress';
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const settings = ({ navigation }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(1);
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [typenoti, settypenoti] = useState();
  const [uid, setUid] = useState();
  const [submit, setSubmit] = useState(false);
  const [val, setVal] = useState();
  const [shownoti, setShownoti] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let ftime = 'Hours: ' + tempDate.getHours() + ' | minute' + tempDate.getMinutes();

    setText(fDate + '(' + ftime + ')')
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

  const Getid = async () => {
    try {
      const res = await AsyncStorage.getItem('u_id');
      setUid(res);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Getid();
  });

  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/edit_user.php', {
          params: {
            u_id: uid,
            u_username: name,
            u_gender: gender,
            u_weight: weight,
            u_noti_type: typenoti,
          }
        });
        alert(res.data);
        //   setVal(res.data.n_t_val);
        onSubmit(Number(res.data.n_t_val));
        Createalert(Number(res.data.n_t_val));
        setSubmit(false)
      } catch (err) {
        console.log(err)
        setSubmit(false)
      }
    }
    if (submit) fectch();
  }, [submit])


    const Createalert = async (time) => {
      try {
        const res = await axios.get(IP + '/create_event_alert.php', {
          params: {
            u_id: uid,
            time:time
          }
        });
        alert(res.data);
      } catch (err) {
        console.log(err)
      }
    }


  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/user_show_data.php', {
          params: {
            u_id: uid,
          }
        });
        //   setVal(res.data.n_t_val);
        //onSubmit(Number(res.data.n_t_val));
        setName(res.data.u_username);
        setGender(res.data.u_gender);
        setWeight(res.data.u_weight);
        settypenoti(res.data.u_noti_type);
        
        setSubmit(false)
      } catch (err) {
        console.log(err)
        setSubmit(false)
      }
    }
    fectch();
  }, [name]);

 




  const onSubmit = async (seconds) => {
    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    await Notifications.scheduleNotificationAsync({
      identifier: 'night-notification',
      content: {
        title: `แจ้งเตือนดื่มน้ำ`,
        subtitle: 'Have a great sleep :D',
        body: `ถึงเวลาดื่มน้ำ :D`,
        sound: true,
        data: {
          to: 'new-log'
        },
        color: "#000000"
      },
      trigger: {
        seconds: seconds,
        repeats: true
      }
    });
  };



  const handleNotification = () => {
    console.warn('แจ้งเตือนดื่มน้ำ');
  };

  const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.isDevice && status === 'granted')
      console.log('Notification permissions granted.');
  };

  useEffect(() => {
    askNotification();
    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);


  return (
    <>
      <Header
        containerStyle={{
          backgroundColor: '#003357',
          borderBottomColor: '#003357',
          height: 110
        }}
        centerComponent={
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>การตั้งค่า</Text>
        }

      />
      <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
          <View style={{
            marginLeft: 10,
            backgroundColor: '#FE685E',
            width: 140,
            height: 55,
            borderWidth: 0,
            borderRadius: 17,
            marginLeft: -5,
            marginTop: 30,
          }}>
            <Title style={[styles.title, {
              marginTop: 12,
              marginBottom: 5,
              marginLeft: 12,
              
            }]}>ข้อมูลส่วนตัว</Title>
          </View>
        
          <TouchableRipple onPress={() => { setSubmit(true) }}>
            <View style={styles.menuItem1}>
              <FontAwesome5 name="user-edit" color="#FFf" size={20} />
              <Text style={styles.menuItemText1}>ยืนยันการแก้ไขข้อมูล</Text>
            </View>
          </TouchableRipple>
        </View>


        <View style={styles.userInfo}>

          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomColor: '#FE685E',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <FontAwesome5 name="user-alt" color="#fff" size={24} />
              <Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>ชื่อ</Text>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <TextInput
                style={{
                  width: 100,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                  height: 35,
                  fontSize: 18
                }}
                value={name}
                onChangeText={(value) => setName(value)}
                color={'white'}
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomColor: '#FE685E',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <Ionicons name="md-male-female" color="#fff" size={25} />
              <Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>เพศ</Text>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <Picker
                selectedValue={gender}
                style={{ height: 50, width: 100, color: 'white' }}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="ชาย" value="1" />
                <Picker.Item label="หญิง" value="2" />
              </Picker>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomColor: '#FE685E',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <FontAwesome5 name="weight" color="#fff" size={24} />
              <Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>น้ำหนัก</Text>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end'}}>
              <View style={{ alignItems: 'flex-end',
              paddingVertical: 15,
              paddingHorizontal: -40,
              flexDirection: 'row',
               }}>
              <TextInput
                style={{
                  width: 60,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                  height: 35,
                  fontSize: 18,
                  color: 'white',
                
                }}
                value={weight}
                onChangeText={(value) => setWeight(value)}
              />
              <Text style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}>กก.</Text>
              </View>
              
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={{
            marginLeft: 10,
            backgroundColor: '#FE685E',
            width: 140,
            height: 55,
            borderWidth: 0,
            borderRadius: 17,
            marginLeft: -5
          }}>
            <Title style={[styles.title, {
              marginTop: 12,
              marginBottom: 5,
              marginLeft: 12,
            }]}>ข้อมูลทั่วไป</Title>
          </View>
        </View>

      

        <View style={{ width: '100%', height: 60 }}>
          <TouchableOpacity onPress={showTimepicker}>
            <View style={styles.menuItem}>
              <Ionicons name="md-notifications" color="#fff" size={25} />
              <Text style={styles.menuItemText}>รูปแบบการแจ้งเตือน</Text>

            </View>
          </TouchableOpacity>
        </View>

        <Picker
          selectedValue={typenoti}
          style={{ height: 50, width: 150 ,color: 'white',marginLeft: 260, flexDirection: 'row',marginTop: -55,}}
          onValueChange={(itemValue, itemIndex) => settypenoti(itemValue)}
        >
          <Picker.Item label="30 นาที" value="0" />
          <Picker.Item label="1 ชั่วโมง" value="1" />
          <Picker.Item label="1 ชั่วโมง 30 นาที" value="2" />
          <Picker.Item label="2 ชั่วโมง" value="3" />
        </Picker>

        <View style={{ width: '100%', height: 60 }}>
        <TouchableOpacity onPress={() => {  AsyncStorage.removeItem('u_id'); setTimeout(function(){navigation.navigate('Login')});  }}>
            <View style={styles.menuItem}>
              <Feather name="log-out" color="#fff" size={25} />
              <Text style={styles.menuItemText}>ออกจากระบบ</Text>

            </View>
          </TouchableOpacity>
        </View>
      

      </SafeAreaView>
    </>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114165',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    flexDirection: 'row',
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 20,

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Kufam-SemiBoldItalic',

  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',

  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  infoBoxWrapper: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderTopColor: '#fff',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: -9,
  },
  menuItem1: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 40,
    marginLeft: -15,

  },
  menuItemText1: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 26,
    fontFamily: 'Kufam-SemiBoldItalic',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,

  },
  menuItemText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
    flexDirection: 'row',
    fontFamily: 'Lato-Regular'
  },
});
