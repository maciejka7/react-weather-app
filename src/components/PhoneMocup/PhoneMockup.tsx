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

type Props = { children: any, isUiWhite: any } & typeof defaultProps;
const defaultProps = {};
// { children, isUiWhite }

const PhoneMockup = (props: Props) => {
  return (
    <StyledPhoneMockup>
      <StyledUiElements isUiWhite={props.isUiWhite}>
        <StyledTime isUiWhite={props.isUiWhite}>8:46</StyledTime>
        <FontAwesomeIcon size="xs" icon={faSignal} />
        <FontAwesomeIcon size="xs" icon={faWifi} />
        <FontAwesomeIcon size="xs" icon={faBatteryThreeQuarters} />
      </StyledUiElements>
      <StyledInnerSpace>{props.children}</StyledInnerSpace>
    </StyledPhoneMockup>
  );
};



export default PhoneMockup;
