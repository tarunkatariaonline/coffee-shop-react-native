import { StyleSheet, Text, View,StatusBar, ScrollView } from 'react-native'
import React from 'react'
import BottomBar from '../Components/BottomBar'
import OrderCard from '../Components/OrderCard'
import Header from '../Components/Header'

const Order = ({navigation}) => {
  return (
    
    <View style={{backgroundColor:"#0c0f14",flex:1}}>
      
      <ScrollView style={{paddingLeft:20,paddingRight:20,marginBottom:60}}>
      <StatusBar style="auto"  backgroundColor='#0c0f14'  />
      
      <Header heading={"Order History"}/>
     <OrderCard/>
     <OrderCard/>
     <OrderCard/>
     <OrderCard/>
     </ScrollView>
     <BottomBar nav={"order"} navigation={navigation}/>
       
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})