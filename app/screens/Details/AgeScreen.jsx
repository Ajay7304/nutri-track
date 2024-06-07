import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Colors from '../../Utils/Colors';

const AgeScreen = ({ navigation, route }) => {
  const [age, setAge] = useState('');
  const { gender } = route.params || {};

  const handleContinue = () => {
    if (age) {
      navigation.navigate('HeightWeight', { gender, age });
    } else {
      Alert.alert("Error","Please enter your Age",)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Enter your age</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card:{
    width:"90%",
    height:250,
    backgroundColor:Colors.White,
    borderColor:Colors.Black,
    alignItems:"center",
    justifyContent:"center",
    elevation:5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '40%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:"center"
  },
});

export default AgeScreen;