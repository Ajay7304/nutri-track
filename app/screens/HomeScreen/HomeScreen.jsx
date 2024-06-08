import React, { useState, useEffect ,useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import DailyIntake from '../../components/DailyIntake';
import DatePicker from '../../components/DatePicker';
import MealSection from '../../components/MealSection';
import Colors from "../../Utils/Colors";

// Import image sources
import warmWater from "../../../assets/WarmWater.jpg"
import lemonBalmTea from "../../../assets/GingerLemonTea.jpg"
import almonds from "../../../assets/DryFruits.jpg";
import moongDalKhichdi from "../../../assets/moongDalKhichdi.jpeg";
import kiwi from "../../../assets/kiwi.jpg"
import coffee from "../../../assets/coffee.jpeg"
import apple from "../../../assets/apple.jpeg"
import chiaSeeds from "../../../assets/chiaSeeds.jpeg"
import Salad from "../../../assets/Salad.jpg" 
import rajmaCurry from "../../../assets/rajmaCurry.jpeg"
import brownRice from "../../../assets/brownRice.jpeg";
import buttermilk from "../../../assets/buttermilk.jpeg";
import makhana from "../../../assets/makhana.jpeg";
import elderBerry from "../../../assets/elderBerry.jpeg";
import chicken from "../../../assets/chicken.jpeg";
import tomatoSalad from "../../../assets/tomatoSalad.jpeg";





const HomeScreen = () => {
  const [currentCalories, setCurrentCalories] = useState(0);
  const [userName, setUserName] = useState('');

  const updateCalories = useCallback((calories) => {
    setCurrentCalories((prevCalories) => prevCalories + calories);
  }, []);

  const mealData = {
    WhenYouWakeUp: {
      time: "06:00 am",
      items: [
        { name: 'Warm Water', quantity: '1 Glass - 300ml', calories: 0, imageSource: warmWater },
      ]
    },
    BeforeBreakfast: {
      time: "07:30 am",
      items: [
        { name: 'Lemon Balm Tea', quantity: '1 cup - 150 ml', calories: 0, imageSource: lemonBalmTea },
        { name: 'Overnight soaked 6 almonds & 2 Walnuts', quantity: '1 portion', calories: 73, imageSource: almonds },
      ]
    },
    Breakfast: {
      time: "10:00 am",
      items: [
        { name: 'Moong Dal Vegetable Khichdi', quantity: '1.5 Bowl - 150ml', calories: 150, imageSource: moongDalKhichdi },
        { name: 'Kiwi', quantity: '1 pc', calories: 42, imageSource: kiwi },
        { name: 'Coffee With Skimmed Milk Without Sugar', quantity: '1 Cup - 200 ml', calories: 51, imageSource: coffee },
      ]
    },
    MidDayMeal: {
      time: "11:30 am",
      items: [
        { name: 'Red Apple', quantity: '1 pc', calories: 100, imageSource: apple },
        { name: 'Chia Seeds (soaked)', quantity: '1 tbsp - 15ml', calories: 61, imageSource: chiaSeeds },
      ]
    },
    Lunch: {
      time: "01:30 pm",
      items: [
        { name: 'Cucumber Salad', quantity: '1 portion', calories: 15, imageSource: Salad },
        { name: 'Rajma Curry / Kidney Beans Curry', quantity: '2 Bowls - 100ml', calories: 216, imageSource: rajmaCurry },
        { name: 'Brown Rice', quantity: '2 Bowls - 150 ml', calories: 270, imageSource: brownRice },
        { name: 'Buttermilk', quantity: '1 Bowl - 150ml', calories: 61, imageSource: buttermilk },
      ]
    },
    EveningSnack: {
      time: "06:00 pm",
      items: [
        { name: 'Roasted Makhana', quantity: '1 Bowl - 150ml', calories: 106, imageSource: makhana },
        { name: 'BLFAD - Elderberry', quantity: '1 serving - 20g', calories: 83, imageSource: elderBerry },
      ]
    },
    Dinner: {
      time: "07:30 pm",
      items: [
        { name: 'Grilled Chicken with Stir Fry Veggies', quantity: '1.5 Bowl - 200 ml', calories: 253, imageSource: chicken },
        { name: 'Tomato Salad', quantity: '1 portion', calories: 17, imageSource: tomatoSalad },
      ]
    },
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('currentUser');
      if (userData) {
        const { name } = JSON.parse(userData);
        setUserName(name);
      }
    };
    getUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header name={userName} purpose="Welcome to your daily diet plan for improved and healthy hair!" />
      <DailyIntake calories={{ current: currentCalories, target: 2045 }} carbs={47} protein={11} fat={11} />
      <DatePicker />
      {Object.entries(mealData).map(([title, data], index) => (
        <MealSection key={index} title={title} time={data.time} items={data.items} updateCalories={updateCalories} />
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
