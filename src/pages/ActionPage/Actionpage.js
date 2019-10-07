import React from "react";
import Slider from "./slider/slider";
import styled from '@emotion/styled'
import Spread from "./slider/spread";


const Styles = styled.div`
.slider{
    display:flex;
    flex-direction:row;
    @media (max-width: 768px){
      display:flex;
      flex-direction:column;
}
`;

const Actionpage = () => {
  return (
    <Styles>
      <div>
    
      <div className="slider">
      <Slider />
      <Spread/>
      </div>
      </div>
    </Styles>
  );
};

export default Actionpage;
