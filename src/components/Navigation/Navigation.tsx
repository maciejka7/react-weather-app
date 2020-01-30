import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Navigation.styled.js'

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Navigation = (props: Props) => {
  return (
    <Wrapper>
      <ul>
        <li>
          Home
        </li>
        <li>
          Cities
        </li>
      </ul>
    </Wrapper>
  )
}

Navigation.propTypes = {

}

export default Navigation
