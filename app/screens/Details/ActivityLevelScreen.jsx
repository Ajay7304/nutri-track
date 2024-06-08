import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Colors from '../../Utils/Colors';

const ActivityLevelScreen = ({ navigation }) => {
  const [activityLevel, setActivityLevel] = useState(null);

  const handleActivityLevelSelection = (level) => {
    setActivityLevel(level);
  };

  const handleContinue = () => {
    if (activityLevel) {
      // Pass the selected activity level to the next screen or perform any other necessary actions
      navigation.navigate('App', { activityLevel });
    } else {
      // Display an alert or handle the case when no activity level is selected
      Alert.alert('Please select your activity level');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Select Your Activity Level</Text>
        <View style={styles.buttonContainer}>
          {['sedentary', 'light', 'moderate', 'active'].map(level => (
            <TouchableOpacity
              key={level}
              style={[
                styles.button,
                activityLevel === level && styles.buttonSelected,
              ]}
              onPress={() => handleActivityLevelSelection(level)}
            >
              <Text style={[
                styles.buttonText,
                activityLevel === level && styles.buttonTextSelected
              ]}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
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
    backgroundColor: Colors.background,
  },
  card: {
    width: "90%",
    height: 250,
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text,
    fontFamily:"Abel",

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 2,
    marginBottom:20
  },
  buttonSelected: {
    backgroundColor: Colors.Black,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily:"Abel",

  },
  buttonTextSelected: {
    color: Colors.White,
  },
  continueButton: {
    backgroundColor:Colors.Primary,
    paddingVertical:10,
    paddingHorizontal:100,
    borderRadius:10,
    marginBottom:20
  },
  continueButtonText: {
    fontSize: 16,
    color: Colors.White,
    fontFamily:"Abel",

  },
});

export default ActivityLevelScreen;
