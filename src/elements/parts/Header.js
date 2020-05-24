import React from "react";

import Button from "elements/Button";
import Icon from "./IconText";
export default function Header(props) {
  const getNavItemActive = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Icon />
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavItemActive("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavItemActive("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavItemActive("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavItemActive("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
