import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navigation } from "components";
import theme from "utils/theme";
import GlobalStyle from "./index.css.js";
import { Wrapper } from "components/Wrapper/index.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Navigation
            items={[
              { content: t("Homepage"), to: "/" },
              { content: t("Budget"), to: "/budget" },
            ]}
            RightElement={
              <div>
                <button onClick={() => i18n.changeLanguage("pl")}>Pl</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
              </div>
            }
          />
          <Switch>
            <Route exact path="/">
              {t("Homepage")}
            </Route>
            <Route path="/budget">{t("Budget")}</Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

const RootApp = () => (
  <React.Suspense fallback="loading">
    <App />
  </React.Suspense>
);

export default RootApp;
