import React from "react";
import ReactDOM from "react-dom";
import {
  QueryCache,
  ReactQueryCacheProvider
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import App from "./App";

const queryCache = new QueryCache();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <App />
  <ReactQueryDevtools />
  </ReactQueryCacheProvider>
  , rootElement);
