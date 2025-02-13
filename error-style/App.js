import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';



const ErrorStyleInput = () => {
  const [ email, setEmail ] = useState(' ');
  const [ error, setError ] = useState(' ');

const validateEmail = (text) => {
  setEmail(text)
  if(!text.includes('@')) {
    setError('Invalid Email Address');
  }
  else {
    setError('');
  }
};




  return (
    <View style ={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder="Enter Email"
      keyboardType='email-address'
      onChangeText={validateEmail}
      />
      {error ? <Text> {error}</Text> : null}
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

export default ErrorStyleInput;