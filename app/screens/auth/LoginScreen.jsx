import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from "../../Utils/Colors"
import BackgroundImageWithText from "../../components/BackgroundImageWithText"
import { useNavigation } from '@react-navigation/native'
export default function LoginScreen() {

  const navigation = useNavigation();

  const login = () =>{
    console.log("loggedin");
  }

  const register = () =>{
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to {"\n"}
        <Text style={{fontWeight:'bold',fontSize:40, color:Colors.White}}>Nutri Track</Text>
      </Text>
      <View style={styles.center}>
        <BackgroundImageWithText/>
      </View>
      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <Text style={{fontSize:25,
          fontWeight:"bold",color:Colors.White
        }} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register} style={styles.registerBtn}>
        <Text style={{fontSize:25,
          fontWeight:"bold",color:Colors.White
        }} >Register</Text>
      </TouchableOpacity>
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
    color:Colors.Black,
    marginTop:30
  },
  center:{
    height:500,
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
    // backgroundColor:Colors.Secondary,

  },
  centerText:{
    marginTop:50,
    textAlign: 'center',
    width:"60%",
    fontSize: 30,
    color:Colors.Black,
    fontWeight:'bold',
    fontStyle:'italic',
  },
  loginBtn:{
    borderWidth:1,
    borderRadius:99,
    borderColor:Colors.Black,
    padding: 15,
    paddingHorizontal:160,
    marginBottom:20,
    backgroundColor:Colors.Primary,
  },
  registerBtn:{
    borderWidth:1,
    borderRadius:99,
    borderColor:Colors.Black,
    padding: 15,
    paddingHorizontal:145,
    backgroundColor:Colors.Primary,
  }
})