import axios from 'axios';
import React from 'react'
import {useEffect, useState} from "react";

function AvgComponent() {


  
    const [avgGasoline,setAvgGasoline] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='row   p-5  avg-banner'>
                    <div className='col-2 avg-item'>
                        <div className='avg-item-title'>
                            Avg Gasoline                          
                        </div>
                        <div className='avg-item-price'>
                            16.64₺
                            {avgGasoline.map((gasoline) => (
                                <div key={gasoline.id}>{gasoline.benzin}₺</div>
                            ))}
                        </div>
                    </div>

                    <div className='col-2 avg-item'>
                        <div className='avg-item-title'>
                            Avg Diesel
                        </div>
                        <div className='avg-item-price'>
                            16.24₺
                        </div>
                    </div>

                    <div className='col-2 avg-item'>
                        <div className='avg-item-title'>
                            Highest Gasoline
                        </div>
                        <div className='avg-item-price'>
                            Samsun/Atakum
                        </div>
                    </div>

                    <div className='col-2 avg-item'>
                        <div className='avg-item-title'>
                            Highest Diesel
                        </div>
                        <div className='avg-item-price'>
                            <p>Gumushane/Merkez</p>
                        </div>
                    </div>

                    <div className='col-2 avg-item'>
                        <div className='avg-item-title'>
                            Highest LPG
                        </div>
                        <div className='avg-item-price'>
                            Trabzon/Ortahisar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvgComponent