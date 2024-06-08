import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';


export default function Header({ name, purpose }) {
    const navigation = useNavigation();
    const openProfile = () =>{
        navigation.navigate("Profile");
    }
  return (
    <View style={styles.header}>
    <View style={styles.upperPart}>
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity onPress={openProfile}>
    <FontAwesome5 name="user" size={24} color="white" />
    </TouchableOpacity>
    </View>
    <Text style={styles.purpose}>{purpose}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height:170,
        backgroundColor: Colors.Primary,
        padding: 20,
        flexDirection:"column",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
      upperPart: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.White,
    fontFamily:"Abel",

      },
      purpose: {
        fontSize: 17,
        color: Colors.White,
        marginTop: 5,
    fontFamily:"Abel",

      },
})

