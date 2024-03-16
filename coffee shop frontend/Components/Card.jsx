import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Card = () => {
  return (
    <TouchableOpacity style={styles.cardcontainer}>
      <View style={styles.imagecontainer}>

        <View style={styles.rating}>
        <Icon name="star" size={15} color="#d17842" style={styles.menuicon} />
        <Text style={{fontSize:16,fontWeight:"800",color:"white",paddingLeft:5}}>4.5</Text>
        </View>

        <Image
        style={styles.imagecontainer}
        source={require('../assets/coffee.png')}
      />
        
        <Text style={{color:"white",fontSize:21,fontWeight:"700",paddingTop:7}}>
        Cappuccino
        </Text>

        <Text style={{color:"white",fontSize:14,paddingTop:5}}>
            With Steamed Milk
        </Text>

        <View style={{flexDirection:"row",justifyContent:"space-between",height:50,alignItems:"center",marginTop:5}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{color:"#d17842",fontSize:22,fontWeight:"700"}}>$</Text>
            <Text style={{color:"white",fontSize:22,fontWeight:"700"}}> 4.20</Text>
            </View>
            <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:10,paddingLeft:10,backgroundColor:"#d17842",borderRadius:10}}>+</Text>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    cardcontainer:{
     height:300,
     width:170,
     backgroundColor:"rgba(140, 140, 140,0.2)",
     borderRadius:20,
     padding:15,
     marginTop:20,
   
     marginRight:10
    },
    imagecontainer:{
        width:"100%",
        height:150,
        backgroundColor:"black",
        borderRadius:20,
        position:"relative"
    },
    rating:{
        height:30,

        width:70,
        backgroundColor:"rgba(0,0,0,0.8)",
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:0,
        zIndex:10
    }
})