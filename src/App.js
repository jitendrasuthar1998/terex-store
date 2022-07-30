import './App.css';
import ResponsiveComponent from './bootstrapPractice/ResponsiveComponent';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './pages/Cart';

function App() {
  return (
    // <div className="App">
    
    //   <Home/>


    // </div>
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
  );
}




export default App;
