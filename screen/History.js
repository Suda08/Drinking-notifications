
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Header } from 'react-native-elements';

import Date from '../components/Date'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '../ipaddress';
import axios from 'axios';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


LocaleConfig.locales['th'] = {
  monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
  monthNamesShort: ["มกรา", "กุมภา", "มีนา", "เมษา", "พฤษภา", "มิถุนา", "กรกฎา", "สิงหา", "กันยา", "ตุลา", "พฤศจิกา", "ธันวา"],
  today: "วันนี้",
  dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
  dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
}
LocaleConfig.defaultLocale = "th"

const History = () => {
  const [uid, setUid] = useState();
  const [calendar, setCalander] = useState();
  const [dataselect, setDataselect] = useState([]);
  const [date, setDate] = useState();
  const [pickdate, setpickdate] = useState();
  const imgpath = IP + '/image/';

  const Getid = async () => {
    try {
      const res = await AsyncStorage.getItem('u_id');
      setUid(res);
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
        const res = await axios.get(IP + '/calendar.php', {
          params: {
            u_id: uid
          }
        });
        setCalander(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [calendar])


  useEffect(() => {
    const fectch = async () => {
      try {
        const res = await axios.get(IP + '/calendar_stat.php', {
          params: {
            u_id: uid,
            date: date
          }
        });
        setDataselect(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fectch();
  }, [date])


  return (
    <>
      <Header
        containerStyle={{
          backgroundColor: '#003357',
          borderBottomColor: '#003357',
          height: 110
        }}
        centerComponent={
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>ประวัติการดื่มน้ำ</Text>
        }

      />


      <View style={styles.container}>
        <ScrollView>
          <View style={{ width: 410, height: 400 }}>
            <Calendar
              theme={
                {
                  // calendarBackground: "#000",
                  // dayTextColor: "#fff",
                  // arrowColor: "#fff",
                  // selectedDayBackgroundColor: "#fff",
                  // selectedDayTextColor: "#000"
                }
              }
              // monthFormat={"dd"}
              // dayComponent={(e) => {
              //   console.log('e', e)
              //   return (
              //     <View style={{ width: 40, height: 40, backgroundColor: "red" }}>
              //       <Text>{e.date.day}</Text>
              //     </View>
              //   )
              // }}
              //disableArrowLeft
              //disableArrowRight
              //hideArrows
              //hideDayNames
              //hideExtraDays
              //minDate={"2021-02-05"}
              //maxDate={"2021-05-23"}
              //current={"2021-03-10"}
              //showWeekNumbers
              // markingType="simple"
              // markedDates={{
              //   '2021-05-16': { marked: true, selectedColor: 'blue' },
              //   '2021-05-17': { marked: true },
              //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8 },
              // }}
              // markingType="multi-dot"
              // markedDates={{
              //   '2021-05-16': { marked: true, selected: true, dots: [{ key: "abc", color: "yellow", selectedDotColor: "yellow" }, { color: "red", selectedDotColor: "red" }] },
              //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8, dots: [{ color: "green", selectedDotColor: "yellow" }] },
              // }}
              // markingType={'period'}
              // markedDates={{
              //   '2021-05-20': { textColor: 'purple', startingDay: true, endingDay: true, color: "green" },
              //   '2021-05-22': { startingDay: true, color: 'green' },
              //   '2021-05-23': { selected: true, endingDay: true, color: 'green', textColor: '#fff' },
              //   '2021-05-04': { startingDay: true, color: 'green', },
              //   '2021-05-05': { color: 'green' },
              //   '2021-05-06': { color: 'green', endingDay: true }
              // }}
              markedDates={calendar}
              // markedDates={{
              //   '2021-11-14': { "selected": true },
              //   '2021-11-15': { startingDay: true, color: 'green' },
              //   '2021-05-23': { selected: true, endingDay: true, color: 'green', textColor: '#fff' },
              //   '2021-05-04': { startingDay: true, color: 'green', },
              //   '2021-05-05': { color: 'green' },
              //   '2021-05-06': { color: 'green', endingDay: true }
              // }}

              onDayLongPress={(e) => {
                console.log(`e`, e)
              }}
              onMonthChange={(e) => {
                console.log(`e`, e)
              }}
              onPressArrowLeft={(goBack) => {

                console.log("aaaa")
                goBack()
              }}
              enableSwipeMonths
              onPressArrowRight={(goFuture) => {
                console.log("bbb")
                goFuture()
              }}
              onDayPress={(day) => { setDate(day.dateString) }}
              style={{
                height: 340,
                width: "90%",
                marginTop: 30,
                marginHorizontal: 20,
                borderRadius: 40,
              }
              }
            />
          </View>
          {date == null ? (
            <>
              <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>กรุณาเลือกวันที่</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <FlatList
                data={dataselect}
                renderItem={({ item }) => (

                  <>
                    {item.isprogress == null ? (
                      <>
                        <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                          <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ไม่มีข้อมูลการดื่มน้ำ</Text>
                          </View>
                        </View>
                      </>
                    ) : (
                      <>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                          <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                              เป้าหมาย
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10, color: 'red' }}>
                                {item.isprogress}
                              </Text>
                              <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10 }}>
                                /{item.target} มล.
                              </Text>
                            </View>
                          </View>
                          <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                              การออกกำลังกาย
                            </Text>
                            <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10 }}>
                              <FlatList
                                data={item.isexcer}
                                renderItem={({ item }) => (
                                  <>
                                    {item.isexcer == true ? (
                                      <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 55,marginTop: -10,}}>
                                          <MaterialCommunityIcons
                                            name={'run'}
                                            size={20}
                                            color={'tomato'}
                                            
                                          />
                                          <Text style={{ color: 'tomato' }}> / {item.count} ครั้ง</Text>
                                        </View>
                                      </>
                                    ) : (
                                      <Text></Text>
                                    )}
                                  </>
                                )}
                              />
                            </Text>
                          </View>
                          <View style={{ width: '100%',alignItems:'center' }}>
                            <View style={{ width: '80%', height: 50,justifyContent:'center' }}>
                              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>น้ำที่ดื่มในวันที่ {date}</Text>
                            </View>
                          </View>
                          <FlatList
                            data={item.datalog}
                            renderItem={({ item }) => (
                              <>
                                <View style={{ flexDirection: 'row', alignContent: 'center', width: '100%',justifyContent:'center' }}>
                                  <View style={{ width: '90%', height: 40, borderRadius: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ width: '100%', height: 40, backgroundColor: '#10486E', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                      <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                      <Text style={{ fontSize: 18, color:'#fff' }}>
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
                                        <Text style={{ fontSize: 18, color:'#fff',marginLeft: 15 }}>
                                          {item.b_name}
                                        </Text>
                                      </View>
                                      <View style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 18, color:'#fff',marginLeft: 10 }}>
                                          {item.d_l_volume} มล.
                                        </Text>

                                      </View>
                                    </View>

                                  </View>
                                </View>
                              </>
                            )}
                          />

                        </View>
                      </>
                    )}

                  </>
                )}
              />
            </>
          )}




        </ScrollView>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114165',
    width: '100%',
    flex: 1,


  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default History;
