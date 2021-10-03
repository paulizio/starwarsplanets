export interface Planet {
  name: string;
  diameter: string;
  url: string;
  residents: string[];
}
export interface Resident {
  name: string;
  homeworld: string;
}

export interface SwapiResponse {
data:{
  results:Planet[] | Resident []
  next:NextUrl;
  }
}
export type NextUrl= string|null;