import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Countries from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

class App extends React.Component{

    state = {
      countries: []
    };

    componentDidMount() {
       // console.log("did mount");
    axios
    .get('https://countries.tech-savvy.tech/countries')
    .then(response => {
      // console.log("api response");
      this.setState({ countries: response.data });
    })
    .catch(err => console.log(err));
    }

    componentDidUpdate() {
      
    }

    render() {
      const countries = this.state.countries;

      return (
        <div className="App">
          <Navbar />
          <div className='container'>
                <div className='row'>
                  <div className='col-5' style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div className='list-group'>
                      <Countries countries={countries} />
                    </div>
                  </div>
                  <Switch>
                    <Route exact path='/country/:cca3' render={props => <CountryDetails {...props} countries={countries} />} />
                  </Switch>
                </div>
              </div>
        </div>
      );
    }

}


export default App;
