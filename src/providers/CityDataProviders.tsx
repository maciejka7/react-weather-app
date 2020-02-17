import React from "react";

type Props = {
  render: (params: any) => {};
} & typeof defaultProps;
const defaultProps = {};

const input = (data: any) => (
  <>
    <label htmlFor="input">Label</label>{" "}
    <input
      type="text"
      onChange={() => {
        console.log(data);
      }}
      id="input"
    />{" "}
  </>
);

const passingProps = {
  input: input
};

const CityDataProviders = (props: Props) => {
  return <>{props.render(passingProps)}</>;
};

export default CityDataProviders;
