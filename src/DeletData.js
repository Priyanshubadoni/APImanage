import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteData = () => {
  const [deletedData, setDeletedData] = useState([]);

  useEffect(() => {
    fetchDeletedData();
  }, []);

  const fetchDeletedData = async () => {
    try {
      const response = await axios.get('https://6570054809586eff66409716.mockapi.io/priyanshuapi?deleted=true');
      setDeletedData(response.data);
    } catch (error) {
      console.error('Error fetching deleted data:', error);
    }
  };

  const handleRestoreData = async (id) => {
    try {
      await axios.post(`https://6570054809586eff66409716.mockapi.io/priyanshuapi/${id}`, { deleted: false });
      fetchDeletedData(); // Refetch deleted data after restoration
    } catch (error) {
      console.error('Error restoring data:', error);
    }
  };

  return (
    <div className="container" >
      <h1>Deleted Data</h1>
      <ul>
        {deletedData.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}, Phone: {item.phone}, Email: {item.email}
            <button onClick={() => handleRestoreData(item.id)}>Restore</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteData;
