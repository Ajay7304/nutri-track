import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import DailyIntake from '../../components/DailyIntake';
import DatePicker from '../../components/DatePicker';
import MealSection from '../../components/MealSection';
import Colors from "../../Utils/Colors";

// Import image sources
import almonds from "../../../assets/DryFruits.jpg";

const HomeScreen = () => {
  const [currentCalories, setCurrentCalories] = useState(0);

  const updateCalories = useCallback((calories) => {
    setCurrentCalories((prevCalories) => prevCalories + calories);
  }, []);

  const mealData = {
    whenYouWakeUp: [
      { name: 'Warm Water', quantity: '1 Glass - 300ml', calories: 0, imageSource: almonds },
    ],
    beforeBreakfast: [
      { name: 'Lemon Balm Tea', quantity: '1 cup - 150 ml', calories: 0, imageSource: almonds },
      { name: 'Overnight soaked 6 almonds & 2 Walnuts', quantity: '1 portion', calories: 73, imageSource: almonds },
    ],
    breakfast: [
      { name: 'Moong Dal Vegetable Khichdi', quantity: '1.5 Bowl - 150ml', calories: 150, imageSource: almonds },
      { name: 'Kiwi', quantity: '1 pc', calories: 42, imageSource: almonds },
      { name: 'Coffee With Skimmed Milk Without Sugar', quantity: '1 Cup - 200 ml', calories: 51, imageSource: almonds },
    ],
    midDayMeal: [
      { name: 'Red Apple', quantity: '1 pc', calories: 100, imageSource: almonds },
      { name: 'Chia Seeds (soaked)', quantity: '1 tbsp - 15ml', calories: 61, imageSource: almonds },
    ],
    lunch: [
      { name: 'Cucumber Salad', quantity: '1 portion', calories: 15, imageSource: almonds },
      { name: 'Rajma Curry / Kidney Beans Curry', quantity: '2 Bowls - 100ml', calories: 216, imageSource: almonds },
      { name: 'Brown Rice', quantity: '2 Bowls - 150 ml', calories: 270, imageSource: almonds },
      { name: 'Buttermilk', quantity: '1 Bowl - 150ml', calories: 61, imageSource: almonds },
    ],
    eveningSnack: [
      { name: 'Roasted Makhana', quantity: '1 Bowl - 150ml', calories: 106, imageSource: almonds },
      { name: 'BLFAD - Elderberry', quantity: '1 serving - 20g', calories: 83, imageSource: almonds },
    ],
    dinner: [
      { name: 'Grilled Chicken with Stir Fry Veggies', quantity: '1.5 Bowl - 200 ml', calories: 253, imageSource: almonds },
      { name: 'Tomato Salad', quantity: '1 portion', calories: 17, imageSource: almonds },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Header name="Ajay Yadav" purpose="Welcome to your daily diet plan for improved and healthy hair!" />
      <DailyIntake calories={{ current: currentCalories, target: 2045 }} carbs={47} protein={11} fat={11} />
      <DatePicker />
      {Object.entries(mealData).map(([title, items], index) => (
        <MealSection key={index} title={title} time="06:00 am" items={items} updateCalories={updateCalories} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    marginTop: 30,
  },
});

export default HomeScreen;