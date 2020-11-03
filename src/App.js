import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import Planetsfilter from './components/Planetsfilter';
import './App.css';

const App=() => {
  const [planets,setPlanets]=useState([]);
  const [residents,setResidents]=useState([]);

  //Get planets from all pages
  useEffect(() => {
    const first=axios.get('https://swapi.dev/api/planets');
    const second=axios.get('http://swapi.dev/api/planets/?page=2');
    const third=axios.get('http://swapi.dev/api/planets/?page=3');
    const fourth=axios.get('http://swapi.dev/api/planets/?page=4');
    const fifth= axios.get('http://swapi.dev/api/planets/?page=5');
    const sixth=axios.get('http://swapi.dev/api/planets/?page=6');
    axios.all([first,second,third,fourth,fifth,sixth]).then(
      axios.spread(
        (...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          const responseFour=responses[3];
          const responsesFive=responses[4];
          const responsesSix=responses[5];
          setPlanets(planets.concat(
            responseOne.data.results,
            responseTwo.data.results,
            responesThree.data.results,
            responseFour.data.results,
            responsesFive.data.results,
            responsesSix.data.results
          ));
        })
    );},[]);

  //Get residents from all pages
  useEffect(() => {
    const first=axios.get('https://swapi.dev/api/people');
    const second=axios.get('http://swapi.dev/api/people/?page=2');
    const third=axios.get('http://swapi.dev/api/people/?page=3');
    const fourth=axios.get('http://swapi.dev/api/people/?page=4');
    const fifth= axios.get('http://swapi.dev/api/people/?page=5');
    const sixth=axios.get('http://swapi.dev/api/people/?page=6');
    const seventh=axios.get('http://swapi.dev/api/people/?page=7');
    const eigth=axios.get('http://swapi.dev/api/people/?page=8');
    const ninth=axios.get('http://swapi.dev/api/people/?page=9');
    axios.all([first,second,third,fourth,fifth,sixth,seventh,eigth,ninth]).then(
      axios.spread(
        (...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          const responseFour=responses[3];
          const responsesFive=responses[4];
          const responsesSix=responses[5];
          const responsesSeven=responses[6];
          const responsesEight=responses[7];
          const responsesNine=responses[8];
          setResidents(planets.concat(
            responseOne.data.results,
            responseTwo.data.results,
            responesThree.data.results,
            responseFour.data.results,
            responsesFive.data.results,
            responsesSix.data.results,
            responsesSeven.data.results,
            responsesEight.data.results,
            responsesNine.data.results
          ));
        })
    );},[]);

  return (
    <div className="center">
      <img src={'https://fontmeme.com/permalink/201103/0869a6e4e4dd64aa577d10f506519065.png'} alt=""/>
      <div>
        <h1>Planets</h1>
        <Planetsfilter planets={planets} residents={residents}/>
      </div>
    </div>
  );
};

export default App;
