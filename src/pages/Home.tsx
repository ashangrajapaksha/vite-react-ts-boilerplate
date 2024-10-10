import React, { useEffect, useState } from 'react';
import { DataResponse } from '../types/index';
import axiosInstance from '../config/axios.config';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../state/counterSlice';
import CounterDisplay from './CounterDisplay';

const Home: React.FC = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const dispatch = useDispatch();

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
      <CounterDisplay />
      <div className="flex-row space-x-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>

      {/* <h1 className="font-bold underline">User List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
