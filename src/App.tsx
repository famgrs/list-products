import React from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Main from 'containers/Main';
import GlobalStyle from 'commons/styles/global'
import theme from "./theme";

const history = createBrowserHistory()

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Router history={history}>
          <Route path="/inicio" exact>
            <Main />
          </Route>
          <Redirect to="/inicio" />
        </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;