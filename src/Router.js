import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

function Router() {
  return (
    <BrowserRouter>
      <div className='nav-body'>
        <Link className='nav-link' to="/">Go to Home</Link>
        <Link className='nav-link' to="/About">Go to About</Link>
        <Link className='nav-link' to="/Contact">Go to Contact</Link>
        <Link className='nav-link' to="/Services">Go to Services</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Services/:id" component={ServiceDetails} />
    </BrowserRouter>
  );
}

export default Router;
