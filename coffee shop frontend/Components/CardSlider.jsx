import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Card from './Card'
const cardData = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    }
]
const CardSlider = () => {
  return (
    <View>
     
      <FlatList
        data={cardData}
        horizontal={true}
        
        renderItem={({item}) =>  <Card/>}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default CardSlider

const styles = StyleSheet.create({})