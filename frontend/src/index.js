import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "fontsource-roboto";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import ClippedDrawer from "./clipped";

ReactDOM.render(
  // strictモードを有効化(開発版のみ)
  <React.StrictMode>
    {/* テーマの有効化 */}
    <ThemeProvider theme={theme}>
      {/* スタイルのリセット */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
