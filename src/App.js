import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Planetsfilter from './components/Planetsfilter'
import './App.css'

const App = () => {
  const [planets, setPlanets] = useState([])
  const [residents, setResidents] = useState([])

  // Get planets and residents from all pages
  useEffect(() => {
    const fetchStarWarsData = async (url, setData) => {
      let data = []
      let nextResponse
      const response = await axios.get(url)
      setData(prevData => [...prevData, ...response.data.results])
      let nextUrl = response.data.next
      while (nextUrl) {
        nextResponse = await axios.get(nextUrl)
        data = data.concat(nextResponse.data.results)
        nextUrl = nextResponse.data.next
      }
      setData(prevData => [...prevData, ...data])
    }
    fetchStarWarsData('https://swapi.dev/api/planets', setPlanets)
    fetchStarWarsData('https://swapi.dev/api/people', setResidents)
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
