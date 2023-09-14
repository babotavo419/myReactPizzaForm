import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import './App.scss'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div className="center-content">
            <img src="/IMG_1758.jpg" alt="Big Tavo" className='tavio-image'/>
            <Link id="order-pizza" to="/pizza" className="big-link">Welcome! To Big Tavo's Pizza!</Link>
          </div>
        } />
        <Route path="/pizza" element={<PizzaForm />} />
      </Routes>
    </div>
  );
};

export default App;



