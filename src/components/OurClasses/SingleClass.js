import React from 'react';

const SingleClass = props => {
  const { name, img, key } = props.item;
  return (
    <div className='col-xl-4 d-flex'>
      <div className=' text-center' onClick={() => props.history.push(`/classes/${key}`)}>
        <div className='p-2'>
          <img className='' src={img} alt='' />
          <div className=''>
            <h5 className=''>{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
