import React, { useState, useEffect } from 'react';
import progression from '../../fakeData/HomePage/progration';
import CategoryWork from '../../components/HomePage/CategoryWork';

const Workout = () => {
  const [workoutCtg, setWorkoutCtg] = useState([]);
  useEffect(() => {
    const workCtgData = progression.filter(item => item.key);
    setWorkoutCtg(workCtgData);
  }, []);

  return (
    <section>
      <div className='container'>
        <div
          className='row text-center'
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {workoutCtg.map(item => (
            <CategoryWork key={item.key} item={item}></CategoryWork>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workout;
