import { Button, Text, View } from "react-native";
import { ScreenProps } from "../navigation/RootStackNavigator";

const DetailScreen=({route,navigation,age}:ScreenProps)=> {
  console.log("route param",route);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen{age}</Text>
        <Text>itemId: {JSON.stringify(route.params?.id)}</Text>
        <Button
          title="Go to Details... again"
         />
      </View>
    );
  }
  export default DetailScreen;