import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    
    useEffect(()=>{
    const timer = setTimeout(()=>{
       navigation.replace('Home');
    },3000)

    return () => clearTimeout(timer);
    },[])
  return (
    <View style={{backgroundColor:"#0c0f14",flex:1,paddingTop:50,paddingBottom:50,paddingLeft:20,paddingRight:20,justifyContent:"center",alignItems:"center"}}>
      
      <StatusBar style="auto"  backgroundColor='black'  />
     
      <Image
        style={{height:200,width:200}}
        source={require('../assets/logo.png')}
      />
       <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})