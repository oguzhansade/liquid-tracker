import axios from 'axios';
import React from 'react'
import {useEffect, useState} from "react";
import formatGasoline from '../lib/formatGasoline';
import getAverage from '../lib/getAverage';
import money from '../lib/money';
import Loading from './Loading';


function Card({city,district},props) {

  const [isLoading, setIsLoading] = useState(false)
  const [prices, setPrices] = useState([])

const fetchData = () => {

  let getGasolines = `https://api.collectapi.com/gasPrice/turkeyGasoline?district=${district} &city=${city}`
  let getDiesels = `https://api.collectapi.com/gasPrice/turkeyDiesel?district=${district} &city=${city}`
  let getLpgs = `https://api.collectapi.com/gasPrice/turkeyLpg?city=${city}`

  const requestGasolines = axios.get(getGasolines);
  const requestDiesels = axios.get(getDiesels);
  const requestLpgs = axios.get(getLpgs);

  setIsLoading(true)
  axios.all([requestGasolines,requestDiesels,requestLpgs])
  .then (
    axios.spread((...allData) => {
        const allDataGasolines = allData[0].data.result
        const allDataDiesels = allData[1].data.result
        const allDataLpgs = allData[2].data.result
        setPrices(formatGasoline(allDataGasolines,allDataDiesels,allDataLpgs))
    })
  ).catch(function (error) {
    if (error.response) {
      console.log(error.response.status,'Hata Kodu');
    } if (error.response.status === 429) {
      alert('API LIMIT REACHED!')
    } else if (error.response.status === 401) {
      alert('UNDEFINED API TOKEN');
    } else {}
  })
  .finally(() => {
    setIsLoading(false)
  });
}

useEffect (() => {
  fetchData()

}, [city,district])

  return (
    
    <div className='cart-wrapper p-4' >    
      <div className='cart'>
        <div className='cart-header px-3'>
          <div className='cart-title '><span style={{textTransform:'capitalize'}}>{city}</span> / <span style={{textTransform:'capitalize'}}>{district}</span></div>
          <div className='cart-close-btn '><button className='deleteButton' >X</button></div>
        </div>
        <div className='cart-subtitle px-3 mb-3'>Shell</div>
        <div className='cart-body mb-2 px-3'>
          <div className='brand d-flex justify-content-start col-6'>
              <b>Brand</b>
          </div>
          <div className='col-6 d-flex justify-content-between'>
            <div className='liquid col-2'>
              <b>Gasoline</b>
            </div>
            <div className='liquid col-2'>
              <b>Diesel</b>
            </div>
            <div className='liquid col-2'>
              <b>LPG</b>
            </div>
          </div>
        </div> 
        
        {isLoading && <Loading />}      
          {prices.map((item,x) => (
              <div key={x} className='row px-3'>                
                {item.benzin ? <div className='cart-body'>              
                <div className='brand d-flex justify-content-start col-6 '>
                  {item.marka}
                </div>
                <div className='col-6 d-flex justify-content-between'>
                      <div className='liquid text-center col-2'>
                        <div>
                          {money(item.benzin) || '-'}
                        </div>                  
                      </div>
                      <div className='liquid text-center col-2'>
                        {money(item.dizel) || '-'}
                      </div>
                      <div className='liquid tex-center col-2'>
                        {money(item.lpg) || '-'}
                      </div>
                </div>
              </div> : null}              
            </div>
          ))}
      
        <div className='row '>
          <div className='cart-footer-wrapper'>
            <div className='cart-footer'>
            <div className='avg-price-box-wrapper col-4 p-2'>
              <div className='avg-price-box '>
                <div className='avg-price-name text-left'>
                  Gasoline
                </div>
                <div className='avg-price-amount text-left '>
                  {money(getAverage(prices.map(x => x.benzin)))}
                </div>
              </div>
              </div>
              <div className='avg-price-box-wrapper col-4 p-2'>
              <div className='avg-price-box '>
                <div className='avg-price-name'>
                  Diesel
                </div>
                <div className='avg-price-amount '>
                {money(getAverage(prices.map(x => x.dizel)))}
                </div>
              </div>
              </div>
              <div className='avg-price-box-wrapper col-4 p-2'>
              <div className='avg-price-box '>
                <div className='avg-price-name'>
                  LPG
                </div>
                <div className='avg-price-amount '>
                {money(getAverage(prices.map(x => x.lpg)))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Card