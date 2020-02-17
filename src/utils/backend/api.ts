import axios from "axios";

const apiKey = "955da05298ad1b17137af5b81df18016";
const defaultCity = "lon";
const basicUri = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;

const findUrs = `https://api.openweathermap.org/find?q=lon`;
// find?callback=jQuery191045375972505592577_1581954848939&q=lon&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&_=1581954848940
export default class Api {
  public static async getTestData() {
    try {
      let res = await axios.get(basicUri);
      return res.data;
    } catch (error) {
      console.error("API ERROR: ", error);
    }
  }
}
