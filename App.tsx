import * as React from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';
export type ScreenProps = {
  name: string;
}
const App=()=> {
  const name = "Amie";
  const screenProp : ScreenProps = {
    name
  }
  return (
    <RootStackNavigator screenProp={screenProp}/>   
  )
};
export default App;
