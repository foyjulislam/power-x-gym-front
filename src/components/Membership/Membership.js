import React from 'react';
import './Membership.css';

const Membership = () => {
  return (
    <div>
      <section className='bgImage'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 offset-3 text-center text-uppercase text-white mTop'>
              <h1 className=''>Your Gym Membership</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row ' style={{}}>
            <div style={{}} className='col'>
              <h4 className='text-center'>Gym Membership</h4>

              <form className='py-5 '>
                <div className='form-group'>
                  <input name='firstname' className='form-control' placeholder='first name' />
                </div>
                <div className='form-group'>
                  <input name='lastname' className='form-control' placeholder='last name' />
                </div>
                <div className='form-group'>
                  <input name='email' className='form-control' placeholder='enter email' />
                </div>
                <div className='form-group'>
                  <input name='number' className='form-control' placeholder='mobile number' />
                </div>
                <div className='form-group'>
                  <input name='date' className='form-control' placeholder='date of birth' />
                </div>
                <div className='form-group'>
                  <input name='gender' className='form-control' placeholder='gender' />
                </div>
                <div className='form-group'>
                  <textarea
                    name='address'
                    placeholder='Address Line 1'
                    className='form-control'
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <input name='name' className='form-control' placeholder='Country/Region' />
                </div>
                <div className='form-group'>
                  <input name='name' className='form-control' placeholder='City' />
                </div>
                <div className='form-group'>
                  <input name='number' className='form-control' placeholder='Postcode' />
                </div>

                <div className='form-group'>
                  <button className='btn btn-warning btn-block' type='submit'>
                    Save & Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
