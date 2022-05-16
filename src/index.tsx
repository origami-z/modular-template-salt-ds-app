import { ToolkitProvider } from "@jpmorganchase/uitk-core";
import * as React from "react";
import * as ReactDOM from "react-dom";

// Import UITK CSS before any component is loaded to get correct CSS order
import "@jpmorganchase/uitk-theme/index.css";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ToolkitProvider>
      <App />
    </ToolkitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
