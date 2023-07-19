import React, { useState } from 'react'
import ChartServices from '../../services/ChartServices';
import {useNavigate} from 'react-router-dom'

const AddChart = () => {


    const [cname, setCName] = useState('');
    const [chartType, setChartType] = useState('');
    const [country, setCountry] = useState('');
    const [indicator, setIndicator] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const navigate = useNavigate();

    const saveChart = (e) => {
        e.preventDefault();

        const chart = {cname, chartType, country, indicator, startDate, endDate};
        console.log(chart)
        ChartServices.createChart(chart).then(()=>{
            console.log(chart)
            navigate('/view')
        }).catch(err => console.log(err))

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 '>
                <h2 className='text-center'>Add Chart</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name</label>
                            <input 
                                type='text'
                                placeholder='Enter Name of the Chart'
                                name='cname'
                                className='form-control'
                                value={cname}
                                onChange={(e) => setCName(e.target.value)}
                                >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Chart Type</label>
                            <input 
                                type='text'
                                placeholder='Enter Chart Type'
                                name='chartType'
                                className='form-control'
                                value={chartType}
                                onChange={(e) => setChartType(e.target.value)}
                                >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Country</label>
                            <input 
                                type='text'
                                placeholder='Enter the Country'
                                name='country'
                                className='form-control'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>indicator</label>
                            <input 
                                type='number'
                                placeholder='Enter the Country'
                                name='indicator'
                                className='form-control'
                                value={indicator}
                                onChange={(e) => setIndicator(e.target.value)}
                                >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>startDate</label>
                            <input 
                                type='date'
                                name='startDate'
                                className='form-control'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>endDate</label>
                            <input 
                                type='date'
                                name='endDate'
                                className='form-control'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                >
                            </input>
                        </div>
                        <button className='btn btn-success ' onClick={(e)=>saveChart(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddChart