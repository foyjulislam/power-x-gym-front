import React, { useState, useEffect } from 'react';
import classes from '../../fakeData/ClassPage/classe';
import SingleClass from '../../components/OurClasses/SingleClass';
import './Classes.css';

const Classes = () => {
  const [classesType, setClassesType] = useState([]);
  useEffect(() => {
    const fitnessClasses = classes.filter(item => item.key);
    setClassesType(fitnessClasses);
  }, []);

  return (
    <div>
      <section className='bgImage'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 offset-3 text-center text-uppercase text-white mTop'>
              <h1 className=''>Our Classes</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            {classesType.map(item => (
              <SingleClass key={item.key} item={item}></SingleClass>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
