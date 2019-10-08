// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */ import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Hamburger = styled.div`
  .toggle-button_line {
    width: 30px;
    height: 2px;
    background: #000000;
    margin:10px 0px;
  }

`
const DrawerTogglerButton = props => (
    <button css={css`
    display: flex;
flex-direction: column;
justify-content: space-around;
height: 24px;   
width: 30px ;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
box-sizing: border-box;
&:focus {
    outline: none;
  }
    `} onClick={props.click }>
    
    <Hamburger>
    
    <div className="toggle-button_line"></div>
    <div className="toggle-button_line"></div>
    <div className="toggle-button_line"></div>
    
    </Hamburger>
    </button>
);

export default DrawerTogglerButton;


