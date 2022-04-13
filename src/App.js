import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import DinoShop from './components/DinoShop';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='home'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Welcome />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='shop' element={<DinoShop />}/>
        </Route>
      </Routes>
      
      <a className="icons8" target="_blank" href="https://icons8.com/icon/lweWyGBSK7KO/shopping-bag">Shopping Bag icon by Icons8</a>
    </div>
  );
}

export default App;
