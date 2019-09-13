import React from "react";
import { Table, Header, Container } from "semantic-ui-react";
import { ITippingException } from "../../app/models/tippingexception";

interface IProps {
  tippingExceptions: ITippingException[];
}

const TippingExceptions: React.FC<IProps> = ({ tippingExceptions }) => {
  return (
    <Container>
      <Header as="h4">
        <Header.Content>Tipping Exceptions</Header.Content>
      </Header>
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
            <Table.Row>
              <Table.Cell>{tippingException.jobNumber}</Table.Cell>
              <Table.Cell>{tippingException.serviceProvider}</Table.Cell>
              <Table.Cell>{tippingException.jobRate}</Table.Cell>
              <Table.Cell>{tippingException.tipAmount}</Table.Cell>
              <Table.Cell>{tippingException.completionDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TippingExceptions;
