import React, { useContext, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Settings, TextInput, Picker, Button, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import FormButtonLogout from '../components/Button/FormButtonLogout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';


const settings = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(1);
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
            width: 152,
            height: 55,
            borderWidth: 0,
            borderRadius: 17,
            marginLeft: -5,
            marginTop: 50
          }}>
            <Title style={[styles.title, {
              marginTop: 12,
              marginBottom: 5,
              marginLeft: 13
            }]}>ข้อมูลส่วนตัว</Title>
          </View>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem1}>
              <FontAwesome5 name="user-edit" color="#FFf" size={20} />
              <Text style={styles.menuItemText1}>แก้ไข</Text>
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
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <TextInput
                style={{
                  width: 100,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                  height: 35,
                  fontSize: 18
                }}
                value={weight}
                onChangeText={(value) => setWeight(value)}
              />
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

        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={showTimepicker}>
            <View style={styles.menuItem}>
              <Ionicons name="md-notifications" color="#fff" size={25} />
              <Text style={styles.menuItemText}>เริ่มต้นการแจ้งเตือน</Text>
              <View>
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
              </View>
            </View>
          </TouchableOpacity>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#fff" size={25} />
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
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#fff" size={25} />
              <Text style={styles.menuItemText}>รูปแบบการแจ้งเตือน</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#fff" size={25} />
              <Text style={styles.menuItemText}>ปริมาณน้ำที่ดื่มประจำวัน</Text>
            </View>
          </TouchableRipple>
          <View style={styles.menuItem}>
            <Ionicons name="md-log-out-outline" color="#fff" size={25} />
            <FormButtonLogout buttonTitle='ออกจากระบบ' onPress={() => logout()} />
          </View>
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
    marginTop: 60,
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
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Lato-Regular'
  },
});
