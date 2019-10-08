// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
/** @jsx jsx */ import { css, jsx } from "@emotion/core";


const AccountItem = ({ account, onClick }) => {
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
        onClick={onClick}
      >
        {account.title}
      </div>
    </div>
  );
};

export const Home = ({ history }) => {
  return (
    <div>
      <div className="buttons">
        <button> Fetch Accounts</button>
      </div>
      {accounts.map(account => {
        return (
          <AccountItem
            onClick={() => history.push(`/market/${account.slug}`)}
            account={account}
          />
        );
      })}
    </div>
  );
};
