import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements'
import Progress from "../Progress";
import { Slider } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IP } from "../../ipaddress";


export default function ButtomSheet1() {
  const [value, setValue] = useState(0);
  const [exer, setexer] = useState(0);
  const [level, setlevel] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [u_id, setU_id] = useState();
  const [data, setData] = useState([]);
  const refRBSheet = useRef();

  const Getid = async () => {
    try {
      const res = await AsyncStorage.getItem('u_id');
      setU_id(res)
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
        const res = await axios.get(IP + '/excer_insert.php', {
          params: {
            u_id: u_id,
            e_l_type: exer,
            e_l_level: level,
            e_l_hour: value
          }
        });
        setSubmit(false)
      } catch (err) {
        console.log(err)
        setSubmit(false)
      }
    }
    if (submit) fectch();
  }, [submit])

  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/main.php', {
          params: {
            u_id: u_id
          }
        });
        setData(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [data])


  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>

      <Button buttonStyle={{
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 0,
      }}
        icon={
          <MaterialCommunityIcons name="weight-lifter" size={38} color="#FF6347" />}
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        height={550}
        duration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingVertical: 0,
            paddingHorizontal: 15
          }
        }}>

        <View style={{ width: '95%', height: '95%', alignItems: 'center' }}>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>เป้าหมาย</Text>
          </View>
          <FlatList
            style={{ width: '100%' }}
            data={data}
            renderItem={({ item }) => (
              <>
                <View style={{ width: '90%', height: 30, justifyContent: 'flex-end', marginLeft: 20 }}>
                  <Text style={{ fontSize: 18 }}>{parseInt(item.target)} มล.</Text>
                </View>
                <View style={{ width: '90%', height: 20, justifyContent: 'flex-end', marginLeft: 20 }}>

                  <Progress step={item.isprogress} steps={item.target} height={8} />
                </View>
              </>
            )}
          />


          <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: -20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>สถานที่ออกกำลังกาย</Text>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-start', marginLeft: 20, alignItems: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setexer(0)} style={{ width: 150, height: 45, backgroundColor: exer == 0 ? '#FE685E' : '#FFC4C0', borderRadius: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name={'white-balance-sunny'}
                size={20}
                color={'white'}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>กลางแจ้ง</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setexer(1)} style={{ width: 150, height: 45, backgroundColor: exer == 1 ? '#FE685E' : '#FFC4C0', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name={'white-balance-sunny'}
                size={20}
                color={'black'}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>ในร่ม</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: -20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ระดับการออกกำลังกาย</Text>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'center', marginLeft: 20, alignItems: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setlevel(0)} style={{ width: 100, height: 45, backgroundColor: level == 0 ? '#FE685E' : '#FFC4C0', borderRadius: 20, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>เบา</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setlevel(1)} style={{ width: 100, height: 45, backgroundColor: level == 1 ? '#FE685E' : '#FFC4C0', borderRadius: 20, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>ปานกลาง</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setlevel(2)} style={{ width: 100, height: 45, backgroundColor: level == 2 ? '#FE685E' : '#FFC4C0', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>หนัก</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 40, width: '100%', justifyContent: 'flex-end',marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>เลือกเวลา(ชม.)</Text>
          </View>
          <View style={{ height: 40, width: '100%', justifyContent: 'flex-end',marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> {value} ชม.</Text>
          </View>
          <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>

            <Slider
              value={value}
              onValueChange={(value) => setValue(value)}
              maximumValue={10}
              minimumValue={1}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 8, backgroundColor: 'transparent', borderRadius: 20 }}
              thumbStyle={{ height: 30, width: 30, backgroundColor: 'white', elevation: 3 }}
              thumbProps={{
                children: (
                  <MaterialCommunityIcons
                    name="timer"
                    type="font-awesome"
                    size={30}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color={'#FFC4C0'}
                  />
                ),
              }}
            />
          </View>
          <View style={{ width: '100%', height: 80, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSubmit(true); refRBSheet.current.close() }} >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
            </TouchableOpacity>
          </View>
        </View>

      </RBSheet>
    </View>
  );
}




const styles = StyleSheet.create({

  textStyle: {
    fontSize: 23,
    fontFamily: 'Kufam-SemiBoldItalic',
    marginTop: 70,
    fontWeight: 'bold',
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
  },
});