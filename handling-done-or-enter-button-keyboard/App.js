import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';



const SubmitExample = () => {
  const [ text, setText ] = useState(' ');

const HandleSubmit = () => {
Alert.alert('Submitted Text: ', text)

};


return (
    <View style ={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder="Press enter after typing..."
      onChangeText={(value) => setText(value)}
      returnKeyType="Done"
      onSubmitEditing={HandleSubmit}
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

export default SubmitExample;