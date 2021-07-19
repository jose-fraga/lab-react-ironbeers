import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";


function Beer(props) {

    const [currentBeer, setCurrentBeer] = useState({});

    useEffect( () => {
        (async() => {
            let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
            console.log(res.data)
            setCurrentBeer(res.data)
        })();
    }, [props]);


    return (
        <div>
           <img               
                src={currentBeer?.image_url}
                style={{width: '50px'}}
            />
            <h3>{currentBeer.name}</h3>
            <h3>{currentBeer.tagline}</h3>
            <h3>{currentBeer.first_brewed}</h3>
            <h3>{currentBeer.attenuation_level}</h3>
            <h3>{currentBeer.description}</h3>
            <h3>{currentBeer.contributed_by}</h3>
        </div>
    );
}

export default Beer;