import React, { useState } from 'react';
import axios from 'axios';

const PizzaForm = () => {
  const [formValues, setFormValues] = useState({
    customerName: '',
    address: '',
    phoneNumber: '',
    size: '',
    toppings: [],
    specialText: ''
  });

  const handleChanges = (event) => {
 
    if (event.target.type === 'checkbox') {
      setFormValues({
        ...formValues,
        toppings: [...formValues.toppings, event.target.value]
      });
    } else {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.customerName.length < 2) {
      alert('Name must be at least 2 characters');
      return;
    }

    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res.data);

        setFormValues({
          customerName: '',
          address: '',
          phoneNumber: '',
          size: '',
          toppings: [],
          specialText: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Big Tavo's Pizza</h1>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label>
          Customer Name
          <input id="customer-name-input" name="customerName" value={formValues.customerName} onChange={handleChanges} />
        </label>
        <label>
          Address
          <input id="address-input" name="address" value={formValues.address} onChange={handleChanges} />
        </label>
        <label>
          Phone Number
          <input id="phone-number-input" name="phoneNumber" value={formValues.phoneNumber} onChange={handleChanges} />
        </label>
        <label>
          Size
          <select id="size-dropdown" name="size" value={formValues.size} onChange={handleChanges}>
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <div>
        <label>
        <input type="checkbox" name="toppings" value="cheese" onChange={handleChanges} />
            Cheese
        </label>
        <label>
        <input type="checkbox" name="toppings" value="pepperoni" onChange={handleChanges} />
            Pepperoni
        </label>
        <label>
        <input type="checkbox" name="toppings" value="sausage" onChange={handleChanges} />
            Sausage
        </label>
        <label>
        <input type="checkbox" name="toppings" value="chicken" onChange={handleChanges} />
            Chicken
        </label>
        <label>
        <input type="checkbox" name="toppings" value="ham" onChange={handleChanges} />
            Ham
        </label>
        </div>
        <label>
          Special Instructions
          <input id="special-text" name="specialText" value={formValues.specialText} onChange={handleChanges} />
        </label>
        <button id="order-button" type="submit">Add to Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;

  