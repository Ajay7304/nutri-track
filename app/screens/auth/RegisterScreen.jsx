import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors';
export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        // keyboardType="email-address"
        // autoCapitalize="none"
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 30,
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
  center:{
    padding:30,
  },
  inputName: {
    fontSize:20,
    marginBottom:10
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.LightGray,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    borderWidth:1,
    borderRadius:99,
    borderColor:Colors.Black,
    padding: 15,
    backgroundColor:Colors.Primary,
    marginTop:50
  },
  buttonText: {
    textAlign:"center",
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});