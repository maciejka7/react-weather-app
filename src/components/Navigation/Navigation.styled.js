import styled from 'styled-components';

const wrapperH = 75;


export const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  color: black;
  height: ${wrapperH}px;
  border-top: 1px solid lightgray;

  ul {
    li {
      list-style: none;
    }
  }

`