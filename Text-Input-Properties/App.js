import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';



const SubmitExample = () => {
  const [ email, setEmail ] = useState(' ');
  const [ error, setError ] = useState(' ');
  const [ phone, setPhone ] = useState(' ');
  const [ password, setPassword ] = useState(' ');
  const [ first, setFirst ] = useState(' ');
  const [ last, setLast ] = useState(' ');

const HandleSubmit = () => {
Alert.alert(`Name: ${first} ${last}\nPhone Number: ${phone}\nEmail Address: ${email}`);

};
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
      placeholder="FIRST NAME: "
      onChangeText={(text) => setFirst(text)}
      />
      <TextInput 
      style = {styles.input}
      placeholder="LAST NAME: "
      onChangeText={(text) => setLast(text)}
      />
      <View style ={styles.inputContainer}>
      <Ionicons name="call" size={20} color="black" style={styles.icon} />
      <TextInput 
      style = {styles.inputForm}
      placeholder="PHONE NUMBER: "
      KeyboardType='phone-pad'
      onChangeText={(phone) => setPhone(phone)}
      />
      </View>
      <View style ={styles.inputContainer}>
      <Ionicons name="mail" size={20} color="black" style={styles.icon} />
      <TextInput 
      style = {styles.inputForm}
      placeholder="EMAIL ADDRESS: "
      keyboardType='email-address'
      onChangeText={validateEmail}
      />
      {error ? <Text> {error}</Text> : null}
      </View>
      <View style ={styles.inputContainer}>
      <Ionicons name="eye" size={20} color="black" style={styles.icon} />
      <TextInput 
      style = {styles.inputForm}
      placeholder="PASSWORD: "
      secureTextEntry={true}
      returnKeyType="Done"
      onSubmitEditing={HandleSubmit}
      onChangeText={(value) => setPassword(value)}
      />
      </View>
      <Text style={styles.displayText}>
        Password Length: {password.length}
      </Text>
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
  height: 40,
  width: '80%',
  marginVertical: 10,
  paddingHorizontal: 10,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
},
input: {
  height: 40,
  width: '80%',
  borderColor: 'gray',
  marginVertical: 10,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius: 5,
},
inputForm: {
  flex: 1,
  fontSize: 16,
  height: 40,
},
displayText: {
  marginTop: 10,
  fontSize: 15,
},

});

export default SubmitExample;