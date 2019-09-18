import React, { useContext } from 'react'
import TippingExceptionsInput from './TippingExceptionsInput'
import { Container } from 'semantic-ui-react'
import NoRecords from "../../../features/reports/NoRecords";
import RecordsCount from "../../../features/reports/RecordsCount";
import TippingExceptionsReportStore from '../../../app/stores/tippingExceptionsReportStore'
import TippingExceptionsList from './TippingExceptionsList';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../../app/stores/rootStore';

const TippingExceptions = () => {
   const rootStore = useContext(RootStoreContext);  
   const {recordCount} = rootStore.tippingExceptionsReportStore; 

    return (
        <Container style={{ marginTop: "1em" }}>
        <TippingExceptionsInput />
        {recordCount > 0 && (
          <TippingExceptionsList />
        )}        
        {recordCount == 0 && <NoRecords />}
        {recordCount > 0 && <RecordsCount recordCount={recordCount} />}
      </Container>
    )
}

export default observer(TippingExceptions);
