import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native'
import React, { useState } from 'react'

const Slider = () => {

    const siderData = [
        {
            id:1,
            name:"All"
        },
        {
            id:2,
            name:"Cappuccino"
        },
        {
            id:3,
            name:"Espresso"
        },{
            id:4,
            name:"Amano"
        },
        {
            id:5,
            name:"Amerf"
        },
        {
            id:6,
            name:"Ame"
        }

    ]

    const [selectedItem,setSelectedItem] = useState('All')
  return (
     <View>

<FlatList
       horizontal={true}
        data={siderData}
        renderItem={({item}) =>  <TouchableOpacity onPress={()=>setSelectedItem(item.name)}   style={{alignItems:"center",paddingRight:10,paddingLeft:10}}>

        <Text style={{color:(selectedItem===item.name)?"#d17842":"white",fontSize:16,fontWeight:"600"}} >{item.name}</Text>
        {(selectedItem===item.name)?<View style={{width:5,borderWidth:4,borderColor:"#d17842",borderRadius:5,marginTop:5}}></View>:""}
      </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
  
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    
})