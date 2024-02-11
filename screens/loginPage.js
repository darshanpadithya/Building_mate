import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    navigation.navigate('loginSignUp');
  };

  const signIn = async () => {
    try {
      const auth = FIREBASE_AUTH; 
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Successsss...');
      navigation.navigate('Home');
    } catch (error) {
      alert('SignIn failed ... email or password wrong');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: 'center', marginBottom: '20%', marginTop: '10%' }}>
          <Text style={styles.head}>Login</Text>
        </View>

        <View style={{ marginBottom: '10%' }}>
          <TextInput
            style={styles.cell}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.cell}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View>
          <TouchableOpacity onPress={signIn} style={styles.transparentButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signUp} style={styles.transparentButton}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE8C6',
    flex: 1,
  },
  head: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EB913F',
    marginBottom: '10%',
    marginTop: '10%',
  },
  cell: {
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: '4%',
    borderWidth: 3,
    paddingLeft: '5%',
    borderColor: 'black',
    marginHorizontal: '8%',
    marginVertical: '3%',
  },
  transparentButton: {
    alignItems:'center',
    backgroundColor: '#5271FF',
    paddingHorizontal: '10%',
    borderRadius: 50,
    marginHorizontal: '30%',
    marginVertical: '3%',
    paddingVertical: '5%'
    ,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
