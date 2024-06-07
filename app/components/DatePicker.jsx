import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Colors from '../Utils/Colors';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const newDates = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return date;
      });
      setDates(newDates);
    };

    generateDates();
  }, []);

  const renderDateItem = ({ item, index }) => {
    const isActive = item.toDateString() === selectedDate.toDateString();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <TouchableOpacity
        style={[styles.dateItem, isActive && styles.activeDateItem]}
        onPress={() => setSelectedDate(item)}
      >
        <Text style={styles.day}>
          {index === 0 ? 'Today' : dayNames[item.getDay()]}
        </Text>
        <Text style={[styles.date, isActive && styles.activeDate]}>
          {item.getDate().toString().padStart(2, '0')}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dates}
        renderItem={renderDateItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  dateList: {
    paddingHorizontal: 20,
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeDateItem: {
    backgroundColor: 'transparent',
  },
  day: {
    fontSize: 18,
    color: '#666',
    marginBottom:10
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor:Colors.LightGray,
    padding:5,
    paddingHorizontal:6,
    borderRadius:50
  },
  activeDate: {
    color: Colors.White,
    backgroundColor:Colors.Primary,
  },
});

export default DatePicker;