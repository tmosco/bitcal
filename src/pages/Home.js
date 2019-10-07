import React, { useState } from "react";
/** @jsx jsx */ import { css, jsx } from "@emotion/core";
import JSON from "../pages/file.json";

const AccountItem = ({ account }) => {
  return (
    <div className="container">
      <div
        css={css`
          font-family: Arial, Helvetica, sans-serif;
          border: 1px solid black;
          border-spacing: 20px;
          padding: 20px;
          margin-top: 25px;
        `}
      >
        {account.title}
      </div>
    </div>
  );
  }

  export const Home = () => {
    const [data] = useState(JSON);
    return (
      <div>
        <div className="buttons">
          <button> Fetch Accounts</button>
        </div>
        {data.map(account => {
          return <AccountItem account={account} />;
        })}
      </div>
    );
  };


