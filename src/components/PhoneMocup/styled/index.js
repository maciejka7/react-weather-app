import styled from "styled-components";

const StyledPhoneMockup = styled.div`
  margin: 15px auto 0 auto;
  width: 378px;
  height: 815px;
  background-color: white;
  border-radius: 44px;
  border: 3px solid white;
  position: relative;
  overflow: hidden;
  z-index: 80;
  box-shadow: 0px 5px 10px lightgray, 0px -5px 10px lightgray;
  min-width: 378px;
  min-height: 815px;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3px;
    display: block;
    background-color: white;
    width: 209px;
    height: 30px;
    border-radius: 0 0 20px 20px;
    border: 3px solid white;
    border-top: 3px solid white;
    z-index: 200;
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: block;
    background-color: white;
    border-radius: 10px;
    width: 170px;
    height: 5px;
    z-index: 100;
    box-shadow: 0px 1px 5px lightgray;
  }
`;

const StyledInnerSpace = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  height: calc(100%);
`;

const StyledTime = styled.p`
  font-weight: bold;
  color: ${props => (props.isUiWhite ? "white" : "black")};
  font-size: 0.8rem;
  margin-right: auto;
  padding-left: 15px;
`;

const StyledUiElements = styled.div`
  position: absolute;
  left: 20px;
  top: 8px;
  width: 333px;
  z-index: 110;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  svg {
    color: ${props => (props.isUiWhite ? "white" : "black")};
    margin-left: 5px;
  }
`;

export { StyledPhoneMockup, StyledInnerSpace, StyledTime, StyledUiElements };
