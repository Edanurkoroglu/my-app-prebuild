import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');

      }
    })
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Kullanıcı ', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Kullanıcı giriş yaptı', user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image source={require('C:\Users\edanu\OneDrive\Belgeler\GitHub\PhoneTurkProject\FrontEndApp\my-app-prebuild\screens\logo-phoneturk.jpg')} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.outlineButton]}
        >
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
  },
  inputContainer: {
     width: '80%',
     backgroundColor: 'white',
     borderRadius: 10,
     paddingHorizontal: 15,
     paddingVertical: 10,
  },
  input: {
     marginTop: 5,
  },
  buttonContainer: {
     width: '60%',
     marginTop: 80,
  },
  button: {
     backgroundColor: '#0782F9',
     padding: 15,
     alignItems: 'center',
     borderRadius: 10,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 1,
     shadowRadius: 3.84,
     elevation: 50,
  },
  buttonText: {
     color: 'black',
     fontWeight: 'bold',
  },
  outlinebutton: {
     backgroundColor: 'white',
     marginTop: 30,
     borderWidth: 1,
     borderColor: '#0782F9',
     borderRadius: 10,
  },
  outlineButtonText: {
     color: 'black',
     fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
 },
 })