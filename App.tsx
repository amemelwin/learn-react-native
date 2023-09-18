import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
export type PersonProp = {
  itemId: number;
  otherParam : string;
}
export type RootStackParamList = {
  Home: undefined;
  Detail: {route:PersonProp;};
};
const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator<RootStackParamList>();;
const App=()=> {
  return (
    // <Provider store={store}>     
   // </Provider>
   <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={()=><HomeScreen/>} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={() => <DetailScreen />} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
