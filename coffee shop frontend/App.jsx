
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Favorite from './Screens/Favorite';
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer   >
    <Stack.Navigator initialRouteName="Splash" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorite" component={Favorite} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

