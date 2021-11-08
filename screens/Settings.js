import React, {useContext} from 'react';
import {View, SafeAreaView, StyleSheet, Settings} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import FormButtonLogout  from '../components/Button/FormButtonLogout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const settings = () => {  
  const {user , logout} = useContext(AuthContext);
  return (
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
            marginTop:50}}>
            <Title style={[styles.title, {
              marginTop:12,
              marginBottom: 5,
              marginLeft: 13
            }]}>ข้อมูลส่วนตัว</Title>
          </View>
          <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem1}>
            <FontAwesome5 name="user-edit" color="#FFf" size={20}/>
            <Text style={styles.menuItemText1}>แก้ไข</Text>
          </View>
        </TouchableRipple>
      </View>


      <View style={styles. userInfo}>
        <View style={styles.row}>
          <FontAwesome5 name="user-alt" color="#fff" size={24}/>
          <Text style={{color:"#fff",fontSize: 20, marginLeft: 20}}>ชื่อ</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="weight" color="#fff" size={24}/>
          <Text style={{color:"#fff",fontSize: 20, marginLeft: 20}}>น้ำหนัก</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="md-male-female" color="#fff" size={25}/>
          <Text style={{color:"#fff",fontSize: 20, marginLeft: 20}}>เพศ</Text>
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
              marginTop:12,
              marginBottom: 5,
              marginLeft: 12,
            }]}>ข้อมูลทั่วไป</Title>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="md-notifications" color="#fff" size={25}/>
            <Text style={styles.menuItemText}>การแจ้งเตือน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#fff" size={25}/>
            <Text style={styles.menuItemText}>เป้าหมายรายวัน</Text>
          </View>
        </TouchableRipple>
        <View style={styles.menuItem}>
            <Ionicons name="md-log-out-outline" color="#fff" size={25}/>
        <FormButtonLogout  buttonTitle='ออกจากระบบ' onPress={() => logout()} />
        </View>
      </View>
      
    </SafeAreaView>
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
    marginBottom: 30,
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
