import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/Entypo'

const FavoriteCard = () => {
  return (
    <View style={styles.favcard}>
      
      <View style={styles.img}>
      <Image
        style={styles.img}
        source={require('../assets/coffee.png')}
      />
      <View style={{width:"100%",height:150,backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",bottom:0,borderTopLeftRadius:20,borderTopRightRadius:20,padding:15}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View>
            <Text style={{color:"white",fontSize:23,fontWeight:"700"}}>Cappuccino</Text>
            <Text style={{color:"white",fontWeight:"300"}}> With Steamed Milk</Text>
            
        </View>
            
            <View style={{flexDirection:"row"}}>
          <View style={{height:60,width:60,backgroundColor:"#0c0f14",borderRadius:10,marginRight:5,marginLeft:5,justifyContent:"center",alignItems:"center"}}>
            <Icon name='location-pin' size={28} color={"orange"}/>
            <Text style={{color:"#d9d9d9",fontSize:12}}>Coffee</Text>
          </View>
          <View style={{height:60,width:60,backgroundColor:"#0c0f14",borderRadius:10,marginRight:5,marginLeft:5,justifyContent:"center",alignItems:"center"}}>
            <Icon name='drop' size={28} color={"orange"}/>
            <Text style={{color:"#d9d9d9",fontSize:12}}>Milk</Text>
          </View>
          
          </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:12}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Icon name='star' size={25} color={"orange"}/>
            <Text style={{color:"white",fontSize:23,fontWeight:"700",marginLeft:6}}>4.5</Text>
            
            
        </View>
            
          
          <View style={{height:46,width:130,backgroundColor:"#0c0f14",borderRadius:10,marginRight:5,marginLeft:5,justifyContent:"center",alignItems:"center"}}>
             <Text style={{color:"#d9d9d9",fontSize:13}}>Medium Roasted</Text>
          </View>
        
       
        </View>

      </View>

      <TouchableOpacity style={{width:35,height:35,backgroundColor:"#252A32",position:"absolute",top:10,right:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
       <Icon name='heart' size={20} color={"red"}/>
      </TouchableOpacity>
      </View>
      <View style={{padding:15}}>
        <Text style={{color:"white",fontSize:22,fontWeight:"500"}}>Description</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"300"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque at saepe quo, officia quia quaerat magnam voluptate architecto aut </Text>
      </View>
    </View>
  )
}

export default FavoriteCard

const styles = StyleSheet.create({
    favcard:{
        width:"100%",
        height:590,
        backgroundColor:"rgba(143, 141, 141,0.2)",
        borderRadius:20,
        marginTop:10,
        marginBottom:10
    },
    img:{
         width:"100%",
         height:450,
         backgroundColor:"yellow",
         borderTopLeftRadius:20,
         borderTopRightRadius:20,
         position:"relative"
    }
})