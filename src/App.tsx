import React, { useEffect, useState } from 'react'
import Planetsfilter from './components/Planetsfilter'
import './App.css'
import { Planet, Resident } from './types'
import { fetchPlanetsData, fetchResidentsData } from './services'
const App = (): JSX.Element => {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [residents, setResidents] = useState<Resident[]>([])
  // Get planets and residents from all pages
  useEffect(() => {
    void fetchPlanetsData('https://swapi.dev/api/planets', setPlanets)
    void fetchResidentsData('https://swapi.dev/api/people', setResidents)
  }, [])
  return (
    <div className='center'>
      <img src='https://fontmeme.com/permalink/201103/0869a6e4e4dd64aa577d10f506519065.png' alt='' />
      <div>
        <h1>Planets</h1>
        <Planetsfilter planets={planets} residents={residents} />
      </div>
    </div>
  )
}

export default App
