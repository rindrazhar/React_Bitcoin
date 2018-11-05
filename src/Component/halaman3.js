import React, { Component } from 'react';
import axios from 'axios';

class Halaman3 extends Component {
    constructor(){
        super();
        this.state = {
            btc:'',
            usd:'',
            hasil:'',
        };
    }
    
    convert(){
        var usdBit = this.state.usd
        var bitcoin = this.refs.bitc.value; 
        var has = bitcoin * usdBit * 14000;
        var url = `https://blockchain.info/ticker`

        axios.get(url).then((get)=>{
            this.setState({
                usd:get.data.USD.buy,
                btc:bitcoin,
                hasil:has
            })
        })
    }
    render(){
        return(
            <div className="container" style={{fontFamily:'Montserrat'}}>
                <h1 style={{textAlign: 'center'}}>
                  Konversi Bitcoin ke Rupiah
                </h1>
                <p style={{textAlign: 'center'}}>
                  Kurs 1 USD = 14.000 IDR
                </p>
                <input ref='bitc' type="number" onKeyUp={()=>{this.convert()}} className="form-control"/>
                <h3 style={{marginTop: 25, textAlign: 'center'}}> BTC {this.state.btc} = {this.state.hasil}  </h3> 
            </div>
        );
    }
}

export default Halaman3;