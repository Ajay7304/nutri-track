import { View,Image, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from "../../Utils/Colors"
import { useNavigation } from '@react-navigation/native'
export default function WelcomeScreen() {

  const navigation = useNavigation();

  const login = () =>{
    navigation.navigate("Login");
  }

  const register = () =>{
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to {"\n"}
        <Text style={{fontWeight:'bold',fontSize:40, color:Colors.White}}>NutriTrack</Text>
      </Text>
      <View style={styles.center}>
        <Text style={styles.centerText}>"Your Personalised guide to Smarter Eating" </Text>
        <Image style={styles.image} source={require("../../../assets/welcomeImg.png")} />
      </View>
      <View >
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={{fontSize:20,
    fontFamily:"Abel",
    color:Colors.White,textAlign:"center",
        }} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register} style={styles.button}>
        <Text style={{fontSize:20,
    fontFamily:"Abel",
    color:Colors.White,textAlign:"center",
        }} >Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading:{
    textAlign: 'center',
    width:"100%",
    height:100,
    fontSize: 20,
    padding:20,
    backgroundColor:Colors.Primary,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    color:Colors.White,
    marginTop:30,
    fontFamily:"Abel",
  },
  center:{
    // height:500,
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
    // backgroundColor:Colors.Secondary,

  },
  image:{
    width:370,
    height:450,
    objectFit:"fill",
   marginBottom:20
  },
  centerText:{
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 20,
    color:Colors.Black,
    fontWeight:'bold',
    // fontStyle:'italic',
    fontFamily:"Abel",

  },
  buttonContainer:{
    flexDirection:"row",
    gap:10
  },
  button:{
    // borderWidth:1,
    backgroundColor:Colors.Primary,
    paddingVertical:10,
    paddingHorizontal:90,
    borderRadius:10,
    marginBottom:20
  },
})