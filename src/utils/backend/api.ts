import axios from "axios";

const apiKey = "955da05298ad1b17137af5b81df18016";
const defaultCity = "Warsaw"
const basicUri = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;

export default class Api {
  public static async getTestData() {

    try {
      let res = await axios.get(basicUri)
      return res.data;
    } catch(error) {
      console.error('API ERROR: ', error)
    }

  }
}
