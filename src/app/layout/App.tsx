import React, { useContext, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";

import NavBar from "../../features/nav/NavBar";
import HomePage from '../../features/home/HomePage';
import TippingExceptions from "../../features/reports/tipping-exceptions/TippingExceptions";

const App = () => {
  //const reportsStore = useContext(TippingExceptionsReportStore);  
  //const {recordCount} = reportsStore; 
 
  //if (loading) return <LoadingComponent content='Retrieving data...' />
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
        <Container style={{ marginTop: "1em" }}>
          <Route exact path='/' component={HomePage} />
          <Route path='/TippingExceptions' component={TippingExceptions} />
        </Container>
      </Fragment>
    );
  }
};

export default observer(App);
