import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleClass = props => {
  const { name, img, key } = props.item;
  return (
    // <div className=' text-center' onClick={() => props.history.push(`/classes/${key}`)}>

    <Card
      style={{
        width: '22rem',
        height: '22rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${img})`
      }}
      className='text-white p-1 m-2 mt-sm-5 mb-md-5'
    >
      <Card.Body>
        <Card.Title style={{ marginTop: '300px' }}>
          <Link to={`/class/${key}`}>
            <Button variant='warning' size='lg' block>
              {name}
            </Button>
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleClass;
