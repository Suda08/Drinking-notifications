import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';
import { Slider } from 'react-native-elements';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IP } from "../../ipaddress";





export default function ButtomSheet2() {
  const refRBSheet = useRef();
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);
  const [typewater, setTypewater] = useState([]);
  const [u_id, setU_id] = useState();
  const [b_id, setB_id] = useState();
  const [active, setActive] = useState();
  const [submit, setSubmit] = useState(false);
  const [shownoti, setShownoti] = useState();


  const imgpath = IP + '/image/';


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
        const res = await axios.get(IP + '/beverage_list.php');
        setTypewater(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [typewater]);

  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/drink_insert.php', {
          params: {
            u_id: u_id,
            b_id: b_id,
            d_l_volume: value
          }
        });
        setB_id();
        setActive(null);
        setSubmit(false)
      } catch (err) {
        console.log(err)
        setB_id();
        setActive(null);
        setSubmit(false)
      }
    }
    if (submit) fectch();
  }, [submit])

    
  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/show_noti.php', {
          params: {
            u_id: u_id,
          }
        });
        //   setVal(res.data.n_t_val);
        //onSubmit(Number(res.data.n_t_val));
        setShownoti(res.data);
    
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  });

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
      <View style={{width:'100%',height:20,alignItems:'flex-end',position:'absolute',top:-8}}>
        {shownoti == 0 ? (
          <>
          <View></View>
          </>
        ) : (
          <>
    <View style={{backgroundColor:'red' ,width:28,height:28,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:14,color:'white'}}>{shownoti}</Text>
            </View>
          </>
        )}
       
      </View>
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
              <View style={{ width: '90%', height: 250,top: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList
                  style={{
                    height: '100%'
                  }}
                  data={typewater}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <>
                      {item.b_cat == '1' ? (
                        <>

                          <TouchableOpacity onPress={() => { setB_id(item.b_id); setActive(item.b_id) }} style={{ width: 100, backgroundColor: active == item.b_id ? '#FE685E' : '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3, marginBottom: 20 }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Image
                                style={{
                                  width: '20%',
                                  height: '70%',
                                }}
                                source={{ uri: imgpath + item.b_image + '.png' }}
                              />
                            </View>
                            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                              <MaterialCommunityIcons
                                name={'close-circle'}
                                size={15}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <View style={{ backgroundColor: 'white' }}>
                          </View>
                        </>
                      )}

                    </>
                  )}
                />

              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ width: '50%' }}>
                      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                      </View>
                      <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                        <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                      </View>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <TouchableOpacity >
                        <View style={{ width: '50%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons
                            name={'plus-circle'}
                            size={30}
                            color={'#C46963'}
                          />
                          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>เพิ่มน้ำดื่ม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>



                  <View style={{ width: '100%', height: 10, justifyContent: 'center' }}>
                    <Slider
                      value={value}
                      onValueChange={(value) => setValue(value)}
                      maximumValue={1200}
                      minimumValue={0}
                      step={10}
                      allowTouchTrack
                      trackStyle={{ height: 8, color: 'white', borderRadius: 20 }}
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (b_id == null) {
                      alert('กรุณาเลือกน้ำดื่ม')
                    } else {
                      { setSubmit(true); refRBSheet.current.close() }
                    }
                  }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}

            {/**-----------------------------------------------------------------น้ำเปล่า-----------------------------------------------------------------*/}
            <View tabLabel='ชา' style={{ width: '100%', height: '95%', alignItems: 'center' }}>
              <View style={{ width: '90%', height: 250,top: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList
                  style={{
                    height: '100%'
                  }}
                  data={typewater}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <>
                      {item.b_cat == '2' ? (
                        <>

                          <TouchableOpacity onPress={() => { setB_id(item.b_id); setActive(item.b_id) }} style={{ width: 100, backgroundColor: active == item.b_id ? '#FE685E' : '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3, marginBottom: 20 }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Image
                                style={{
                                  width: '50%',
                                  height: '50%',
                                }}
                                source={{ uri: imgpath + item.b_image + '.png' }}
                              />
                            </View>
                            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                              <MaterialCommunityIcons
                                name={'close-circle'}
                                size={15}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <View style={{ backgroundColor: 'transparent' }}>
                          </View>
                        </>
                      )}

                    </>
                  )}
                />

              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ width: '50%' }}>
                      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                      </View>
                      <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                        <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                      </View>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <TouchableOpacity >
                        <View style={{ width: '50%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons
                            name={'plus-circle'}
                            size={30}
                            color={'#C46963'}
                          />
                          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>เพิ่มน้ำดื่ม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (b_id == null) {
                      alert('กรุณาเลือกน้ำดื่ม')
                    } else {
                      { setSubmit(true); refRBSheet.current.close() }
                    }
                  }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}


            {/**-----------------------------------------------------------------น้ำเปล่า-----------------------------------------------------------------*/}
            <View tabLabel='กาแฟ' style={{ width: '100%', height: '95%', alignItems: 'center' }}>
              <View style={{ width: '90%', height: 250,top: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList
                  style={{
                    height: '100%'
                  }}
                  data={typewater}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <>
                      {item.b_cat == '3' ? (
                        <>

                          <TouchableOpacity onPress={() => { setB_id(item.b_id); setActive(item.b_id) }} style={{ width: 100, backgroundColor: active == item.b_id ? '#FE685E' : '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3, marginBottom: 20 }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Image
                                style={{
                                  width: '30%',
                                  height: '50%',
                                }}
                                source={{ uri: imgpath + item.b_image + '.png' }}
                              />
                            </View>
                            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                              <MaterialCommunityIcons
                                name={'close-circle'}
                                size={15}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <View style={{ backgroundColor: 'transparent' }}>
                          </View>
                        </>
                      )}

                    </>
                  )}
                />

              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ width: '50%' }}>
                      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                      </View>
                      <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                        <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                      </View>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <TouchableOpacity >
                        <View style={{ width: '50%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons
                            name={'plus-circle'}
                            size={30}
                            color={'#C46963'}
                          />
                          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>เพิ่มน้ำดื่ม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (b_id == null) {
                      alert('กรุณาเลือกน้ำดื่ม')
                    } else {
                      { setSubmit(true); refRBSheet.current.close() }
                    }
                  }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}



            {/**-----------------------------------------------------------------น้ำเปล่า-----------------------------------------------------------------*/}
            <View tabLabel='นม' style={{ width: '100%', height: '95%', alignItems: 'center' }}>
              <View style={{ width: '90%', height: 250,top: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList
                  style={{
                    height: '100%'
                  }}
                  data={typewater}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <>
                      {item.b_cat == '4' ? (
                        <>

                          <TouchableOpacity onPress={() => { setB_id(item.b_id); setActive(item.b_id) }} style={{ width: 100, backgroundColor: active == item.b_id ? '#FE685E' : '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3, marginBottom: 20 }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Image
                                style={{
                                  width: '50%',
                                  height: '50%',
                                }}
                                source={{ uri: imgpath + item.b_image + '.png' }}
                              />
                            </View>
                            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                              <MaterialCommunityIcons
                                name={'close-circle'}
                                size={15}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <View style={{ backgroundColor: 'transparent' }}>
                          </View>
                        </>
                      )}

                    </>
                  )}
                />

              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ width: '50%' }}>
                      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                      </View>
                      <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                        <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                      </View>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <TouchableOpacity >
                        <View style={{ width: '50%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons
                            name={'plus-circle'}
                            size={30}
                            color={'#C46963'}
                          />
                          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>เพิ่มน้ำดื่ม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (b_id == null) {
                      alert('กรุณาเลือกน้ำดื่ม')
                    } else {
                      { setSubmit(true); refRBSheet.current.close() }
                    }
                  }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}



            {/**-----------------------------------------------------------------น้ำเปล่า-----------------------------------------------------------------*/}
            <View tabLabel='น้ำอัดลม' style={{ width: '100%', height: '95%', alignItems: 'center' }}>
              <View style={{ width: '90%', height: 250,top: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList
                  style={{
                    height: '100%'
                  }}
                  data={typewater}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <>
                      {item.b_cat == '' ? (
                        <>

                          <TouchableOpacity onPress={() => { setB_id(item.b_id); setActive(item.b_id) }} style={{ width: 100, backgroundColor: active == item.b_id ? '#FE685E' : '#FFB9B5', height: 100, borderRadius: 15, marginRight: 20, elevation: 3, marginBottom: 20 }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Image
                                style={{
                                  width: '50%',
                                  height: '50%',
                                }}
                                source={{ uri: imgpath + item.b_image + '.png' }}
                              />
                            </View>
                            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', left: '80%', top: '5%' }}>
                              <MaterialCommunityIcons
                                name={'close-circle'}
                                size={15}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <View style={{ backgroundColor: 'transparent' }}>
                          </View>
                        </>
                      )}

                    </>
                  )}
                />

              </View>
              <View style={{ width: '90%', height: '60%' }}>
                <View style={{ width: '100%', height: 220 }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ width: '50%' }}>
                      <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ปริมาณ</Text>
                      </View>
                      <View style={{ width: '90%', height: 40, marginLeft: 30 }}>
                        <Text style={{ fontSize: 16 }}>{value} มล.</Text>
                      </View>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <TouchableOpacity >
                        <View style={{ width: '50%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons
                            name={'plus-circle'}
                            size={30}
                            color={'#C46963'}
                          />
                          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>เพิ่มน้ำดื่ม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF0000', marginRight: 30 }}>ยกเลิก</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (b_id == null) {
                      alert('กรุณาเลือกน้ำดื่ม')
                    } else {
                      { setSubmit(true); refRBSheet.current.close() }
                    }
                  }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3AD44D' }}>ตกลง</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/**-----------------------------------------------------------------------------------------------------------------------------------------*/}
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