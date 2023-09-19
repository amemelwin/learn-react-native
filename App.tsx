import * as React from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';
export type GlobalProps= {
  name: string;
  age: number;
}
const App=()=> {
  const name = "Arrkar";
  const globalProps : GlobalProps = {
    name,age:300
  }
  return (
    <RootStackNavigator globalProps={globalProps}/>   
  )
};
export default App;
