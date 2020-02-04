import React from 'react'
import PropTypes from 'prop-types'


type Props = {} & typeof defaultProps;
const defaultProps = {};


const Cities: React.FC = (props: Props) => {
  return (
    <div>
      Cities list:

    city
    city
    city
    </div>
  )
}

Cities.defaultProps = defaultProps;

export default Cities;