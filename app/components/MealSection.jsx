import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FoodItem from './FoodItem';
import Colors from '../Utils/Colors';

const MealSection = ({ title, time, items, updateCalories }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <View>
      {items.map((item, index) => (
        <FoodItem key={index} {...item} updateCalories={updateCalories} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: Colors.White,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E4F3EC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default MealSection;
