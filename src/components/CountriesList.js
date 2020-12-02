import React from 'react';
import jsonCountries from '../countries.json';
import { NavLink } from 'react-router-dom';

class Countries extends React.Component {
    state = {
        countries: jsonCountries
    }

    render() {
        console.log(this.state.countries)
        return (
            <div>
                {this.state.countries.map((country, index) => {
                    return (
                        <div>
                            <span role='img'>{country.flag}</span>
                            <NavLink key={index} to={`/country/${country.cca3}`}>{country.name.official}</NavLink>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Countries;