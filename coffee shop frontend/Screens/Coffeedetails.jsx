import { StyleSheet, Text, View,StatusBar ,Image,TouchableOpacity} from 'react-native'
import  Icon  from 'react-native-vector-icons/Entypo'
import React from 'react'

const CoffeeDetails = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#0c0f14",flex:1}}>
      
      <StatusBar style="auto"  backgroundColor='#0c0f14'  />
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
      <TouchableOpacity style={{width:35,height:35,backgroundColor:"#252A32",position:"absolute",top:10,left:10,borderRadius:10,justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate('Home')}>
       <Icon name='arrow-left' size={20} color={"gray"}/>
      </TouchableOpacity>
      </View>
      <View style={{padding:15}}>
        <Text style={{color:"white",fontSize:22,fontWeight:"500"}}>Description</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"300"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque at saepe quo, officia quia quaerat magnam voluptate architecto aut  fsdf  fsf  fdf</Text>

        <Text style={{color:"white",fontSize:22,fontWeight:"500",marginTop:15,marginBottom:15}}>Size</Text>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10}}>
        <TouchableOpacity style={{height:38,width:100,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:1,borderColor:"#d17842",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"#d17842"}} >S</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:38,width:100,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:1,borderColor:"white",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >L</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:38,width:100,backgroundColor:"#0c0f14",justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:1,borderColor:"white",marginRight:10}}>
      <Text style={{fontSize:20,fontWeight:"500",color:"white"}} >M</Text>
      </TouchableOpacity>
   
      
      </View>
        
      </View>
    </View>
    <View style={{height:70,padding:15 ,width:"100%",backgroundColor:"#0c0f14",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{height:70,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"gray",fontSize:16}}>Price</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{color:"#d17842",fontSize:23}}>$</Text>
        <Text style={{color:"white",fontSize:23,fontWeight:"700"}}> 4.23</Text>
        </View>

      </View>
      <TouchableOpacity style={{height:55,width:220,backgroundColor:"#d17842",justifyContent:"center",alignItems:"center",borderRadius:15}}> 
        <Text style={{fontSize:20,color:"white"}}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default CoffeeDetails

const styles = StyleSheet.create({
    favcard:{
        width:"100%",
       flex:1,
        backgroundColor:"#0c0f14",
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