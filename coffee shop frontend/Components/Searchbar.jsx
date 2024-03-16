import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

const Searchbar = () => {
  return (
    <View>
     <TouchableOpacity style={styles.searchbar}>
     <Icon name="search1" size={26} color="white"  />
     <TextInput style={styles.textinput} placeholder="Find your coffee" placeholderTextColor={"gray"} />
     </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    searchbar:{
        width:"100%",
        height:50,
        backgroundColor:"#252a32",
        borderRadius:15,
        marginTop:25,
        marginBottom:25,
       flexDirection:"row",
       alignItems:"center",
       paddingLeft:10,
       paddingRight:10
    },
    textinput:{
        height:50,
        width:"100%",
        paddingLeft:10,
        paddingRight:10,
        color:"white",
        fontSize:15
    }
})