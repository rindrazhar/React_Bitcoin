import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Halaman1 from './Component/halaman1';
import Halaman2 from './Component/halaman2';
import Halaman3 from './Component/halaman3';

class App extends Component {
  render() {
    return (
      <div className='container-fluid' style={{fontFamily:'Montserrat'}}>
        <ul className='nav nav-tabs'>
          <li className='nav-item active'>
            <Link to='/halaman1'>
              <i className="nav-link active" >Info harga Bitcoin</i>
            </Link>
          </li>    
          <li className="nav-item">
            <Link to="/halaman2">
              <i className="nav-link active" >Rupiah ke Bitcoin</i>
            </Link>        
          </li>
          <li className="nav-item">
            <Link to="/halaman3">
              <i className="nav-link active" >Bitcoin ke Rupiah</i>
            </Link>        
          </li>
        </ul>
        <div>
          <Route path='/halaman1'component={Halaman1}/>
          <Route path='/halaman2'component={Halaman2}/>
          <Route path='/halaman3'component={Halaman3}/>
        </div>
      </div>
    );
  }
}

export default App;
