import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app/app";
import { Alert } from "antd";
import "antd/dist/antd.css";

const { ErrorBoundary } = Alert;

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
