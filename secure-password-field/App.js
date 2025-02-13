import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';



const PasswordInputExample = () => {
  const [ password, setPassword ] = useState(' ');

  return (
    <View style ={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder="Enter Password"
      secureTextEntry={true}
      onChangeText={(value) => setPassword(value)}
      />
      <Text style={styles.displayText}>
        Password Length: {password.length}
      </Text>
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

export default PasswordInputExample;