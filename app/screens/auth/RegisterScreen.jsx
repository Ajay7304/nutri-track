import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors';


import * as authService from "../../services/authService"
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return
    }

    try {
      const user = await authService.register(name, email, password);
      navigation.navigate('DetailsNav', { user });
    } catch (error) {
      Alert.alert('Error', error.message);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.center}>
        <Text style={styles.inputName}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister} >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.White

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
    backgroundColor: Colors.LightGray

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
  }
})
