
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { Header } from 'react-native-elements';
import { IP } from '../ipaddress';

import Date from '../components/Date'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Statis = () => {
    const [u_id, setU_id] = useState(23);
    const [chartweek, setChartweek] = useState([])
    const [sumstatis, setSumstatis] = useState()
    const [listdata, setlistdata] = useState([])
    const [isLoading, setIsloading] = useState(false)

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
        const dayofweek = async () => {
            try{
            const response = await axios.get( IP +'/list_statis.php',{
                params:{
                    u_id:u_id
                }
            })
            setlistdata(response.data);
            } catch(err){
                console.log(err)
            }
        }
        dayofweek();
    }, [listdata])


    useEffect(() => {
        const dayofweek = async () => {
            try{
            const response = await axios.get( IP +'/sumstatis.php',{
                params:{
                    u_id:u_id
                }
            })
            setSumstatis(response.data);
            } catch(err){
                console.log(err)
            }
        }
        dayofweek();
    }, [sumstatis])

    
    useEffect(() => {
        const dayofweek = async () => {
            try{
            const response = await axios.get( IP +'/chart_statis.php',{
                params:{
                    u_id:u_id
                }
            })
            if(response.data == null){
                setIsloading(false)
            }else{
                setIsloading(true); 
                setChartweek(response.data);
            }
               
               
                
            } catch(err){
                console.log(err)
            }
        }
        dayofweek();
    }, [chartweek])

    return (
        <>
            <Header
                containerStyle={{
                    backgroundColor: '#003357',
                    borderBottomColor: '#003357',
                    height: 110
                }}
                centerComponent={
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>สถิติ</Text>
                }

            />
            <View style={styles.container}>
                <View style={{ width: '100%', height: 50, justifyContent: 'center',marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>สถิติสัปดาห์นี้</Text>
                </View>


                <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
               {!isLoading ? (
                    <>
                    <Text>Loading ...</Text>
                    </>
               ) : (
                   <>
                <BarChart
                data={{
                    labels: ['อาทิตย์','จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี','ศุกร์','เสาร์'],
                    datasets: [
                        {
                            data: chartweek.map((item) => (item.val)),
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
                   </>
               )}
               
                </View>
                <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 100 }}>สถิติรวม</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>{chartweek == null ? 'ไม่มีข้อมูล' : sumstatis}</Text><Text style={{ fontSize: 16, fontWeight: 'bold' }}>/ 730,000 มล.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>เครื่องดื่ม </Text>
                </View>

                <FlatList 
                data={listdata}
                renderItem={({item}) => (
                    <>
                    <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '95%', height: 50, backgroundColor: '#10486E', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                            <Image 
                                    source={{uri:imgpath + item.b_image + '.png'}}
                                    style={{
                                            width:30,
                                            height:30
                                        }}
                                />
                        </View>
                          <View style={{width:'50%'}}>
                              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.b_name}</Text>
                          </View>

                          <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.sumdrink} มล.</Text>
                        </View>

                            

                        </View>
                    </View>
                    </>
                )}
                />
               

               
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#114165',
        marginBottom:50

    },
    title: {
        padding: 16,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Statis;
