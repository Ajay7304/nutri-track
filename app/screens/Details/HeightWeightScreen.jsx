import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity , Alert} from 'react-native';
import Colors from '../../Utils/Colors';


const HeightWeightScreen = ({ navigation, route }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const { gender, age } = route.params || {};

  const handleContinue = () => {
    if (height && weight) {
      navigation.navigate('Activity', { gender, age, height, weight });
    } else {
      // Show an error message or handle the case when height or weight is not entered
      Alert.alert('Error', 'Please enter your height and weight');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Enter your height and weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          value={weight}
          onChangeText={setWeight}
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
    width: '78%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor:Colors.Primary,
    paddingVertical:10,
    paddingHorizontal:100,
    borderRadius:10,
    marginBottom:20
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HeightWeightScreen;