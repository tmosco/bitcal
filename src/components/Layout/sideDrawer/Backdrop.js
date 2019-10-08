/* eslint-disable no-unused-vars */
import React from 'react';
/** @jsx jsx */ import { css, jsx } from "@emotion/core";

const Backdrop = props => (
    <div css={css`
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: rgba(0, 0,0,0.3);
    z-index: 100;`} onClick={props.click}></div>
);

export default Backdrop;
