import React, { useContext, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";

import NavBar from "../../features/nav/NavBar";
import HomePage from '../../features/home/HomePage';
import TippingExceptions from "../../features/reports/tipping-exceptions/TippingExceptions";
import Reports from "../../features/reports/Reports";

const App = () => {
  {   
    return (
      <Fragment>
        <NavBar />
        <Container style={{ marginTop: "1em" }}>
          <Route exact path='/:requestedFunction' component={HomePage} />
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/reports/tippingexceptions' component={TippingExceptions} />    
          <Route exact path='/reports' component={Reports} />           
        </Container>
      </Fragment>
    );
  }
};

export default observer(App);
