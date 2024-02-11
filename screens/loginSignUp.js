import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase/firebase'; 
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';


export default function LoginSignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      alert('Confirmation email sent to you');
      const user = response.user;

      await firebase.firestore().collection('users').doc(user.uid).set({
        email: email,
        name: name,
        age: age,
        password: password,

      });
      

  
    } catch (error) {
      alert('Error with the email, try again');
    }
  };



  

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={{alignItems: 'center',marginBottom:'5%',marginTop:'10%'}}>
          <Text style={styles.head}>Registration now</Text>
          </View>
        <View style={{ marginBottom: '10%' }}>
          <TextInput
            style={styles.cell}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.cell}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.cell}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.cell}
            placeholder="Age"
            onChangeText={(text) => setAge(text)}
            value={age}
          />
        </View>

        <View>
          <TouchableOpacity onPress={signUp} style={styles.transparentButton}>
            <Text style={styles.buttonText}>Create and Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE8C6',
    justifyContent:'center',
    alignContent:'center',

    flex: 1,
  },
  head: {
      fontSize: 40,
      fontWeight: 'bold',
      color:'#EB913F',
      marginBottom:'10%',
      marginTop:'10%',
    },
    cell: {
      fontSize:20,
      borderRadius:10,
      paddingVertical:'4%',
      borderWidth:3,
      paddingLeft:'5%',
      borderColor:'black',
      marginHorizontal:'8%',
      marginVertical:'3%',
    },
    transparentButton: {
      alignItems:'center',
      backgroundColor: '#5271FF',
      paddingHorizontal:'1%',
      borderRadius: 50,
      marginHorizontal:'20%',
 
      marginBottom:'50%',
      marginTop:'1%',
      paddingVertical:'5%',
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
    },

    
});