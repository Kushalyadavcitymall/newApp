import React from 'react';
import { FlatList,Text,View,StyleSheet } from 'react-native';

const Listi=()=>{
    const Friends=[{Name: "Kushal"},{Name:"Prakash"}];

    return (
        <FlatList 
            keyExtractor={(x)=>x.Name}
            data={Friends} 
            renderItem={({item})=><Text>{item.Name}</Text>}
        />
        );
    }

export  default Listi;


