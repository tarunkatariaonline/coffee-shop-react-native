import { StyleSheet, Text, View,StatusBar, ScrollView } from 'react-native'
import React from 'react'
import BottomBar from '../Components/BottomBar'
import Header from '../Components/Header'
import CartCard from '../Components/CartCard'
import PaymentBar from '../Components/PaymentBar'

const Cart = ({navigation}) => {
  return (

    <View style={{backgroundColor:"#0c0f14",flex:1,paddingLeft:20,paddingRight:20,alignItems:"center"}}>
    <ScrollView style={{marginBottom:120}} >
      
    <StatusBar style="auto"  backgroundColor='#0c0f14'  />
   
 
    <Header heading={"Cart"}/>

    <CartCard/>
    <CartCard/>
    <CartCard/>

   
  </ScrollView>
  <PaymentBar/>
  <BottomBar nav={"cart"} navigation={navigation} />
  </View>
  )
}

export default Cart

const styles = StyleSheet.create({})