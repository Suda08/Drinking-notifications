import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet,StatusBar,SafeAreaView,TouchableOpacity } from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtomSheet1 from "../components/Button/ButtomSheet1";
import ButtomSheet2 from "../components/Button/ButtomSheet2";
import LocalWeather from "../components/Weather/LocalWeather";


const HomePage = ({navigation}) => {
    const [currentDate, setcurrentDate] = useState ('')
    useEffect (() => {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()
        setcurrentDate(
            date + '/' + month + '/' + year
        )
    }, []) 

    return (
      <View style={styles.container}>
         <StatusBar backgroundColor='#003357' barStyle="light-content"/>
         <SafeAreaView style={{ flex:1 , marginTop: 20}}>
         <Text style={styles.textStyle}>วันนี้</Text>
         <Text style={styles.text}>{currentDate}</Text> 

           <LocalWeather/>

      <View style={styles.absoluteFill}> 
          <Svg height="60%" width="260%" viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="3.5" fill="#246588"/></Svg>
      </View>

      <View style={styles.categoryContainer}>
        
        <ButtomSheet1/>

        <ButtomSheet2/>
        
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
    );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#114165',
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
  justifyContent: 'center',
  top:-50
},
categoryContainer: {
  flexDirection: 'row',
  width: '100%',
  alignSelf: 'center',
  marginTop: -50,
  marginBottom: 10,
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
