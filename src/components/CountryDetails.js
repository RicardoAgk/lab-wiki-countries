import React from 'react';
import jsonCountries from '../countries.json';
import { Link } from 'react-router-dom';


class CountryDetails extends React.Component {
    state = {
        name: '',
        flag: '',
        capital: '',
        area: '',
        borders: ''
    }

    componentDidMount() {

        let countryId = this.props.match.params.cca3;

        let foundCountry = jsonCountries.find((country) => {
            return country.cca3 === countryId;
        })

        this.setState({
            name: foundCountry.name.official,
            flag: foundCountry.flag,
            capital: foundCountry.capital,
            area: foundCountry.area,
            borders: foundCountry.borders
        })
    }

    render() {
        return (
            <div>
                <h3> {this.state.name}</h3>
                <p>Capital: {this.state.capital} </p>
                <p>Area: {this.state.area} m2</p>
                <ul>
                    {this.state.borders &&
                    this.state.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={'/country/' + cca3}>{jsonCountries.find(country => country.cca3 === cca3).name.common}</Link>
                        </li>
                      );
                    })}
                 </ul>
            </div>)
    }
}

export default CountryDetails;