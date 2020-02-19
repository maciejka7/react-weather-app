import Api from "../utils/backend/api";
import { weatherResponsByCityInterface } from "../utils/backend/api.interface";

describe("Api dataTest", () => {
  let testData;
  beforeAll(async () => {
    testData = await Api.getTestData();
  });

  test("should api call returns data", async () => {
    expect(testData).toBeTruthy();
  });

  test("should return weather data", async () => {
    const { weather, main } = testData;

    expect(typeof weather[0].description).toBe("string");
    expect(typeof main.temp).toBe("number");
  });

  test("should ", async () => {});
});

describe("Api test query location", () => {
  let data;
  let city;
  beforeAll(async () => {
    city = "Warsaw";

    data = await Api.getDataByCityName(city);
  });

  it("should receive a Warsaw location data", async () => {
    expect(data.name).toBe(city);
  });
});
