import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './pages/Cart';
import { Provider } from 'react-redux';

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}




export default App;
