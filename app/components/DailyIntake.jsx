import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const DailyIntake = ({ calories, carbs, protein, fat }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Daily Intake</Text>
    <View style={styles.caloriesContainer}>
      <Text style={styles.calories}>{calories.current}</Text>
      <Text style={styles.caloriesUnit}>/ {calories.target} Kcal</Text>
    </View>
    <View style={styles.macros}>
      <MacroItem label="Carbs" value={carbs} unit="g" color="#4CAF50" />
      <MacroItem label="Protein" value={protein} unit="g" color="#9C27B0" />
      <MacroItem label="Fat" value={fat} unit="g" color="#FFFF00" />
    </View>
  </View>
);

const MacroItem = ({ label, value, unit, color }) => (
  <View style={styles.macroItem}>
    <View style={[styles.macroIcon, { backgroundColor: color }]} />
    <Text style={styles.macroLabel}>{label}</Text>
    <Text style={styles.macroValue}>{value}{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    padding: 15,
    borderRadius: 10,
    marginTop: -50,
    marginHorizontal: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Gray,
    fontFamily:"Abel",

  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 10,
  },
  calories: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.Primary,
    fontFamily:"Abel",

  },
  caloriesUnit: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
    fontFamily:"Abel",

  },
  macros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  macroItem: {
    alignItems: 'center',
  },
  macroIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  macroLabel: {
    fontSize: 17,
    color: '#666',
    marginTop: 5,
    fontFamily:"Abel",

  },
  macroValue: {
    fontSize: 15,
    color: Colors.Black,
    fontFamily:"Abel",

  },
});

export default DailyIntake;
 