import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';


const MainScreen = ({navigation}) => {
   

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#003357' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/Icon.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>


        
        <Animatable.View style={[styles.footer]}
            animation="fadeInUpBig"
        >
        <TouchableOpacity >

           
            <Button  mode="Outlined" style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style = {styles.text}>เข้าสู่ระบบ</Text>
            </Button>
        

       
        <Button  mode="contained" style={styles.button1} onPress={() => navigation.navigate('Signup')}>
             <Text style = {styles.text}>ลงทะเบียน</Text>
        </Button>
        

       </TouchableOpacity>
        </Animatable.View>
        
        </View>
     
      
    );
};

export default MainScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#003357',
    alignItems: 'center',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#003357',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingVertical: 0,
      paddingHorizontal: 60
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#003357',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      marginTop:5,
      fontSize: 20,
      
      
  },
  button: {
      width: 360,
      marginRight: 50,
      marginLeft: 50,
      marginTop: 10,
      paddingTop: 3,
      paddingBottom: 3,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#FE685E',
  },

  button1: {
    backgroundColor: '#FE685E',
    width: 360,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 40,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 10,
    borderWidth: 2,
},

  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  
});

