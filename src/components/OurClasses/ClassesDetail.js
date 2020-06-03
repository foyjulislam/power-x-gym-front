import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../../fakeData/ClassPage/classe';

const ClassesDetail = props => {
  const singleKey = useParams();
  const [classesDetail, setClassesDetail] = useState(null);

  useEffect(() => {
    const classData = classes.filter(item => item.key === parseFloat(singleKey.key));
    setClassesDetail(classData[0]);
  }, []);
  console.log(classesDetail);

  return (
    <div>
      {classesDetail ? (
        <h3>{classesDetail && classesDetail.img}</h3>
      ) : (
        <h3> Problem fixed then try </h3>
      )}
    </div>
  );
};

export default ClassesDetail;
