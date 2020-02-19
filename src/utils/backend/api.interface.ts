export interface weatherResponsByCityInterface {
  data: WholeData;
}

export interface WholeData {
  cord: CordData;
  weather: [WheaterData];
  base: string;
  main: MainData;
  wind: WindData;
  sys: SysData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CordData {
  lon: number;
  lat: number;
}

export interface WheaterData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface WindData {
  speed: number;
  deg: number;
}

export interface SysData {
  country: string;
  sunrise: number;
  sunset: number;
}
