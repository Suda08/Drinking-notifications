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
import InputPage1 from './InputPage1';


const PostScreen = ({navigation}) => {  
  
  return (
    <SafeAreaView style={styles.container}>
     
          

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('InputPage1')}>
          <View style={styles.menuItem}>
            <Ionicons name="md-notifications" color="#fff" size={25}/>
            <Text style={styles.menuItemText}>ดื่มน้ำตอนไหน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#fff" size={25}/>
            <Text style={styles.menuItemText}>เป้าหมายรายวัน</Text>
          </View>
        </TouchableRipple>
        
      </View>
      
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114165',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 50,
    flexDirection: 'row',
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 50,
    
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
    marginTop: 20,
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
