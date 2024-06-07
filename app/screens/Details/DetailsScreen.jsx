import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import React from 'react'
import Colors from '../../Utils/Colors';

export default function DetailsScreen({navigation}) {

  const handleContinue = () => {
    navigation.navigate("Gender");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to <Text style={{fontWeight:"bold",fontSize:30}}>NutriTrack</Text> </Text>
      <View style={styles.center}>

      <Text style={styles.description}>
        Let's get started with your personalized diet plan.
      </Text>
      <Image style={styles.image} source={{uri: "https://static.vecteezy.com/system/resources/previews/022/348/630/original/3d-illustration-of-diet-plan-meal-planning-healthy-food-and-nutrition-diet-clipboard-with-a-diet-plan-3d-illustration-png.png"}} />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:30
  },
  title: {
    width: "100%",
    textAlign: 'center',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 20,
    // marginBottom: 40,
    backgroundColor: Colors.Primary,
    color: Colors.White
  },
  center:{
    padding:30
  },
  image:{
    height:400,
    width:330,
    resizeMode:"cover"
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    // marginBottom: 24,
  },
  continueButton: {
    backgroundColor:Colors.Primary,
    paddingVertical:10,
    paddingHorizontal:90,
    borderRadius:10,
    marginBottom:20
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign:"center"
  },
});
