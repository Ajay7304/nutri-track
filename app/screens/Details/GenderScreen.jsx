
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';


const GenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState('');

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleContinue = () => {
    if (gender) {
      navigation.navigate('Age', { gender });
    } else {
      // Show an error message or handle the case when gender is not selected
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Select your gender</Text>
        <View style={styles.genderButtons}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'male' && styles.genderButtonSelected,
            ]}
            onPress={() => handleGenderSelect('male')}
          >
            <Text
              style={[
                styles.genderButtonText,
                gender === 'male' && styles.genderButtonTextSelected,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'female' && styles.genderButtonSelected,
            ]}
            onPress={() => handleGenderSelect('female')}
          >
            <Text
              style={[
                styles.genderButtonText,
                gender === 'female' && styles.genderButtonTextSelected,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
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
    // padding: 16,
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:"center",
    fontFamily:"Abel",

  },
  genderButtons: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  genderButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  genderButtonSelected: {
    backgroundColor: Colors.Black,
  },
  genderButtonText: {
    fontSize: 16,
    textAlign:"center",
    color: '#333',
    fontFamily:"Abel",

  },
  genderButtonTextSelected: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 65,
    borderRadius: 4,
  },
  continueButtonText: {
    color: Colors.White,
    fontSize: 16,
    textAlign: 'center',
    fontFamily:"Abel",

  },
});

export default GenderScreen;