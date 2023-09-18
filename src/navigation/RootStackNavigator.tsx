import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { ScreenProps } from '../../App';
import DetailScreen from '../../src/screens/DetailScreen';
import HomeScreen from '../../src/screens/HomeScreen';
export type RootStackParamList = {
    Home: undefined;
    Detail: {
      id:number
    };
  };
const RootStackNavigator = ({screenProp}:{screenProp:ScreenProps})=>{
    const Stack = createNativeStackNavigator<RootStackParamList>();;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={(props:StackScreenProps<RootStackParamList>)=><HomeScreen {...props} {...screenProp}/>} />
                {/* <Stack.Screen name="Home" component={HomeScreen}  /> */}
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
            </NavigationContainer>
    )
}
export default RootStackNavigator;