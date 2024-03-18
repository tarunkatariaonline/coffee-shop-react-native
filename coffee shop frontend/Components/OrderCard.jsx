import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const OrderCard = () => {
  return (

    <View style={{marginTop:10,marginBottom:12}} >
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:2}}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Order Date</Text>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Total Amount </Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:8}}>
            <Text style={{color:"white",fontSize:16,fontWeight:"bold",paddingLeft:2}}>20th march 16:23</Text>
            <Text style={{color:"#d17842",fontSize:16,fontWeight:"bold",paddingRight:5}}>$ 74.20</Text>
        </View>
    <View style={styles.ordercardcontainer} >
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

       
      <Image
        style={styles.img}
        source={require('../assets/coffee.png')}
      />

      <View>
      <Text style={{color:"white",fontSize:19,fontWeight:"bold"}}>Cappuccino</Text>
      <Text style={{color:"white",fontSize:13}}>With steamed milk</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={{color:"#d17842",fontSize:25,fontWeight:"bold",paddingRight:5}}>$</Text>
      <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>37.20</Text>
      </View>
       </View>

       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <View style={{flexDirection:"row"}}>
            <View style={{backgroundColor:"#0c0f14",width:60,height:35,justifyContent:"center",alignItems:"center",borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
            <Text style={{color:"white",fontSize:20}}>S</Text>
            </View>

            <View style={{backgroundColor:"#0c0f14",width:95,height:35,justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:5}}>$</Text>
            <Text style={{color:"white",fontSize:20}}>4.20</Text>
            </View>
           
        </View>

        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:3}}>X</Text>
            <Text style={{color:"white",fontSize:20}}>2</Text>
            </View>

            <View style={{justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20}}>8.40</Text>
           
            </View>


       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <View style={{flexDirection:"row"}}>
            <View style={{backgroundColor:"#0c0f14",width:60,height:35,justifyContent:"center",alignItems:"center",borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
            <Text style={{color:"white",fontSize:20}}>S</Text>
            </View>

            <View style={{backgroundColor:"#0c0f14",width:95,height:35,justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:5}}>$</Text>
            <Text style={{color:"white",fontSize:20}}>4.20</Text>
            </View>
           
        </View>

        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:3}}>X</Text>
            <Text style={{color:"white",fontSize:20}}>2</Text>
            </View>

            <View style={{justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20}}>8.40</Text>
           
            </View>


       </View>
   
       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <View style={{flexDirection:"row"}}>
            <View style={{backgroundColor:"#0c0f14",width:60,height:35,justifyContent:"center",alignItems:"center",borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
            <Text style={{color:"white",fontSize:20}}>S</Text>
            </View>

            <View style={{backgroundColor:"#0c0f14",width:95,height:35,justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:5}}>$</Text>
            <Text style={{color:"white",fontSize:20}}>4.20</Text>
            </View>
           
        </View>

        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20,paddingRight:3}}>X</Text>
            <Text style={{color:"white",fontSize:20}}>2</Text>
            </View>

            <View style={{justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:"row",marginLeft:2}}>
            <Text style={{color:"#d17842",fontSize:20}}>8.40</Text>
           
            </View>


       </View>
   
   
     
      
       </View>
    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
ordercardcontainer:{
    width:"100%",
    minHeight:150,
    backgroundColor:"rgba(140, 140, 140,0.2)",
    borderRadius:20,
    padding:20,
    marginTop:10
},
img:{
    height:60,
    width:60,
    borderRadius:10
}
})