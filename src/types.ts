export interface Planet {
  name: string
  diameter: string
  url: string
  residents: string[]
}
export interface Resident {
  name: string
  homeworld: string
}

export interface ResidentsResponse {
  data: {
    results: Resident[]
    next: NextUrl
  }
}
export interface PlanetsResponse {
  data: {
    results: Planet[]
    next: NextUrl
  }
}
export type NextUrl = string | null
