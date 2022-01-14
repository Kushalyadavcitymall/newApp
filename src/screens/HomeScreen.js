import React from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title='Go to images'
      onPress={()=>props.navigation.navigate('Images')}
    />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;