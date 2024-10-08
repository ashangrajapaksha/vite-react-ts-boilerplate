import React, { useEffect, useState } from 'react';
import { DataResponse } from '../types/index';
import axiosInstance from '../config/axios.config';

const Home: React.FC = () => {
  const [data, setData] = useState<DataResponse[]>([]);

  useEffect(() => {
    // Fetch data using axios instance
    axiosInstance
      .get<DataResponse[]>('/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="ml-10 mt-10">
      <h1 className="font-bold underline">User List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
