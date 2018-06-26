import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";

import {client} from "./apollo";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./routes";

ReactDOM.render(
  <ApolloProvider client={client}>
  <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
