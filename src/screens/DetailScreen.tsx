import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/RootStackNavigator";
type RouteProps = StackNavigationProp<RootStackParamList, 'Detail'>;
// typt prosType = NativeStackScreenProps<stackScreens,'Home'>;
const DetailScreen=({route,navigation}:StackScreenProps<any>)=> {
  console.log("route param",route);
    /* 2. Get the param */
   
    // const { itemId } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(route.params?.id)}</Text>
        {/* <Text>otherParam: {JSON.stringify(route.otherParam)}</Text> */}
        <Button
          title="Go to Details... again"
          // onPress={() =>
          //   navigation.push('Details', {
          //     itemId: Math.floor(Math.random() * 100),
          //   })
          // }
        />
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }
  export default DetailScreen