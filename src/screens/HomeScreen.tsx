import { Button, Text, View } from "react-native";
import { ScreenProps } from "../navigation/RootStackNavigator";

const HomeScreen=({navigation,route,name}:ScreenProps)=> {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen {name}</Text>
        <Button
          title="Go to Detail"
          onPress={() => {
            navigation.navigate('Detail',{
              id:24
            });
          }}
        />
      </View>
    );
  }

  export default HomeScreen;
  
 