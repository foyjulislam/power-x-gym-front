import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PricingPlans = props => {
  const { key, img, title, name, price, features } = props.item;

  return (
    <Card
      style={{
        width: '20rem',
        height: '30rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${img})`
      }}
      className='text-white p-2 m-2 mt-sm-5 mb-md-5'
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-white'>{price}</Card.Subtitle>
        <Card.Text>{name}</Card.Text>

        <Link to={`/price/${key}`} className='btn btn-warning text-uppercase '>
          <span>Purchase</span>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PricingPlans;

// import React from 'react';
// import { Card } from 'react-bootstrap';

// const CategoryWork = props => {
//   const { name, img, key, about, icon } = props.item;
//   return (
// <Card
//   style={{
//     width: '22rem',
//     height: '22rem',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center center',
//     backgroundImage: `url(${img})`
//   }}
//   className='text-white p-2 m-2 mt-sm-5 mb-md-5'
// >
//   <Card.Body>
//     <Card.Title>{name}</Card.Title>
//     <Card.Subtitle className='mb-2 text-muted'>{icon}</Card.Subtitle>
//     <Card.Text>{about}</Card.Text>
//   </Card.Body>
// </Card>
//   );
// };

// export default CategoryWork;
