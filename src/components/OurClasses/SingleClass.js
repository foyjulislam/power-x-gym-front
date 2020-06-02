import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const SingleClass = props => {
  const { name, img } = props.item;
  return (
    <div>
      <div>
        <img src={img} alt='' />
      </div>
      <div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default SingleClass;
