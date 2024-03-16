import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import React from 'react'

const Header = ({heading}) => {
  return (
    <View style={styles.headercontainer}>


<TouchableOpacity style={styles.button} >
      <Icon name="menu" size={28} color="white" style={styles.menuicon} />
      </TouchableOpacity>
      
   {(heading)&&<Text style={styles.heading}>{heading}</Text>}   
      <Image
        style={styles.avatar}
        source={require('../assets/avatar.png')}
      />
   
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headercontainer:{
        height:55,
     
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20
    },
    text:{
        color:"white"
    },
    heading:{
        color:"white",
        fontSize:20,
        fontWeight:"700",
        fontStyle:"normal"
    },
    avatar:{
        height:31,
        width:31,
        borderRadius:6
    },
    button: {
        borderRadius: 6, // assuming the icon is a circle, adjust as needed
        padding: 1,
        backgroundColor:"rgba(194, 196, 195,0.4)"
      },
})