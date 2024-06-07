import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor:Colors.White
  },
  title: {
    width: "100%",
    textAlign: 'center',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    backgroundColor: Colors.Primary,
    color: Colors.White
  },
  center: {
    padding: 30,
  },
  inputName: {
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderColor: Colors.Black,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor:Colors.LightGray
  },
  button: {
    borderWidth: 1,
    borderRadius: 99,
    borderColor: Colors.Black,
    padding: 15,
    backgroundColor: Colors.Primary,
    marginTop: 50
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  registerText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;