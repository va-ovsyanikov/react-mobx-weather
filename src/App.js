/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Home } from './page/Home'
import { Page } from './page/Page.jsx'
import weatherObj from './store/store'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { observer } from 'mobx-react-lite'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = observer(() => {
  let sidenav = React.createRef()
  React.useEffect(() => {
    var sidenav = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(sidenav, {});
  })
  return (
    <Router>
      <div className="App">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <NavLink to="#" className="brand-logo">weatherman</NavLink>
        
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink
                to={{
                  pathname: "/page",
                  search: "?city=" + weatherObj.query,
                  state: { city: weatherObj.query }
                }}>Page</NavLink></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo" ref={sidenav}>
          <li><NavLink to="/" exact>Home</NavLink></li>

          <li><NavLink
            to={{
              pathname: "/page",
              search: "?city=" + weatherObj.query,
              state: { city: weatherObj.query }
            }}>Page</NavLink></li>
        </ul>
        <div className="weather z-depth-3">
          <Route path='/' component={Home} exact />
          <Route path='/page' component={Page} />
        </div>
      </div>
    </Router>
  );
})

export default App;
