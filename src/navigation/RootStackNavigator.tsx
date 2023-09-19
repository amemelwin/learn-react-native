import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { GlobalProps } from '../../App';
import DetailScreen from '../../src/screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
export type ScreenProps = StackScreenProps<RootStackParamList> & GlobalProps;

export type RootStackParamList =  {
    Home: any;
    Detail: {
      id:number
    };
  };
const RootStackNavigator = ({globalProps}:{globalProps:GlobalProps})=>{
    const Stack = createNativeStackNavigator<RootStackParamList>();;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                  name="Home" 
                  component={(props:StackScreenProps<RootStackParamList>)=><HomeScreen {...props} {...globalProps}/>} 
                />
                <Stack.Screen 
                  name="Detail" 
                  component={(props:StackScreenProps<RootStackParamList>)=><DetailScreen {...props} {...globalProps}/>} 
                />
                {/* <Stack.Screen name="Home" component={HomeScreen} options={({route})=>({props})} /> */}
                {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
            </Stack.Navigator>
            </NavigationContainer>
    )
}
export default RootStackNavigator;