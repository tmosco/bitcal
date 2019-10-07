import React from "react";
import "./Account.css";
import AccountItem from "./Account_list_item";

const AccountList = props => {
  const accounts = props.accounts.map(account => {
    return <AccountItem account={account} />;
  });

  return (
    <div className="container">
      <div className="buttons">
        <button> Fetch Accounts</button>
      </div>

      {accounts}
    </div>
  );
};

export default AccountList;
