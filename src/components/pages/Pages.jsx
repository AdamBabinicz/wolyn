import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "../pages/About";
import { Services } from "../home/Services";
import { Portfolio } from "../pages/Portfolio";
import { Testimonials } from "../pages/Testimonials";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Footer } from "../common/Footer";
import Scroll from "./Scroll";
import ScrollToTop from "./ScrollToTop";

export const Pages = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Scroll />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rzeź" component={About} />
          <Route exact path="/zbrodniarze" component={Services} />
          <Route exact path="/bestialstwo" component={Portfolio} />
          <Route exact path="/świadkowie" component={Testimonials} />
          <Route exact path="/wiadomości" component={Blog} />
          <Route exact path="/kontakt" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

// https://dziennik-zlozony.pl/zestawienie-362-metod-tortur-stosowanych-przez-upa-na-polakach
