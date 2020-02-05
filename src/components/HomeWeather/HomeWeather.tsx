import React from 'react'
import { Wrapper, Temperature } from './HomeWeather.styled';

type Props = {data: any} & typeof defaultProps;
const defaultProps = {};

const HomeWeather = (props: Props) => {

  const {sys, main, weather} = props.data

  const sunriseDate = new Date(sys.sunrise * 1000);
  const sunsetDate = new Date(sys.sunset * 1000);
  
  const sunrise = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`
  const sunset = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`
  console.log(props.data)


  return (
    <Wrapper> 
      <Temperature> {parseFloat(main.temp).toFixed(1)} </Temperature>
    </Wrapper>
  )
}

HomeWeather.defaultProps = defaultProps;

export default HomeWeather;


//       <p>City: {props.data.name}, {sys.country}</p>
//       <p>temp: {main.temp} </p>
//       <p>Feels like: {main.feels_like}</p>
//       <p>sunrise|sunset : {sunrise } | {sunset}</p>
 