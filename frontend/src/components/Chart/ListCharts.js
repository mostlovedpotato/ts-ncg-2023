import React, { useEffect, useState } from 'react'
import ChartServices from '../../services/ChartServices';
import { Link } from 'react-router-dom';



const ListChart = () => {

    const [charts, setCharts]=useState([]);

    


    useEffect(() => {
        getAllCharts();
    }, [])

    const getAllCharts = () => {
        ChartServices.getAllCharts().then((res)=>{
            setCharts(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteCharts = (chartId) => {
        ChartServices.deleteCharts(chartId).then((res) => {
            getAllCharts();
        }).catch(err=>console.log(err))
    }
    

  return (
    <>
    <div>Hello</div>
        <Link to='/add-view' className='btn btn-primary mb-2'>Add Chart</Link>
            <table className='table table-bordered '>
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Cname</th>
                        <th scope="col">Chart Type</th>
                        <th scope="col">Indicator</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">End Date</th>
                        </tr>
                    </thead>
                <tbody>
                
                {charts.map(chart=>
                    <tr key={chart.id}>
                        <td>{chart.id}</td>
                        <td>{chart.cname}</td>
                        <td>{chart.chartType}</td>
                        <td>{chart.indicator}</td>
                        <td>{chart.startDate}</td>
                        <td>{chart.endDate}</td>
                        <td>
                            <Link className='btn btn-success' to={`/edit-chart/${chart.id}`}>Update</Link>
                            <Link className='btn btn-warning ' style={{marginLeft:"1em"}} onClick={() => deleteCharts(chart.id)}>Delete</Link>
                        </td>
                    </tr> 
                )}
                </tbody>
            </table>
        
    </>
  )
}

export default ListChart;