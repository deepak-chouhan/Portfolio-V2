import React from "react";
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Archive from './pages/Archive/Archive';
import Index from './pages/Index/Index';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/archive' element={<Archive/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
