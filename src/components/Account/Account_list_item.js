import React from "react";
import "./Account.css";


class AccountItem extends React.Component {




  render() {
    const { account } = this.props;

    return (
      <div className="container">
        <div className="account-items" onClick>
          {account.title}
        </div>

      </div>
    );
  }
}

export default AccountItem;

// <h3> Account Name: {item.title}</h3>
