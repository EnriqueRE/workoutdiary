import './App.css';
import HomeScreen from './Home/home';
import Library from './Library/Library';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/library' element={<Library />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      
    </div>
  );
}

export default App;
