import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../../fakeData/ClassPage/classe';

const ClassesDetail = () => {
  const singleKey = useParams();
  const [classesDetail, setClassesDetail] = useState(null);

  useEffect(() => {
    const classData = classes.filter(item => item.key === parseFloat(singleKey.key));
    setClassesDetail(classData[0]);
  }, [singleKey]);
  console.log(classesDetail);

  return (
    <div
      style={{
        color: 'red',
        backgroundColor: 'black',
        marginTop: '200px'
      }}
    >
      {classesDetail ? (
        <h3>{classesDetail && classesDetail.name}</h3>
      ) : (
        <h3> Class Detail Not Found. Please try again </h3>
      )}
    </div>
  );
};

export default ClassesDetail;
