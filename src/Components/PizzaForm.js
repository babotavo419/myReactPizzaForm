import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './valadation/formSchema';

const PizzaForm = () => {
  const [formValues, setFormValues] = useState({
    Name: '',
    address: '',
    phoneNumber: '',
    size: '',
    toppings: [],
    specialText: ''
  });

  const [nameError, setNameError] = useState('');
  const [postError, setPostError] = useState('');

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

  const validateForm = async () => {
    try {
      await schema.validate(formValues, { abortEarly: false });
      setNameError('');
      return true;
    } catch (err) {
      const nameErrors = err.inner.filter((error) => error.path === 'Name');
      setNameError(nameErrors[0]?.message || '');
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = await validateForm();

    if (isFormValid) {
      axios
        .post('https://reqres.in/api/orders', formValues)
        .then((res) => {
          console.log(res.data);
          setFormValues({
            Name: '',
            address: '',
            phoneNumber: '',
            size: '',
            toppings: [],
            specialText: ''
          });
        })
        .catch((err) => console.log(err));
    } else {
      setPostError('An error occurred while submitting the form. Please try again.');
    }
  };
  

  return (
    <div>
      <h1>Big Tavo's Pizza</h1>
      <form id="pizza-form" onSubmit={handleSubmit}>
    <div/>
    <div>
    <label>
        Name
        <input
            id="name-input"
            name="Name"
            value={formValues.Name}
            onChange={handleChanges}
            />
    </label>
    </div>
    <div>
        <label>
          Address
          <input id="address-input" name="address" value={formValues.address} onChange={handleChanges} />
        </label>
        <label>
          Phone Number
          <input id="phone-number-input" name="phoneNumber" value={formValues.phoneNumber} onChange={handleChanges} />
        </label>
    </div>
    <div>
        <label>
          Size
          <select id="size-dropdown" name="size" value={formValues.size} onChange={handleChanges}>
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
    </div>
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
    <div>
        <label>
          Special Instructions
          <input id="special-text" name="specialText" value={formValues.specialText} onChange={handleChanges} />
        </label>
    </div>
    <div>
        <button id="order-button" 
        type="submit">Add to Order
        </button>
    </div>
        {postError && <div>{postError}</div>}
        {nameError && <div>{nameError.toString()}</div>}
      </form>
    </div>
  );
};

export default PizzaForm;

  