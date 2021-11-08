import React,{Component} from 'react';
import { View, ImageBackground, Image } from 'react-native';

var bg=require('../assets/logo.png');


export default class Splash extends Component {
    constructor(props) {
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("SplashScreen");
        },1500);
    }
    render() {
        return (
            <ImageBackground
            source={bg}
            style={{height:'100%' , width:'100%'}}>

            </ImageBackground>
        );
    }

}
