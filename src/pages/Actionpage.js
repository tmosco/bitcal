import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";


const Sliderdiv = styled.div`
.slider{
    display:flex;
    flex-direction:row;
    @media (max-width: 768px){
      display:flex;
      flex-direction:column;
}
`;


const Styles = styled.div`
display:flex;
display-item:center;
color:#8888;
 margin:2rem 2rem;
 .value {
    color:#000000;
     text-align:center;
}
.range-bar{
    display:flex;
    }
.symbol{
    margin:2px 2px;
}
.box{
    border: 1px solid black;
    width: 260PX;
    height: 146PX;
     padding: 4px 2px;
    margin: 10px 20px;
}
.slider{
    width:100%;
    height:50px;
    border-raduis:5px;
    background:#efefef;
    outline:none;
    cursor:pointer;

    &::-webkit-slider-thumb{
    -webkit-appearance:none;
     appearance:none;
     color:red;
     cursor:pointer;
    outline:1px solid #D4AF37;;
    -webkit-transition:.1s;
       }
    .disabled{
    pointer-events: none;
      }
    
      .wall{
          color:red;
          background-color:red;
          margin: 19px 19px;
      }
`;
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #d4af37;
  border: 2px solid #d4af37;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #d4af37;
    color: white;
    .disabled {
      pointer-events: none;
    }
  }
`;
const Title = styled.h5`
  text-align: center;
`;


export const Actionpage = () => {
  return (
    <Sliderdiv>    
      <div className="slider">
      <Slider />
      <Spread/>
      </div>
    </Sliderdiv>
  );
};


const Slider = () => {
  const [value, setValue] = useState(4);

  const handleOnchange = e => setValue(e.target.value);

  const addHandler = () => {
    setValue(value + 1);
    if (value >= 10) {
      setValue((value = 10));
    }
  };

  const substractHandler = () => {
    setValue(value - 1);
    if (value <= 1) {
      setValue((value = 1));
    }
  };

  return (
    <Styles>
      <div className="box">
        <Title>Multipler</Title>
        <div className="range-bar">
          <span id="rangeValue"></span>
          <Button className="symbol" id="minus" onClick={substractHandler}>
            -
          </Button>
          <input
            type="range"
            name="multiplier"
            className="slider"
            id=""
            value={value}
            min={1}
            max={10}
            onChange={handleOnchange}
          />
          <Button className="disabled" id="plus" onClick={addHandler}>
            +
          </Button>
        </div>
        <div className="value">{value}</div>
      </div>
    </Styles>
  );
};

const Spread = () => {
  const [value, setValue] = useState(4);

  const handleOnchange = e => setValue(e.target.value);

  const addHandler = () => {
    setValue(value + 1);
    if (value >= 10) {
      setValue((value = 10));
    }
  };

  const substractHandler = () => {
    setValue(value - 1);
    if (value <= 1) {
      setValue((value = 1));
    }
  };

  return (
    <Styles>
      <div className="box">
        <Title>Spread</Title>
        <div className="range-bar">
          <span id="rangeValue"></span>
          <Button className="symbol" id="minus" onClick={substractHandler}>
            -
          </Button>
          <input
            type="range"
            name="multiplier"
            className="slider"
            id=""
            value={value}
            min={1}
            max={10}
            onChange={handleOnchange}
          />
          <Button className="disabled" id="plus" onClick={addHandler}>
            +
          </Button>
        </div>
        <div className="value">{value}</div>
      </div>
    </Styles>
  );
};

