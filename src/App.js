import './App.css';
import HomeScreen from './Home/home';
import Library from './Library/Library'
import Navbar from './Navbar/Navbar'
import {Routes, route, Link, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/library' element={<Library/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
