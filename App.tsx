import UserList from './src/UserList/UserList';
import { store } from './src/store';
import { Provider } from 'react-redux';

const App=()=> {
  return (
    <Provider store={store}>
       <UserList/>  
    </Provider>
  )
  //  <UserList/>  
};
export default App;
