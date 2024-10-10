import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const CounterDisplay: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>Counter Value: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
