import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements'
import Progress from "../Progress";


export default function ButtomSheet1() {
  const refRBSheet = useRef();
  const YourOwnComponent1 = () => <Text style={styles.textStyle}>สถานที่ออกกำลังกาย</Text>;
  const YourOwnComponent2 = () => <Text style={styles.textStyle}>ระดับการออกกำลังกาย</Text>;

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
        height={400}
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
          <View style={{ width: '90%', height: 30, justifyContent: 'flex-end', marginLeft: 20 }}>
            <Text style={{ fontSize: 18 }}>1500 มล.</Text>
          </View>
          <View style={{ width: '90%', height: 20, justifyContent: 'flex-end', marginLeft: 20 }}>
            <Progress step={10} steps={20} height={8} />
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>สถานที่ออกกำลังกาย</Text>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-start', marginLeft: 20, alignItems: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 150, height: 45, backgroundColor: '#FFC4C0', borderRadius: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name={'white-balance-sunny'}
                size={20}
                color={'white'}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>กลางแจ้ง</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 150, height: 45, backgroundColor: '#FFC4C0', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name={'white-balance-sunny'}
                size={20}
                color={'black'}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>ในร่ม</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ระดับการออกกำลังกาย</Text>
          </View>
          <View style={{ width: '90%', height: 50, justifyContent: 'center', marginLeft: 20, alignItems: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 100, height: 45, backgroundColor: '#FFC4C0', borderRadius: 20, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>เบา</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 45, backgroundColor: '#FFC4C0', borderRadius: 20, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>ปานกลาง</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 45, backgroundColor: '#FFC4C0', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>หนัก</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 80, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity >
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