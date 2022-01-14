import React from 'react';
import {Text,view,StyleSheet,View} from 'react-native';

const Componentscreen=()=><View>
            <Text style={styles.textstyle}> Getting Started with React Native </Text>
            <Text style={styles.newstyle}>My Name is Kushal Prakash Yadav</Text>
    </View>


const styles= StyleSheet.create({
    textstyle :{
        fontSize: 45
    },
    newstyle: {
        fontSize:20
    }
})
export default Componentscreen;