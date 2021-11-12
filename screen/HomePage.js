import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtomSheet1 from "../components/Button/ButtomSheet1";
import ButtomSheet2 from "../components/Button/ButtomSheet2";
import LocalWeather from "../components/Weather/LocalWeather";
import { Header } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import ProgressCircle from 'react-native-progress-circle'

const HomePage = ({ navigation }) => {
  const [currentDate, setcurrentDate] = useState('')
  const [target, setTarget] = useState(600);


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
          height: 110
        }}
        centerComponent={
          <Image source={require('../assets/icon.png')}
            style={{ height: 50, width: 40 }} />
        }

      />
      <View style={styles.container}>
        <SafeAreaView style={{ marginTop: 20 }}>
          <Text style={styles.textStyle}>วันนี้</Text>
          <Text style={styles.text}>{currentDate}</Text>



          <View style={styles.absoluteFill}>
            <ProgressCircle
              percent={target * 100 / 1500}
              radius={120}
              borderWidth={10}
              color="#79E386"
              shadowColor="white"
              bgColor='#FFFFFF'
            >
              <View style={{ backgroundColor: 'grey', width: '100%', height: '100%' }}>
                <View style={{ width: '100%', height: '55%', justifyContent: 'center', borderBottomColor: 'white', borderBottomWidth: 2 }}>
                  <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>เป้าหมาย</Text>
                  </View>
                  <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>1,500 มล.</Text>
                  </View>
                </View>
                <View style={{ width: '100%', height: '45%', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>{target * 100 / 1500} %</Text>
                </View>
              </View>

            </ProgressCircle>
          </View>

          <View style={{ width: '100%', alignItems: 'center', }}>
            <View style={{ width: '80%', height: 50, borderRadius: 10 }}>
              <Text style={{ textAlign: 'left', fontSize: 22, paddingTop: 10, fontWeight: 'bold', color: 'white' }}>
                บันทึกวันนี้
              </Text>
            </View>
            <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', fontSize: 18, paddingTop: 12 }}>
                วันนี้คุณยังไม่ได้ดื่มน้ำ
              </Text>
            </View>
          </View>


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
    marginTop: '25%'
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
