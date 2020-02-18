export interface weatherResponsByCityInterface {
  cord: CordData;
  weather: [WheaterData];
}

interface WheaterData {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface CordData {
  lon: number;
  lat: number;
}

const obh = {
  coord: {
    lon: -2.13,
    lat: 11.45
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d"
    }
  ],
  base: "model",
  main: {
    temp: 38.89,
    feels_like: 34.17,
    temp_min: 38.89,
    temp_max: 38.89,
    pressure: 1008,
    humidity: 4,
    sea_level: 1008,
    grnd_level: 971
  },
  wind: {
    speed: 2.34,
    deg: 69
  },
  clouds: {
    all: 0
  },
  dt: 1582041349,
  sys: {
    country: "BF",
    sunrise: 1582007334,
    sunset: 1582049784
  },
  timezone: 0,
  id: 2355474,
  name: "Lon",
  cod: 200
};
