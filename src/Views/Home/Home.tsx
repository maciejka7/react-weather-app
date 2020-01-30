import * as React from "react";
import api from "../../utils/backend/api";
import Navigation from '../../components/Navigation/Navigation'
import HomeWeather from '../../components/HomeWeather/HomeWeather'
import  { Wrapper } from './Home.styled';

const { useState, useEffect } = React;

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Home: React.FC = (props: Props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    async function fetchData () {
      const res = await api.getTestData();
      
      setData(res)
      setLoading(false);
    };
    fetchData();
  }, []
  );


  return (
    <Wrapper>

      {loading ? <p> loading... </p> : <HomeWeather data={data} />}

      <Navigation />
    </Wrapper>
  );
};

Home.defaultProps = defaultProps;

export default Home;
