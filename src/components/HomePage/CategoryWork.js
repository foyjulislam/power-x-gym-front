import React from 'react';

const CategoryWork = props => {
  const { name, img, key, about, icon } = props.item;
  return (
    <div className='col-xl-4 d-flex'>
      <div className=' text-center'>
        <div className='p-2'>
          <img className='' src={img} alt='' />
          <div className=''>
            <h5 className=''>{about}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWork;
