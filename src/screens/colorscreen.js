import { setStatusBarBackgroundColor } from "expo-status-bar";
import React  ,{useState}from "react";
import {View,Button,Text,StyleSheet,FlatList} from 'react-native';

const randomrgb=()=>{
    const red=Math.random()*256;
    const green=Math.random()*256;
    const blue=Math.random()*256;
    return `rgb(${red},${green},${blue})`;
}
const colorscreencomponent=()=>{
    const [color,setcolor]=useState([]);
    return <View>
        <Button title="Add a color" onPress={()=>{
            setcolor([...color,randomrgb()])
        }
        }/>
        <FlatList
        horizontal
        keyExtractor={(item)=>item}
        data={color}
        renderItem={({item})=>{
            return <View 
            style={{height:100 ,width:100 ,backgroundColor: item}}/>
        }}/>
        </View>

}
const styles=StyleSheet.create({});

export default colorscreencomponent;