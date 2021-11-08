import React, { Component } from "react";
import { View, Text,StyleSheet,ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import {ScrollableTabView, ScrollableTabBar} from '@valdio/react-native-scrollable-tabview';


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


class ButtomSheet2 extends Component {
  render() {
    return (
      <View style={{ marginTop: 10, alignItems: "center" }}>
         
        <Button buttonStyle={{ 
          backgroundColor: '#FF6347',
          borderRadius: 40,
          borderWidth: 0,}}
         icon={
          <MaterialCommunityIcons name="beer" size={60} color="#fff" />}
          onPress={() => {
            this.RBSheet.open();
          }}
        />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
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
            
   <View style={styles.container}>
   <ScrollableTabView instructions
      style={{marginTop: 10}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar/>}>
        
      <Text style={styles.textStyle} tabLabel='ล่าสุด'>ล่าสุด</Text>
      <Text tabLabel='น้ำ'>น้ำ</Text>
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
}







export default ButtomSheet2;

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