import './App.css';
import ResponsiveComponent from './bootstrapPractice/ResponsiveComponent';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveComponent/> */}
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
