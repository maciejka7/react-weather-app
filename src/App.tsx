import * as React from "react";
import "./styles.css";

import Root from "./components/Root";
import PhoneMockup from "./components/PhoneMocup/PhoneMockup";

// api https://openweathermap.org/current

export default function App() {
  return (
    <div className="App">
      <PhoneMockup isUiWhite={false}>
        <Root />
      </PhoneMockup>
      <div>
        <img
          src="https://cdn.dribbble.com/users/3376546/screenshots/6367287/phone_template__________2__2x.png"
          alt="https://dribbble.com/shots/6367287-Weather-App-concept/attachments"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
