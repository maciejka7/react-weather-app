import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Wrapper } from "./Navigation.styled.js";

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Navigation = (props: Props) => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cities">Cities</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
