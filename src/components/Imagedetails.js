import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const Imagecomponent=(props)=>{
    return <View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>{props.imagescore}</Text>
    </View>
}
const styles = StyleSheet.create({});
export default Imagecomponent;
