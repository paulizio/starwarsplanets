import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Planetsfilter from './components/Planetsfilter';
import './App.css';
import { NextUrl, Planet, Resident, SwapiResponse } from './types';

const App = (): JSX.Element => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [residents, setResidents] = useState <Resident[]>([]);
  // Get planets and residents from all pages
  useEffect(() => {
    const fetchStarWarsData = async (url:string, setData:(data:any)=>void) => {
      let data: Planet[]|Resident[]=[];
      let nextResponse:SwapiResponse;
      const response: SwapiResponse = await axios.get(url);
      data = response.data.results;
      let nextUrl:NextUrl = response.data.next;
      while (nextUrl) {
        nextResponse = await axios.get(nextUrl);
        // @ts-ignore 
        data = [...data, ...nextResponse.data.results];
        nextUrl = nextResponse.data.next;
      }
      setData(data);
    };
   void fetchStarWarsData('https://swapi.dev/api/planets', setPlanets);
   void fetchStarWarsData('https://swapi.dev/api/people', setResidents);
  }, []);
  return (
    <div className='center'>
      <img src='https://fontmeme.com/permalink/201103/0869a6e4e4dd64aa577d10f506519065.png' alt='' />
      <div>
        <h1>Planets</h1>
        <Planetsfilter planets={planets} residents={residents} />
      </div>
    </div>
  );
};

export default App;
