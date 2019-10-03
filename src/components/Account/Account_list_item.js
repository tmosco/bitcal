import React from 'react';
import "./Account.css";



const AccountItem = ({item}) => {
    return(
        <div className="account-items">
        <input type = "checkbox" id = "chkPeace" value = "peace" />{item.title}
       
        <div>Amounts : {item.feed}</div>
        </div>
    )
}
    


export default AccountItem;



// <h3> Account Name: {item.title}</h3>