import React from "react";
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Archive from './pages/Archive/Archive';
import Index from './pages/Index/Index';
import FractalNoise from "./components/UI/FractalNoise/FractalNoise";


function App() {
  return (
    <div className="App">
      <FractalNoise />
      <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/archive' element={<Archive/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
