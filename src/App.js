import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Pages/Home';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Home/>
      <Project />
      <Cart />
    </div>
  );
}

export default App;
