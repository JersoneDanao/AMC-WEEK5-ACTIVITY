import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const HandleInputExample = () => {
  const [ text, setText ] = useState(' ');
  

  return (
    <View style ={styles.container}>
    <View style ={styles.inputContainer}>
    <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput 
      style = {styles.input}
      placeholder="Search"
      onChangeText={(value) => setText(value)}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

icon: {
  marginRight: 10,
},

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  
},
inputContainer: {
  flexDirection: 'row',
  width: '80%',
  borderColor: 'gray',
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',

},
input: {
  height: 40,
  flex: 1,
  fontSize: 16,
},

});

export default HandleInputExample;