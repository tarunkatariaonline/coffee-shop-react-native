import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Header from '../Components/Header'
import Searchbar from '../Components/Searchbar'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
import CardSlider from '../Components/CardSlider'
import Icon from 'react-native-vector-icons/Entypo';
import BottomBar from '../Components/BottomBar'
import Gradiant from '../Components/Gradiant'


const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#0c0f14",flex:1,paddingTop:0,paddingBottom:0}}>
      
    <StatusBar style="auto"  backgroundColor='#0c0f14' />
    <ScrollView style={{paddingLeft:20,paddingRight:20,marginBottom:70}}>
  <Header  />
  <Text style={styles.textheading}>Find the best </Text>
  <Text style={styles.textheading}>coffee for you</Text>
  <Searchbar/>
  <Slider/>
  <CardSlider navigation={navigation}/>
  <Text  style={{color:"white",fontSize:24,marginTop:20,fontWeight:"700"}}>Coffee Beans</Text>
  <CardSlider navigation={navigation}/>

  </ScrollView>

  <BottomBar nav={"home"} navigation={navigation}/>

  </View>
  )
}

export default Home

const styles = StyleSheet.create({
    textheading:{
        color:"white",
        fontSize:30,
        fontWeight:"700"
    }
})