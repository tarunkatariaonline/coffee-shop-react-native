
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Favorite from './Screens/Favorite';
import Order from './Screens/Order';
import Coffeedetails from './Screens/Coffeedetails';
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer     >
    <Stack.Navigator  initialRouteName="Splash" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Coffeedetails" component={Coffeedetails} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

