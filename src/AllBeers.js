import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers(props) {

    const [allBeers, setAllBeers] = useState([]);

    useEffect( () => {
        (async() => {
            let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setAllBeers(res.data);
        })();
    }, []);


    return (
        <div>
            {allBeers.map((beer) => {
                return (
                    <Link to={`/beer/${beer._id}`} key={beer._id} style={{ textDecoration: 'none' }}>
                        <div>
                            <li style={{
                                display: "flex",
                                padding: "2%", 
                                }}>
                                <img 
                                    src={beer.image_url}
                                    alt="beer image"
                                    style={{
                                        width: '30px',
                                        margin: '20px'
                                    }}
                                />
                                <div>
                                    <h3>{beer.name}</h3>
                                    <h4 style={{color: 'gray'}}>{beer.tagline}</h4>
                                    <h5>Created by: {beer.name}</h5>
                                </div>
                            </li>
                            <hr/>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default AllBeers;