import styled from "styled-components";

const DEG = 45+270;

export const colors = {
  violet: ['#c94b4b','#4b134f'],
  blue: ['#2c3e50', '#3498db'],
  orange: ['#F0CB35','#C02425'],
  green: ['#5A3F37','#2C7744']
}



export const gradients = {
  violet: `linear-gradient(${DEG}deg, ${colors.violet[0]}, ${colors.violet[1]});`,
  blue: `linear-gradient(${DEG}deg, ${colors.blue[0]}, ${colors.blue[1]});`,
  orange: `linear-gradient(${DEG}deg, ${colors.orange[0]}, ${colors.orange[1]});`,
  green: `linear-gradient(${DEG}deg, ${colors.green[0]}, ${colors.green[1]});`,
}

export const Wrapper = styled.section`

  background: ${gradients.violet};
  height: 100%;
  position: relative;
  top: -15px;
  padding: 50px 25px 0 25px;
  color: white; 
  font-weight: bold;
  
`;

export const Temperature = styled.p`

  font-size: 5rem;
  color: white;
  text-align: left;
  margin-top: 15px;
  position: relative;

  &::after{
    display: block;
    content: 'O';
    font-size: 2rem;
    position: absolute;
    top: 15px;
    left: 125px;
  }

`