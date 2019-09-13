import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import { ITippingException, ITippingExceptionDates } from '../models/tippingexception';
import NavBar from '../../features/nav/NavBar';
import TippingExceptions from '../../features/reports/tipping-exceptions/TippingExceptions';
import agent from '../api/agent';
/*
interface IState {
  tippingExceptions: ITippingException[]
}
*/
const App = () => {
  const [tippingExceptions, setTippingExceptions] = useState<ITippingException[]>([]);
  
  const handleTippingExceptionsRequest = (tippingExceptionDates: ITippingExceptionDates) =>
  {
    agent.TippingExceptions.list(tippingExceptionDates)
    .then(response => {
      setTippingExceptions(response)
    });
  }

/*
  useEffect(() => {
    agent.TippingExceptions.list({fromDate:'01/01/2019',toDate:'12/31/2019'})
    .then(response => {
      setTippingExceptions(response)
    });      
   
  },[]);
*/
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
        <TippingExceptions 
          tippingExceptions={tippingExceptions} 
          tippingExceptionsRequest={handleTippingExceptionsRequest}      
          />
        </Container>
      </Fragment>
     
    );
  }
}
export default App;
