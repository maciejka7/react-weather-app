import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import api from "../../utils/backend/api";
import Navigation from "../../components/Navigation/Navigation";
import HomeWeather from "../../components/HomeWeather/HomeWeather";
import Cities from "../../components/Cities/Cities";
import { Wrapper } from "./Home.styled";

const { useState, useEffect } = React;

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Home: React.FC = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await api.getTestData();

      setData(res);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            {loading ? <p> loading... </p> : <HomeWeather data={data} />}
          </Route>

          <Route path="/cities">
            <Cities />
          </Route>
        </Switch>
        <Navigation />
      </Wrapper>
    </Router>
  );
};

Home.defaultProps = defaultProps;

export default Home;
