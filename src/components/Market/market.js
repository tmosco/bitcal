import React from "react";
import "./market.css";
import JSON from "../../data.json";

class Market extends React.Component {

  render() {
    const data = JSON.map(market => {
      return (
        <div id="checkboxes">
          <div>
            <input type="checkbox" name="rGroup" value="1" id={market.id} />
            <label className="whatever" for={market.id}>
              {market.name}
            </label>
          </div>
        </div>
      );
    });

    console.log(JSON);
    return (
      <div>
        <div className="container">{data}</div>
        <div class="button_cont" align="center">
          <a
            className="button-style"
            href="add-website-here"
            target="_blank"
            rel="nofollow noopener"
          >
            Process Value
          </a>
        </div>
      </div>
    );
  }
}

export default Market;
