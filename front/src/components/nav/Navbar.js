import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";
export const Navbar = ({ setLanguage }) => {
  const handleInputChange = useCallback(event => {
    setLanguage(event.target.accessKey)
  }, [setLanguage])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="smart" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/homes">
                <FormattedMessage id="spaces" />
              </Link>
            </div>
            <div className="navbar-nav-controls">
            <img  src="/usa-13-784588.png" onClick={handleInputChange} accessKey={LOCALES.ENGLISH} height="30px" width = "30px"></img>
            <img  src="/flag-round-250.png" onClick={handleInputChange} accessKey={LOCALES.SPANISH} height="30px" width = "30px"></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
