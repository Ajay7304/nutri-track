import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground } from 'react-native';
import * as authService from '../../services/authService';
import Colors from '../../Utils/Colors';



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform client-side validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in email and password');
      return;
    }

    try {
      // Call the login service
      const user = await authService.login(email, password);

      // Login successful, navigate to the next screen
      navigation.navigate('App', { user });
    } catch (error) {
      // Handle login error
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ImageBackground style={styles.imageBg} source={require("../../../assets/welcomeImg.jpg")} >
      <View style={styles.container}>
        {/* <Text style={styles.title}>Login</Text> */}
        <View style={styles.center}>
          <Text style={styles.inputName}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.inputName}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  imageBg:{
    flex:1,
    marginTop: 30,
    height:"100%",
    width:"100%",
    // opacity:0.5
  },
  container: {
    flex: 1,
    // marginTop: 30,
    backgroundColor:"rgba(0,0,0,0.1)",
    justifyContent:"center"
  },
  // title: {
  //   textAlign: 'center',
  //   padding: 30,
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginBottom: 160,
  //   backgroundColor: Colors.Primary,
  //   color: Colors.White
  // },
  center: {
    padding: 30,
    justifyContent: 'center',
  },
  inputName: {
    fontSize: 20,
    marginBottom: 10,
    color:Colors.White
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 0.5,
    borderColor: Colors.Black,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor:Colors.LightGray
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.Primary,
    marginTop: 30
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontSize: 22,
  },
  registerText: {
    color: Colors.White,
    fontSize: 16,
  },
});

export default LoginScreen;