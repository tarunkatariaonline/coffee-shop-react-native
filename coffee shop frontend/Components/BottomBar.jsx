import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Entypo'
const BottomBar = ({nav}) => {
  return (
    <View style={{width:"100%",position:"absolute",bottom:0,height:50,backgroundColor:"#0c0f14",zIndex:10,flexDirection:"row",justifyContent:"space-around",padding:10,borderRadius:20}}>
    <TouchableOpacity>
  <Icon name="home" size={28} color={(nav==="home")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="shopping-cart" size={28} color={(nav==="cart")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="heart" size={28} color={(nav==="favorite")?"#d17842":"gray"}  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="bell" size={28} color={(nav==="order")?"#d17842":"gray"}  />
  </TouchableOpacity>
  </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({})