import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <section className='bgImage'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 text-left text-uppercase text-white mTop'>
            <h1 className=''>The best fitness studio in town</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos non, aliquam illum
              nulla reiciendis consectetur vitae, cumque, earum omnis rerum sed nihil corporis ipsa
              ab maxime soluta vero at?
            </p>
            <div className=' mb-4'>
              {/* <a className='btn btn-warning ml-1 pl-5 pr-5 font-weight-bold' href='/joinus'>
                Join us
              </a> */}
              <Link className='btn btn-warning ml-1 pl-5 pr-5 font-weight-bold' to={`/pricing`}>
                Join us
              </Link>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='embed-responsive embed-responsive-4by3'>
              {/* <iframe
                  className='embed-responsive-item'
                  src="https://www.youtube.com/embed/uadD3_Zk0Vk"
                >
                  
                </iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
