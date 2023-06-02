import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div><Link id="order-pizza" to="/pizza">Order Pizza</Link></div>} />
        <Route path="/pizza" element={<PizzaForm />} />
      </Routes>
    </div>
  );
};

export default App;

