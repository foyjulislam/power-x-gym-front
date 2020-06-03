import React, { useState, useEffect } from 'react';
import pricingTable from '../../fakeData/PricingPage/pricingTable';
import PricingPlans from '../../components/Pricing/PricingPlans';
import './Pricing.css';

const Pricing = () => {
  const [pricingDetail, setPricingDetail] = useState([]);
  useEffect(() => {
    const pricingData = pricingTable.filter(item => item.key);
    setPricingDetail(pricingData);
  }, []);

  console.log(pricingDetail);

  return (
    <div>
      <section className='bgImage'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 offset-3 text-center text-uppercase text-white mTop'>
              <h1 className=''>Pricing Plans</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div
            className='row text-center'
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {pricingTable.map(item => (
              <PricingPlans key={item.key} item={item}></PricingPlans>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
