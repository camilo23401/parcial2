import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomesList } from "../pages/homes-list/HomesList";
import { RoomsList } from "../pages/rooms-list/RoomsList";
import { Navbar } from "../components/nav/Navbar";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import messages from "../i18n/messages";

export const AppRouter = () => {
  const [language, setLanguage] = useState(LOCALES.SPANISH);

  console.log(language);
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Navbar setLanguage={setLanguage}></Navbar>
        <Switch>
          <Route exact path="/">
            <HomesList />
          </Route>
          <Route exact path="/homes">
            <HomesList />
          </Route>
          <Route exact path="/homes/:id">
            <RoomsList />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};
