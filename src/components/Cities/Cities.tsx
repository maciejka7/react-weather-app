import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper } from "./Cities.styled";

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Cities: React.FC = (props: Props) => {
  return <StyledWrapper>Cities list: city city city</StyledWrapper>;
};

Cities.defaultProps = defaultProps;

export default Cities;
