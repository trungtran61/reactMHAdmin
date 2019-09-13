import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Header, Icon, Container } from 'semantic-ui-react'
import { ITippingException } from '../models/tippingexception';
import NavBar from '../../features/nav/NavBar';
import TippingExceptions from '../../features/reports/TippingExceptions';
/*
interface IState {
  tippingExceptions: ITippingException[]
}
*/
const App = () => {
  const [tippingExceptions, setTippingExceptions] = useState<ITippingException[]>([])

  useEffect(() => {
    axios.get<ITippingException[]>('http://localhost:60127/api/reports/gettippingexceptions?fromDate=01/01/2019&toDate=12/31/2019',
      { withCredentials: true })
      .then(response => {
        setTippingExceptions(response.data)
      });
  },[]);
  {
    /*
      componentDidMount() {  
    /*
        axios.post('http://localhost:60127/api/authenticate',    
        { withCredentials: true })
        .then(response => {
          this.setState(
            {
              reportData: response.data
            })
        });
    
     
      }
    */
    return (
      <Fragment>
        <NavBar />
        <Container style={{marginTop: '1em'}}>      
        <TippingExceptions tippingExceptions={tippingExceptions} />
        </Container>
      </Fragment>
     
    );
  }
}
export default App;
