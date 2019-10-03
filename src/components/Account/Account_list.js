import React from "react";
import AccountItem from "./Account_list_item";
import "./Account.css";

const AccountList = (props) => {
    
const accounts = props.accounts.map((account)=>{
    return(

       <AccountItem key={account.id} item={account}/>
    )
});

  return (
    <div className="container">
      <div className="buttons">
        <button> Fetch Accounts</button>
        </div>
        <form action="/account">
        <input type="text" value="Search" />
        <div className="accounts_list">{accounts}</div>
        <button > Edit Info</button>
        </form>

    </div>
  );
};

export default AccountList;
