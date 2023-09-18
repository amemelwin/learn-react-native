import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/RootStackNavigator";

type RouteProps = StackNavigationProp<RootStackParamList, 'Home', 'MyStack'>;
// type prosType = NativeStackScreenProps<stackScreens,'Home'>
const HomeScreen=({navigation,route,}:StackScreenProps<RootStackParamList>)=> {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => {
            //  navigation.navigate('Detail')
            /* 1. Navigate to the Detail route with params */
            navigation.navigate('Detail',{
              id:24
            });
          }}
        />
      </View>
    );
  }

  export default HomeScreen;
  
 