import * as React from "react";
import PropTypes from "prop-types";
import {
  StyledPhoneMockup,
  StyledInnerSpace,
  StyledTime,
  StyledUiElements
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faWifi,
  faBatteryThreeQuarters
} from "@fortawesome/free-solid-svg-icons";

const PhoneMockup = ({ children, isUiWhite }) => {
  return (
    <StyledPhoneMockup>
      <StyledUiElements isUiWhite={isUiWhite}>
        <StyledTime isUiWhite={isUiWhite}>8:46</StyledTime>
        <FontAwesomeIcon size="xs" icon={faSignal} />
        <FontAwesomeIcon size="xs" icon={faWifi} />
        <FontAwesomeIcon size="xs" icon={faBatteryThreeQuarters} />
      </StyledUiElements>
      <StyledInnerSpace>{children}</StyledInnerSpace>
    </StyledPhoneMockup>
  );
};

PhoneMockup.propTypes = {
  isUiWhite: PropTypes.bool.isRequired
};

export default PhoneMockup;
