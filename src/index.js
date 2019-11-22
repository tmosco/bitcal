import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

  rootElement
);
