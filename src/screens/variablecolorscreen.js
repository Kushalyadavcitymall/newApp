import { setStatusBarBackgroundColor } from "expo-status-bar";
import React  ,{useState}from "react";
import {View,Button,Text,StyleSheet,FlatList} from 'react-native';

const variablecolor=()=>{ 
    const [red,setred]=useState(0);
    const [green,setgreen]=useState(0);
    const [blue,setblue]=useState(0);
    return <View>
        <Text>Red</Text>
        <Button
        title="Increase" onPress={()=>{
            setred(red+1)
        }}/>
        <Button
        title="Decrease" onPress={()=>{
            setred(red-1)
        }}/>
        <Text>Green</Text>
        <Button
        title="Increase" onPress={()=>{
            setgreen(green+1)
        }}/>
        <Button
        title="Decrease" onPress={()=>{
            setcolor(color[0]-1)
        }}/>
        <Text>Blue</Text>
        <Button
        title="Increase" onPress={()=>{
            setblue(blue+1)
        }}/>
        <Button
        title="Decrease" onPress={()=>{
            setblue(blue-1)
        }}/>
        <View 
            style={{height:100 ,width:100 ,backgroundColor: `rgb(${red},${green},${blue})`}}/>
        <Text> {red},{green},{blue}</Text>
    </View>

}

const styles=StyleSheet.create({});
export default variablecolor;