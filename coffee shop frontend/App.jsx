
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer   >
    <Stack.Navigator initialRouteName="Splash" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

