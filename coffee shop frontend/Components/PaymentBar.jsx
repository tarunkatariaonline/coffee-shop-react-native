import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PaymentBar = () => {
  return (
    <View style={{height:70,position:"absolute",bottom:50,width:"100%",backgroundColor:"#0c0f14",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:20}}>
      <View style={{height:70,justifyContent:"center"}}>
        <Text style={{color:"gray",fontSize:16}}>Total Price</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{color:"#d17842",fontSize:23}}>$</Text>
        <Text style={{color:"white",fontSize:23,fontWeight:"700"}}> 4.23</Text>
        </View>

      </View>
      <TouchableOpacity style={{height:55,width:200,backgroundColor:"#d17842",justifyContent:"center",alignItems:"center",borderRadius:15}}> 
        <Text style={{fontSize:20,color:"white"}}>Pay</Text>
      </TouchableOpacity>
    </View>

    
  )
}

export default PaymentBar

const styles = StyleSheet.create({})