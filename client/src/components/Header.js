import React from "react";

const Header = (props) => {
  return (
  <header id="main-header">
    <div id="logo">
      <a href="/"> {`🎅🏻 ${props.tittel} 🎅🏻`}</a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">Alle Ønsker</a>
        </li>
        <li>
          <a href="/new-post">Legg Inn Ønske</a>
        </li>
        <li>
          <a href="/brukere">Brukere</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
