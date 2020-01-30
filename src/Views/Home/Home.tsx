import * as React from "react";
import api from "../../utils/backend/api";

type Props = {} & typeof defaultProps;
const defaultProps = {};

const Home = (props: Props) => {
  React.useEffect(() => {
    api.getTestData();
  }, []);

  return (
    <section>
      <p>City:</p>
      <p>temp:</p>
    </section>
  );
};

Home.defaultProps = defaultProps;

export default Home;
