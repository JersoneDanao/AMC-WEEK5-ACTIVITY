import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';



const KeyboardType = () => {
  const [ email, setEmail ] = useState(' ');
  const [ phone, setPhone ] = useState(' ');

  return (
    <View style ={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder="Enter Email: "
      KeyboardType='email-address'
      onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
      style = {styles.input}
      placeholder="Enter Phone Number: "
      KeyboardType='phone-pad'
      onChangeText={(text) => setPhone(text)}
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
  marginVertical: 10,
  borderWidth: 1,
  borderRadius: 5,
},
displayText: {
  marginTop: 10,
  fontSize: 18,
},

});

export default KeyboardType;