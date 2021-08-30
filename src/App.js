import React, {useState, useEffect} from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import './App.css';
import { sortData } from "./util";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([])
  
useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
       .then((response) => response.json())
       .then((data) => {
           setCountryInfo(data);
       })
}, [])


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

           const sortedData = sortData(data);
           setTableData(sortedData);
           setCountries(countries);
        })
   };
   getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
      const countryCode = event.target.value;

      const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/countries/all" :
       `https://disease.sh/v3/covid-19/countries/${countryCode}`

      // https://disease.sh/v3/covid-19/all
      // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
  
      await fetch(url)
      .then((response) => response.json())
      .then((data) => {
         setCountry(countryCode);
         setCountryInfo(data);
      })
  
  };

  console.log(countryInfo);

return (
    <div className="app">
        <div className="app__left">
              
            <div className="app__header">
                <h1>COVID-19 TRACKER</h1>
    
                        {/* Header */}
                        {/* Title + Dropdown box */}
    
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


            <div className="app__stats">
                <InfoBox title="Coronavirus Cases" 
                cases = {countryInfo.todayCases} 
                total = {countryInfo.cases} />
                
                <InfoBox title="Recovered" 
                cases = {countryInfo.todayRecovered}
                total = {countryInfo.recovered} />
                
                <InfoBox title="Deaths" 
                cases = {countryInfo.todayDeaths} 
                total = {countryInfo.deaths}/>
                        
                        
                        {/* InfoBox --> cases */}
                        {/* InfoBox --> recovery */}
                        {/* InfoBox --> deaths */}
            </div>

            
            {/* Map */}
            <Map/>
            
        </div>

            

        <Card className="app__right">
            <CardContent>
                <h3>Live cases by Country</h3>

                <Table countries={tableData} />
            {/* Table */}
            {/* graph */}
                
                <h2>World Wide new cases</h2>
            </CardContent>
            


        </Card>

    </div>
    );
}

export default App;
