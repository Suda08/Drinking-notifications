import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtomSheet1 from "../components/Button/ButtomSheet1";
import ButtomSheet2 from "../components/Button/ButtomSheet2";
import LocalWeather from "../components/Weather/LocalWeather";
import { Header } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import ProgressCircle from 'react-native-progress-circle'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IP } from "../ipaddress";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const screenWidth = Dimensions.get('window').width;



const HomePage = ({ navigation }) => {
  const [currentDate, setcurrentDate] = useState('')
  const [target, setTarget] = useState(600);
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [uid, setUid] = useState();
  const [temp, setTemp] = useState();
  const [tempdes, setTempdes] = useState();
  const [icon, setIcon] = useState();
  const [text, onChangeText] = useState(60);
 

  const getIcon = 'http://openweathermap.org/img/wn/'
  const imgpath = IP + '/image/';

  const Getid = async () => {
    try {
      const res = await AsyncStorage.getItem('u_id');
      if (res != null) {
        setUid(res);
      } else {
        setUid(1);
      }

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
        const res = await axios.get(IP + '/main.php', {
          params: {
            u_id: uid
          }
        });
        setData(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [data])

 



  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/temp_api.php');
        setTemp(res.data.temp);
        setTempdes(res.data.tempdes);
        setIcon(res.data.icon);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [temp])


  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    setcurrentDate(
      date + '/' + month + '/' + year
    )
  }, [])




  return (
    <>
      <Header
        containerStyle={{
          backgroundColor: '#003357',
          borderBottomColor: '#003357',
          height: 100
        }}
        centerComponent={
          <Image source={require('../assets/icon.png')}
            style={{ height: 40, width: 30 }} />
        }

      />
      <View style={styles.container}>
        <SafeAreaView style={{ marginTop: -70}}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <View style={{ width: '50%' }}>
                    <Text style={styles.textStyle}>วันนี้</Text>
                    <Text style={styles.text}>{currentDate}</Text>
                  </View>
                  <View style={{ width: '50%', alignItems: 'flex-end', height: 80, alignItems: 'center' }}>
                    <View style={{ width: '70%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={{ uri: getIcon + icon + '@2x.png' }}
                      />
                      <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{tempdes}</Text>
                    </View>
                    <View style={{ width: '70%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{temp} C</Text>
                    </View>
                  </View>
                </View>




                <View style={styles.absoluteFill}>
                  <ProgressCircle
                    percent={item.isprogress * 100 / item.target}
                    radius={120}
                    borderWidth={10}
                    color="#79E386"
                    shadowColor="white"
                    bgColor="#95B2C5"
                  >
                    <View style={{ width: '100%', height: '100%' }}>
                      <View style={{ width: '100%', height: '55%', justifyContent: 'center', borderBottomColor: 'white', borderBottomWidth: 2 }}>
                        <View style={{ width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>เป้าหมาย</Text>
                        </View>
                        <View style={{ width: '100%', height: '50%', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18, color: 'white' }}>
                            {parseInt(item.target)} มล.
                          </Text>
                          <FlatList
                            data={item.isexcer}
                            renderItem={({ item }) => (
                              <>
                                {item.isexcer == true ? (
                                  <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: 30 }}>
                                      <MaterialCommunityIcons
                                        name={'run'}
                                        size={20}
                                        color={'tomato'}
                                      />
                                      <Text style={{ color: 'tomato' }}> / {item.count}</Text>
                                    </View>
                                  </>
                                ) : (
                                  <Text></Text>
                                )}
                              </>
                            )}
                          />
                        </View>
                      </View>
                      <View style={{ width: '100%', height: '45%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>{parseInt(item.isprogress * 100 / item.target)} %</Text>
                      </View>
                    </View>

                  </ProgressCircle>
                </View>

                <View style={{ width: '100%', alignItems: 'center', }}>
                  <View style={{ width: '80%', height: 50, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'left', fontSize: 22, paddingTop: 10, fontWeight: 'bold', color: 'white' }}>
                      บันทึกวันนี้
                    </Text>
                  </View>
                  <ScrollView style={{ width: '80%', height: 150 }}>
                    <FlatList
                      data={item.datalog}
                      renderItem={({ item }) => (
                        <>
                          <View style={{ width: '100%', height: 40 }}>
                            <View style={{ width: '100%', height: 30,  backgroundColor: '#114A6F', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, marginLeft: 10,color:'#fff' }}>
                                {item.d_l_time.substring(0, 5)+' น.'}
                              </Text>
                              <Image
                                          style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 15
                                          }}
                                          source={{ uri: imgpath + item.b_image + '.png' }}
                                        />
                              <Text style={{ textAlign: 'center', fontSize: 18, marginRight: 50,color:'#fff',marginLeft: 15 }}>
                                {item.b_name}
                              </Text>
                              <Text style={{ textAlign: 'center', fontSize: 18,color:'#fff',marginLeft: 5 }}>
                                {item.d_l_volume+' มล.'}
                              </Text>
                            </View>
                          </View>
                        </>
                      )}
                    />
                  </ScrollView>
                </View>
              </>
            )}
          />

          <View style={styles.categoryContainer}>

            <ButtomSheet1 />


            <ButtomSheet2 />

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() =>
                navigation.navigate('PostScreen',)
              }>

              <View style={styles.categoryIcon}>
                <MaterialCommunityIcons name="lightbulb-on" size={38} color="#FF6347" />
              </View>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114165',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 23,
    fontFamily: 'Kufam-SemiBoldItalic',
    color: '#fff',
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 19,
    fontFamily: 'Kufam-SemiBoldItalic',
    color: '#fff',
    marginHorizontal: 20,
    marginTop: 5,
  },
  absoluteFill: {
    alignItems: 'center',
    marginTop: 20


  },
  categoryContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    
  },
  categoryBtn: {
    flex: 1,
    width: '100%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 55,
    height: 55,
    backgroundColor: '#fff' /* '#FF6347' */,
    borderRadius: 50,
    marginTop: 10
  },

  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
});
