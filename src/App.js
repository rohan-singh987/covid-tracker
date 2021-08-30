import React, {useState, useEffect} from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide")
  
  
  useEffect(() => {
   const getCountriesData = async() =>{
       await fetch("https://disease.sh/v3/covid-19/countries")
       .then((response) => response.json())
       .then((data) => {
           const countries = data.map((country) => (
               {
                   name: country.country,
                   value: country.countryInfo.iso2,
               }
           ));
           setCountries(countries);
        })
   };
   getCountriesData();
  }, [])

  const onCountryChange = (event) => {
      const countryCode = event.target.value;

      console.log(countryCode);

      setCountry(countryCode);
  }


    return (
        <div className="App">
            <div className="app__header">
                <h1>COVID-19 TRACKER</h1>
                <FormControl className="app__dropdown">
                    <Select variant = "outlined" onChange = {onCountryChange} value = {country}>
                        
                        <MenuItem value ="worldwide">WorldWide</MenuItem>


                        {/* Loop down through all the countries and show a dropDown list of the optioins */}
                        
                        {countries.map((country) =>(
                        <MenuItem value ={country.value}>{country.name}</MenuItem> 
                        ))}
                         
                        {/* <MenuItem value ="worldwide">WorldWide</MenuItem>
                        <MenuItem value ="worldwide">Option</MenuItem> */}
                        
                    </Select>
                </FormControl>
            </div>
            {/* Header */}
            {/* Title + Dropdown box */}

            {/* InfoBox --> cases */}
            {/* InfoBox --> recovery */}
            {/* InfoBox --> deaths */}

            {/* Table */}
            {/* graph */}

            {/* Map */}


        </div>
    );
}

export default App;
