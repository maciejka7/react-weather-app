import axios from "axios";

const apiKey = "955da05298ad1b17137af5b81df18016";
const basicUri = `http://api.openweathermap.org/data/2.5weather?id=2172797&appid=${apiKey}`;

export default class Api {
  public static getTestData() {
    console.log(basicUri);
    axios.get(basicUri).then(data => console.log("api", data));
  }
}
