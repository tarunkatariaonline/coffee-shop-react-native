import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Gradiant = () => {
  return (
    <View>
   <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}   style ={{height:40,width:"100%"}}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
    </View>
  )
}

export default Gradiant

const styles = StyleSheet.create({})