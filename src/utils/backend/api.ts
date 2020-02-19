import axios from "axios";
import { weatherResponsByCityInterface, WholeData } from "./api.interface";

const apiKey = "955da05298ad1b17137af5b81df18016";
const defaultCity = "lon";
const testDataUrl = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
const basicUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

export default class Api {
  public static async getTestData() {
    try {
      let res: weatherResponsByCityInterface = await axios.get(testDataUrl);
      return res.data;
    } catch (error) {
      console.error("API ERROR: ", error);
    }
  }

  public static async getDataByCityName(cityName: string) {
    try {
      let res: weatherResponsByCityInterface = await axios.get(
        `${basicUrl}${cityName}`
      );
      return res.data;
    } catch (error) {
      console.error("API ERROR: getDataByCityName() -> ", error);
    }
  }
}
