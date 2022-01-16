import React from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title='Go to images'
      onPress={()=>props.navigation.navigate('Images')}
    />
    <Button
    title ="Go to Components"
    onPress={()=>props.navigation.navigate("compoScreen")}/>
     <Button
    title ="Go to List"
    onPress={()=>props.navigation.navigate("ListScreen")}/>
    <Button
    title="Go to Counter"
    onPress={()=>props.navigation.navigate("counter")}/>
    <Button
    title="Go to Color Screen"
    onPress={()=>props.navigation.navigate("colored")}/>
    <Button
    title="Varible color screen"
    onPress={()=>props.navigation.navigate("varcolor")}/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
