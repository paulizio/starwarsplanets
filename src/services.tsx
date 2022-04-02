import { NextUrl, Planet, PlanetsResponse, ResidentsResponse, Resident } from './types'
import axios from 'axios'

export const fetchResidentsData = async (url: string, setData: (data: any) => void): Promise<void> => {
  let data: Resident[] = []
  let nextResponse: ResidentsResponse
  const response: ResidentsResponse = await axios.get(url)
  data = response.data.results
  let nextUrl: NextUrl = response.data.next
  while (nextUrl !== null) {
    nextResponse = await axios.get(nextUrl)
    data = [...data, ...nextResponse.data.results]
    nextUrl = nextResponse.data.next
  }
  setData(data)
}

export const fetchPlanetsData = async (url: string, setData: (data: any) => void): Promise<void> => {
  let data: Planet[] = []
  let nextResponse: PlanetsResponse
  const response: PlanetsResponse = await axios.get(url)
  data = response.data.results
  let nextUrl: NextUrl = response.data.next
  while (nextUrl !== null) {
    nextResponse = await axios.get(nextUrl)
    data = [...data, ...nextResponse.data.results]
    nextUrl = nextResponse.data.next
  }
  setData(data)
}
