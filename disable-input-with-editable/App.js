import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';



const HandleInputExample = () => {

  return (
    <View style ={styles.container}>
      <TextInput 
      style = {styles.input}
      value = "This is read-only"
      editable={false}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
input: {
  height: 40,
  width: '80%',
  borderColor: 'gray',
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius: 5,
},
displayText: {
  marginTop: 10,
  fontSize: 18,
},

});

export default HandleInputExample;