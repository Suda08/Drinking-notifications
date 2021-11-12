
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Header } from 'react-native-elements';

import Date from '../components/Date'

const History = () => {


  return (
    <>
      <Header
        containerStyle={{
          backgroundColor: '#003357',
          borderBottomColor: '#003357',
          height: 110
        }}
        centerComponent={
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>ประวัติน้ำดื่ม</Text>
        }

      />


      <View style={styles.container}>
        <ScrollView>
          <View style={{ width: 410, height: 400 }}>
            <Date />
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                เป้าหมาย
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10, color: 'red' }}>
                  1200
                </Text>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10 }}>
                  /2000 มล.
                </Text>
              </View>
            </View>
            <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                การออกกำลังกาย
              </Text>
              <Text style={{ fontSize: 18, paddingTop: 12, paddingRight: 10 }}>
                0 ครั้ง
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <View style={{ width: '80%', height: 40, borderRadius: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10, color: 'white' }}>
                  9.00
                </Text>
                <View style={{ width: '60%', height: 40, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                    น้ำแร่
                  </Text>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 40 }}>
                    100 มล.
                  </Text>
                  <Image source={require('../assets/cancel.png')} style={{ height: 20, width: 20, margin: 15 }} />
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <View style={{ width: '80%', height: 40, borderRadius: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10, color: 'white' }}>
                  9.00
                </Text>
                <View style={{ width: '60%', height: 40, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                    น้ำแร่
                  </Text>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 40 }}>
                    100 มล.
                  </Text>
                  <Image source={require('../assets/cancel.png')} style={{ height: 20, width: 20, margin: 15 }} />
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <View style={{ width: '80%', height: 40, borderRadius: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10, color: 'white' }}>
                  9.00
                </Text>
                <View style={{ width: '60%', height: 40, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                    น้ำแร่
                  </Text>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 40 }}>
                    100 มล.
                  </Text>
                  <Image source={require('../assets/cancel.png')} style={{ height: 20, width: 20, margin: 15 }} />
                </View>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <View style={{ width: '80%', height: 40, borderRadius: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10, color: 'white' }}>
                  9.00
                </Text>
                <View style={{ width: '60%', height: 40, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 10 }}>
                    น้ำแร่
                  </Text>
                  <Text style={{ fontSize: 18, paddingTop: 12, paddingLeft: 40 }}>
                    100 มล.
                  </Text>
                  <Image source={require('../assets/cancel.png')} style={{ height: 20, width: 20, margin: 15 }} />
                </View>
              </View>
            </View>

          </View>
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
