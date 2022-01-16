import React ,{useState} from "react";
import {View,Text,StyleSheet,Button} from 'react-native';

const counterscreen=()=>{
    const [counter,setcounter]=useState(2);
    return <View>
        <Button
        title="Increase" onPress={()=>{
            setcounter(2*counter);
        }}/>
        <Button 
        title="Decrease" onPress={()=>{
            setcounter(counter/2);
        }}/>
       
    <Text>This is counter:{counter}</Text>
    </View>

}
const styles=StyleSheet.create({});

export default counterscreen;