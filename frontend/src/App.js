import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Layout/Header'

import ListCharts from './components/Chart/ListCharts';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Chart/Footer';
import Header from './components/Chart/HeaderComp'
import ChartServices from './services/ChartServices';
import AddChart from './components/Chart/AddChart';
import CountrySelector from './components/Chart/CountrySelector';
import IndicatorSelector from './components/Chart/IndicatorSelector';
import CountryDashBoard from './components/Chart/CountryDashBoard';



function App() {
  return (
    <Fragment>
      <Router>
      <Header/>
      <IndicatorSelector/>
      <CountryDashBoard/>
      <Routes>
        <Route exact path='/' element={<ListCharts/>} />
        <Route exact path='/view' Component={ListCharts}></Route>
        <Route exact path='/add-view' Component={AddChart}></Route>
      </Routes>
      <Footer/>
    </Router> 
    </Fragment>
  );
}

export default App;
