import React from "react";
import JSON from "./data.json";
import styled from "@emotion/styled";

const ComponentStyle = styled.div`
  .container {
    margin-right: auto; /* 1 */
    margin-left: auto; /* 1 */

    max-width: 960px; /* 2 */

    padding-right: 10px; /* 3 */
    padding-left: 10px; /* 3 */
    display: flex;
    flex-wrap: wrap;
  }

  .border-style {
    width: 110px;
    height: 70px;
    border: 1px solid goldenrod;
    border-radius: 10px;
    margin: 10px 5px;
    padding: 2px 2px;
    text-align: center;
  }
  .all-market {
    display: flex;
    flex-wrap: wrap;
  }

  .button-style {
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }
  .button-style:hover {
    color: #000000 !important;
    background: #f6b93b;
    border-color: #f6b93b !important;
    transition: all 0.4s ease 0s;
  }

  .whatever {
    background-color: #f9f9f9;
    display: inline-block;
    width: 110px;
    height: 70px;
    border: 1px solid goldenrod;
    border-radius: 10px;
    margin: 10px 5px;
    padding: 2px 2px;
    text-align: center;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    justify-content: center;
    flex: 1;
  }
  #checkboxes input[type="checkbox"] {
    display: none;
  }

  #checkboxes input[type="checkbox"]:checked + .whatever {
    background-color: goldenrod;
    color: black;
  }

  @media (max-width: 765px) {
    .container {
      margin: 2px 20px;
      width: auto;
    }
    .whatever {
      justify-content: center;
    }
  }
`;

export const Market = () => {
  const data = JSON.map(market => {
    return (
      <div id="checkboxes">
        <div>
          <input type="checkbox" name="rGroup" value="1" id={market.id} />
          <label class="whatever" for={market.id}>
            {market.name}
          </label>
        </div>
      </div>
    );
  });
  return (
    <ComponentStyle>
      <div className="all-market">
        <div className="container">
          {data}
          </div>
          </div>
          <div class="button_cont" align="center">
            <a
              class="button-style"
              href="add-website-here"
              target="_blank"
              rel="nofollow noopener"
            >
              Process Value
            </a>
          </div>
    </ComponentStyle>
  );
};


