import { Provider } from 'react-redux';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store';

const App=()=> {
  return (
    <Provider store={store}>
       {/* <UserList/>   */}
       <HomeScreen/>
       <DetailScreen/>
    </Provider>
  )
  //  <UserList/>  
};
export default App;
