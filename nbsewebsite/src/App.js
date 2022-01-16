import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className='App'> 
      <Navigation/>
          <Routes>                
             <Route exact path='/' component={Home}/>            
          </Routes>

    </div>
  );
}

export default App;
