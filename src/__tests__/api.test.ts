import Api from "../utils/backend/api";

let testData;

beforeAll(async () => {
  testData = await Api.getTestData();
  console.log(testData);
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
