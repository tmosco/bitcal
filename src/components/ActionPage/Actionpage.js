import React from "react";
// import './ActionPage.css';
import Slider from "./slider/slider";

import styled from "styled-components";
import Spread from "./slider/spread";
import Numbers from "../Account/Numbers";

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
      <Numbers/>
      <div className="slider">
      <Slider />
      <Spread/>
      </div>
      </div>
    </Styles>
  );
};

export default Actionpage;
