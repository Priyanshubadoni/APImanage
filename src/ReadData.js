import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReadData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6570054809586eff66409716.mockapi.io/priyanshuapi');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit functionality (e.g., navigate to edit page or modal)
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6570054809586eff66409716.mockapi.io/priyanshuapi/${id}`);
      alert('your data has been delet')
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <h1>Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/EditData/${item.id}`} className="btn btn-primary">Edit</Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadData;
