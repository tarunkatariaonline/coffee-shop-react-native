import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native'
import React from 'react'
import BottomBar from '../Components/BottomBar'
import Header from '../Components/Header'
import FavoriteCard from '../Components/FavoriteCard'

const Favorite = ({ navigation }) => {
  return (

    <View style={{backgroundColor:"#0c0f14",flex:1}}>

    <ScrollView style={{paddingLeft:20,paddingRight:20,marginBottom:50}}>
      
      <StatusBar style="auto"  backgroundColor='#0c0f14'  />
     
     <Header heading={"Favorites"}/>
     <FavoriteCard/>
     <FavoriteCard/>
     <FavoriteCard/>
     <FavoriteCard/>
     <FavoriteCard/>
     <FavoriteCard/>
   
       
    </ScrollView>
    <BottomBar nav={"favorite"} navigation={navigation}/>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({})