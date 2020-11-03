/* eslint-disable react/prop-types */
import React from 'react';
import '../App.css';
const Planetsfilter=({ planets,residents }) => {
//Only show planets that have residents
  let planetsWithResidents=planets.filter(p => p.residents.length!==0);
  //Sort planets by diameter smallest to largest
  let sortedByDiameter=planetsWithResidents.sort((a,b) => parseInt(isNaN(a.diameter)?0:a.diameter)-parseInt(isNaN(b.diameter)?0:b.diameter));
  //Merge planets and residents together based on homeworld/url
  let mergedArray = sortedByDiameter.map(planet => ({ ...planet, residents:residents.filter(res => res.homeworld===planet.url).map(res => res.name) }));


  return(
    <div className="tableFixHead">
      <table>
        <thead>
          <tr>
            <th>Planet</th>
            <th>Diameter</th>
            <th>Residents</th>
          </tr>
        </thead>
        <tbody>
          {mergedArray.map(p => <tr key={p.name}><td >{p.name}</td><td>{p.diameter}</td><td>{p.residents.map(resident => <ul key={resident}>{resident}</ul>)}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};
export default Planetsfilter;

