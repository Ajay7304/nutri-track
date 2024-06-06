import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

// Import your image asset
const backgroundImage = require('../../assets/loginImg.png');
export default function BackgroungImageWithText() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>"Your Personalised guide to Smarter Eating" </Text>
    </View>
  </ImageBackground>
  )
}
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode:"cover", // Adjust the resizeMode as needed
      justifyContent: 'center', // Center the text vertically
      opacity:0.5,
    },
    textContainer: {
    //   backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background for better visibility
      padding: 20,
      alignItems: 'center', // Center the text horizontally
    },
    text: {
      width: '55%',
      color: 'black', // Adjust the text color as needed
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle:"italic",
    },
  });