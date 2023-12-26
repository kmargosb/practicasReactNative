import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BagShop from './pages/BagShop';
import PokedexId from './pages/PokedexId';
import Navbar from './components/Navbar';
import Clock from './pages/Clock'
import Pokedex from './pages/Pokedex';
import Creditcard from './pages/Creditcard';
import ButtonPractice from './pages/ButtonPractice';
import UsersCards from './pages/UsersCards';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/bagshop" element={<BagShop />} />
          <Route path="/userscards" element={<UsersCards />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexId />} />n         
          <Route path="/creditcard" element={<Creditcard />} />
          <Route path="/buttonpractice" element={<ButtonPractice />} />
          
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
