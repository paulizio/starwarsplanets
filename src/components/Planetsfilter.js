/* eslint-disable react/prop-types */
import React from 'react'
import '../App.css'
const Planetsfilter = ({ planets, residents }) => {
  /*
  Only show planets that have residents,
  sort planets by diameter smallest to largest
  and merge planets and residents based on homeworld/url
  */
  const planetsWithResidents = planets
    .filter(p => p.residents.length !== 0)
    .sort((a, b) => parseInt(isNaN(a.diameter) ? 0 : a.diameter) - parseInt(isNaN(b.diameter) ? 0 : b.diameter))
    .map(planet => ({ ...planet, residents: residents.filter(res => res.homeworld === planet.url).map(res => res.name) }))
  return (
    <div className='tableFixHead'>
      <table>
        <thead>
          <tr>
            <th>Planet</th>
            <th>Diameter</th>
            <th>Residents</th>
          </tr>
        </thead>
        <tbody>
          {
          planetsWithResidents
            .map((p, i) =>
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.diameter}</td>
                <td>{p.residents.map((resident, i) =>
                  <ul key={i}>{resident}</ul>
                )}
                </td>
              </tr>
            )
}
        </tbody>
      </table>
    </div>
  )
}
export default Planetsfilter
