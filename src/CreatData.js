import React, { useState } from 'react';
import axios from 'axios';


const CreatData = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://6570054809586eff66409716.mockapi.io/priyanshuapi', formData);
      console.log('Data sent:', response.data); 
      
      setFormData({
        id: '',
        name: '',
        phone: '',
        email: '',
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatData;
