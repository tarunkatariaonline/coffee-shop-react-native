import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Entypo'
const BottomBar = ({nav,navigation}) => {
  return (
    <View style={{width:"100%",position:"absolute",bottom:0,height:50,backgroundColor:"#0c0f14",zIndex:10,flexDirection:"row",justifyContent:"space-around",padding:10}}>
    <TouchableOpacity>
  <Icon name="home" size={28}  onPress={()=>navigation.navigate('Home')} color={(nav==="home")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="shopping-cart" onPress={()=>navigation.navigate('Cart')} size={28} color={(nav==="cart")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="heart" onPress={()=>navigation.navigate('Favorite')} size={28} color={(nav==="favorite")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="bell" size={28} color={(nav==="order")?"#d17842":"gray"}  />
  </TouchableOpacity>
  </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({})