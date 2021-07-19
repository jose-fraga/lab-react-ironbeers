import React from 'react';
import './App.css';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <Link to="/beers"> all beers</Link>
            <br/>
            <Link to="/random-beer"> random beer</Link>                
            <br/>
            <Link to="/new-beer">  new beer</Link>
        </div>
    );
}

export default Home;