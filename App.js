import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from "./screens/Home";

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
