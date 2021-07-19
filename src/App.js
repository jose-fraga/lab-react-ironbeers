import React from 'react';
import './App.css';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import axios from "axios";
import { useEffect, useState } from "react";
import Beer from "./Beer";


function App() {

  
  return (
    <div className="App">
      <nav style={{
        background: '#1DA1F2',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}> 
        <Link to="/">Home</Link>
      </nav>
      
      <Switch>
        <Route exact path='/' render={() => <Home /> } />
        <Route exact path='/beers' render={() =>  <AllBeers/>} />
        <Route exact path='/random-beer' render={() =>  <RandomBeer/>} />
        <Route exact path='/new-beer' render={() =>  <NewBeer/>} />
        <Route exact path="/beer/:id" render={(props) => <Beer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;