import React, { Component } from "react";
import { View, Text,StyleSheet} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements'
class ButtomSheet1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>

        <Button  buttonStyle={{ 
          backgroundColor: '#fff',
          borderRadius: 50,
          borderWidth: 0,  }}
         icon={
            <MaterialCommunityIcons name="weight-lifter" size={38} color="#FF6347"/>}
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
   
          <YourOwnComponent1 />
   
   
          <YourOwnComponent2 />
  
        </RBSheet>
      </View>
    );
  }
}



const YourOwnComponent1 = () => <Text style={styles.textStyle }>สถานที่ออกกำลังกาย</Text>;
const YourOwnComponent2 = () => <Text style={styles.textStyle }>ระดับการออกกำลังกาย</Text>;


export default ButtomSheet1;

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