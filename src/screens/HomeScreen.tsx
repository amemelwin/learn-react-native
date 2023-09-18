import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { PersonProp, RootStackParamList } from "../../App";

type RouteProps = StackNavigationProp<RootStackParamList, 'Home', 'MyStack'>;
// type prosType = NativeStackScreenProps<stackScreens,'Home'>
const HomeScreen=({navigation}:any)=> {

  const person:PersonProp = {
    itemId: 86,
    otherParam: 'anything you want here',
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => {
            //  navigation.navigate('Detail')
            /* 1. Navigate to the Detail route with params */
            navigation.navigate('Detail',person );
          }}
        />
      </View>
    );
  }

  export default HomeScreen;
  
 