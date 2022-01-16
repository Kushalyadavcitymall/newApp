import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import Imagecomponent from "../components/Imagedetails"

const Imageshow=()=>{

    return ( <View>
    <Imagecomponent title="forest" imageSource={require('../../assets/forest.jpg')} imagescore="9"/>
    <Imagecomponent title="Beach"  imageSource={require('../../assets/beach.jpg')} imagescore="7"/>
    <Imagecomponent title="Mountains" imageSource={require('../../assets/mountain.jpg')} imagescore="8"/>
    </View>);

}
const Style=StyleSheet.create({
    textStyle:{
        fontSize:45
    }
})
export default Imageshow;