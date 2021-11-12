import React, { Component, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';
import { Slider } from 'react-native-elements';


/*const Page = ({label}) => (
  <View style={styles.container}>
  <Text style={styles.welcome}>
     {label}
    </Text>
   <Text style={styles.instructions}>      To get started, edit index.ios.js
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  </View>
);*/


export default function ButtomSheet2() {
  const refRBSheet = useRef();
  const [value, setValue] = useState(2);
  const [vertValue, setVertValue] = useState(0);


  return (
    <View style={{ marginTop: 10, alignItems: "center" }}>

      <Button buttonStyle={{
        backgroundColor: '#FF6347',
        borderRadius: 40,
        borderWidth: 0,
      }}
        icon={
          <MaterialCommunityIcons name="beer" size={60} color="#fff" />}
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        height={600}
        duration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingVertical: 0,
            paddingHorizontal: 15
          }
        }}>

        <View style={styles.container}>
          <ScrollableTabView instructions
            style={{ marginTop: 10 }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}>

            {/**-----------------------------------------------------------------น้ำเปล่า-----------------------------------------------------------------*/}
            <View tabLabel='น้ำ' style={{ width: '100%', height: '95%', alignItems: 'center' }}>
              <View style={{ width: '90%', height: 110, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3 }}>
                  <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50
                      }}
                      source={{ uri: 'https://illustoon.com/photo/4919.png' }}
                    />
                  </View>
                  <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>น้ำเปล่า</Text>
                  </View>
                  <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                    <MaterialCommunityIcons
                      name={'close-circle'}
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3 }}>
                  <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50
                      }}
                      source={{ uri: 'https://illustoon.com/photo/4919.png' }}
                    />
                  </View>
                  <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>น้ำเปล่า</Text>
                  </View>
                  <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                    <MaterialCommunityIcons
                      name={'close-circle'}
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3 }}>
                  <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50
                      }}
                      source={{ uri: 'https://illustoon.com/photo/4919.png' }}
                    />
                  </View>
                  <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>น้ำเปล่า</Text>
                  </View>
                  <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                    <MaterialCommunityIcons
                      name={'close-circle'}
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
              <View style={{ width: '90%', height: 110, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3 }}>
                  <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialCommunityIcons
                      name={'plus-circle'}
                      size={60}
                      color={'#C46963'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                  </View>
                  <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                    <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                  </View>
                  <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                    <Slider
                      value={value}
                      onValueChange={(value) => setValue(value)}
                      maximumValue={1200}
                      minimumValue={0}
                      step={10}
                      allowTouchTrack
                      trackStyle={{ height: 8, backgroundColor: 'transparent', borderRadius: 20 }}
                      thumbStyle={{ height: 30, width: 30, backgroundColor: 'white', elevation: 3 }}
                      thumbProps={{
                        children: (
                          <MaterialCommunityIcons
                            name="water"
                            type="font-awesome"
                            size={30}
                            reverse
                            containerStyle={{ bottom: 20, right: 20 }}
                            color={'#78D0FF'}
                          />
                        ),
                      }}
                    />
                  </View>
                  <View style={{ width: '100%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setValue(value + 100)} style={{ width: 80, height: 35, backgroundColor: '#FFB9B5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 3 }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+ 100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setValue(value + 150)} style={{ width: 80, height: 35, backgroundColor: '#FFB9B5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 3 }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+ 150</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setValue(value + 200)} style={{ width: 80, height: 35, backgroundColor: '#FFB9B5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 3 }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+ 200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setValue(value + 250)} style={{ width: 80, height: 35, backgroundColor: '#FFB9B5', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 3 }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+ 250</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ width: '100%', height: 80, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}

            <Text tabLabel='ชา'>ชา</Text>

            <Text tabLabel='กาแฟ'>กาแฟ</Text>

            <Text tabLabel='นม'>นม</Text>

            <Text tabLabel='น้ำอัดลม'>น้ำอัดลม</Text>

            <Text tabLabel='อื่นๆ'>อื่นๆ</Text>

          </ScrollableTabView>

        </View>

      </RBSheet>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
  textStyle: {
    fontSize: 23,
    fontFamily: 'Kufam-SemiBoldItalic',
    marginTop: 70,
    fontWeight: 'bold',
  },
});