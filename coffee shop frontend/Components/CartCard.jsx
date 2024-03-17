import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const CartCard = () => {
  return (
    <View style={styles.cartcardcontainer}>
      <View style={styles.imagecontainer}>
      <Image
        style={styles.image}
        source={require('../assets/coffee.png')}
      />
      <View style={{paddingLeft:30}}>
        <Text style={{fontSize:23,color:"white",fontWeight:"700"}}>Cappuccino</Text>
        <Text style={{fontSize:13,color:"white",fontWeight:"500",marginTop:5}}> With Steamed Milk</Text>

        <TouchableOpacity style={{backgroundColor:"#0c0f14",padding:12,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:10,paddingLeft:14,paddingRight:14}}>
            <Text style={{color:"white",fontSize:15,fontWeight:"500"}}>Medium Roasted</Text>
        </TouchableOpacity>
      </View>
      </View>
      
      <View style={{height:50,width:"100%",flexDirection:"row",alignItems:"center"}}>
      
      <View style={{height:40,width:70,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:1}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >S</Text>
      </View>
      
      <View style={{flexDirection:"row",height:40,width:80,justifyContent:"center",alignItems:"center",marginLeft:5}}>
        <Text style={{fontSize:20,fontWeight:"500",marginRight:4,color:"#d17842"}}>$</Text>
        <Text style={{fontSize:20,fontWeight:"500",color:"white"}}>3.45</Text>
      </View>

      <View style={{flexDirection:"row",height:40,justifyContent:"center",alignItems:"center",marginLeft:5}}>
      <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:12,paddingLeft:12,backgroundColor:"#d17842",borderRadius:10}}>-</Text>
            </TouchableOpacity>
            <View style={{height:38,width:65,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:10,borderWidth:1,borderColor:"#d17842",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >1</Text>
      </View>
            <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:10,paddingLeft:10,backgroundColor:"#d17842",borderRadius:10}}>+</Text>
            </TouchableOpacity>
      </View>

 
      </View>

      <View style={{height:50,width:"100%",flexDirection:"row",alignItems:"center"}}>
      
      <View style={{height:40,width:70,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:1}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >M</Text>
      </View>
      
      <View style={{flexDirection:"row",height:40,width:80,justifyContent:"center",alignItems:"center",marginLeft:5}}>
        <Text style={{fontSize:20,fontWeight:"500",marginRight:4,color:"#d17842"}}>$</Text>
        <Text style={{fontSize:20,fontWeight:"500",color:"white"}}>3.45</Text>
      </View>

      <View style={{flexDirection:"row",height:40,justifyContent:"center",alignItems:"center",marginLeft:5}}>
      <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:12,paddingLeft:12,backgroundColor:"#d17842",borderRadius:10}}>-</Text>
            </TouchableOpacity>
            <View style={{height:38,width:65,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:10,borderWidth:1,borderColor:"#d17842",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >1</Text>
      </View>
            <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:10,paddingLeft:10,backgroundColor:"#d17842",borderRadius:10}}>+</Text>
            </TouchableOpacity>
      </View>

 
      </View>

      <View style={{height:50,width:"100%",flexDirection:"row",alignItems:"center"}}>
      
      <View style={{height:40,width:70,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:1}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >L</Text>
      </View>
      
      <View style={{flexDirection:"row",height:40,width:80,justifyContent:"center",alignItems:"center",marginLeft:5}}>
        <Text style={{fontSize:20,fontWeight:"500",marginRight:4,color:"#d17842"}}>$</Text>
        <Text style={{fontSize:20,fontWeight:"500",color:"white"}}>3.45</Text>
      </View>

      <View style={{flexDirection:"row",height:40,justifyContent:"center",alignItems:"center",marginLeft:5}}>
      <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:12,paddingLeft:12,backgroundColor:"#d17842",borderRadius:10}}>-</Text>
            </TouchableOpacity>
            <View style={{height:38,width:65,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:10,borderWidth:1,borderColor:"#d17842",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >1</Text>
      </View>
            <TouchableOpacity >
                <Text style={{color:"white",fontSize:25,fontWeight:"700",paddingRight:10,paddingLeft:10,backgroundColor:"#d17842",borderRadius:10}}>+</Text>
            </TouchableOpacity>
      </View>

 
      </View>

      
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
    cartcardcontainer:{
        height:310,
        backgroundColor:"rgba(140, 140, 140,0.2)",
        width:"100%",
        padding:20,
        borderRadius:20,
        marginTop:10,
        marginBottom:10
    },
    imagecontainer:{
     
        height:110,
       
        width:"100%",
        flexDirection:"row",
        marginBottom:15
    },
    image:{
        width:120,
        height:120,
        borderRadius:20
    }
})