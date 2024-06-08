import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const FoodItem = ({ name, quantity, calories, updateCalories, imageSource }) => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLog = () => {
    if (isLogged) {
      updateCalories(-calories); // Decrease calories if already logged
    } else {
      updateCalories(calories); // Increase calories if not logged
    }
    setIsLogged(!isLogged);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} style={styles.image} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>{quantity} ● {calories} Kcal</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={toggleLog} style={styles.logButton}>
            <Text style={styles.logButtonText}>{isLogged ? 'Logged ✓' : 'Log +'}</Text>
          </TouchableOpacity>
          {!isLogged && (
            <TouchableOpacity style={styles.alternativesButton}>
              <Text style={styles.alternativesButtonText}>Alternatives &gt;</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  details: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily:"Abel",

  },
  quantity: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    fontFamily:"Abel",

  },
  actions: {
    flexDirection: 'row',
    marginTop:15
  },
  logButton: {
    width:"45%",
    backgroundColor: '#00BCD4',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems:"center",
    
  },
  logButtonText: {
    fontSize:16,
    color: '#FFFFFF',
    fontFamily:"Abel",

  },
  alternativesButton: {
    borderWidth:1,
    borderRadius:5,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  alternativesButtonText: {
    color: Colors.Black,
    fontSize:16,
    fontFamily:"Abel",

  },
});

export default FoodItem;