import React, { useContext } from "react";
import { Table, Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../app/stores/rootStore";

const TippingExceptionsList: React.FC = ({  
}) => {  
  const rootStore = useContext(RootStoreContext);  
  const {tippingExceptions:tippingExceptions} = rootStore.tippingExceptionsReportStore;

  return (
    <Container>          
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Number</Table.HeaderCell>
            <Table.HeaderCell>Service Provider</Table.HeaderCell>
            <Table.HeaderCell>Job Rate</Table.HeaderCell>
            <Table.HeaderCell>Tip Amount</Table.HeaderCell>
            <Table.HeaderCell>Date Completed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tippingExceptions.map(tippingException => (
            <Table.Row key={tippingException.jobNumber}>
              <Table.Cell>{tippingException.jobNumber}</Table.Cell>
              <Table.Cell>{tippingException.serviceProvider}</Table.Cell>
              <Table.Cell>{tippingException.jobRate}</Table.Cell>
              <Table.Cell>{tippingException.tipAmount}</Table.Cell>
              <Table.Cell>{new Date(tippingException.completionDate).toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default observer(TippingExceptionsList);
