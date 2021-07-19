import React from 'react';
import { useState,  } from 'react';

function NewBeer(props) {

    const [beerForm, setBeerForm] = useState({});

    

    const handleChange = (e) => {
        setBeerForm({
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    console.log(beerForm);

    return (
        <div>
            <form onSubmit={handleSubmit} action="/action_page.php" method="get">
                <label for="fname" >Name:</label><br/><br/>
                <input onChange={handleChange} type="text" id="name" name="name"/><br/><br/>
                <label for="lname">Tagline:</label><br/><br/>
                <input onChange={handleChange} type="text" id="tagline" name="tagline"/><br/><br/>
                <label for="lname">Description:</label><br/><br/>
                <input onChange={handleChange} type="text" id="description" name="description"/><br/><br/>
                <label for="lname">First Brewed:</label><br/><br/>
                <input onChange={handleChange} type="text" id="firstbrewed" name="firstbrewed"/><br/><br/>
                <label for="lname">Brewers Tips:</label><br/><br/>
                <input onChange={handleChange} type="text" id="brewerstips" name="brewerstips"/><br/><br/>
                <label for="lname">Attenuation Level:</label><br/><br/>
                <input onChange={handleChange} type="number" id="attenuationlevel" name="attenuationlevel"/><br/><br/>
                <label for="lname">Contributed by:</label><br/><br/>
                <input onChange={handleChange} type="text" id="contributedby" name="contributedby"/><br/><br/>
                <input  type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default NewBeer;