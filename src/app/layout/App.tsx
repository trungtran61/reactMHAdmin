import React, { useContext, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import TippingExceptions from "../../features/reports/tipping-exceptions/TippingExceptions";
import TippingExceptionsInput from "../../features/reports/tipping-exceptions/TippingExceptionsInput";
import NoRecords from "../../features/reports/NoRecords";
import RecordsCount from "../../features/reports/RecordsCount";
import MHAdminReportsStore from "../stores/MHAdminReportsStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const reportsStore = useContext(MHAdminReportsStore);  
  const {recordCount} = reportsStore; 
 
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
          <TippingExceptionsInput />
          {recordCount > 0 && (
            <TippingExceptions />
          )}
          {recordCount == 0 && <NoRecords />}
          {recordCount > 0 && <RecordsCount recordCount={recordCount} />}
        </Container>
      </Fragment>
    );
  }
};

export default observer(App);
