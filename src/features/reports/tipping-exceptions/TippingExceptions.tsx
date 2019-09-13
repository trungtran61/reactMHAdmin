import React, { useState } from "react";
import { Table, Header, Container, Form, Button } from "semantic-ui-react";
import { ITippingException, ITippingExceptionDates } from "../../../app/models/tippingexception";

interface IProps {
  tippingExceptions: ITippingException[];  
  tippingExceptionsRequest: (tippingExceptionDates: ITippingExceptionDates) => void;
}

const TippingExceptions: React.FC<IProps> = ({
  tippingExceptions,
  tippingExceptionsRequest
}) => {
  
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  
  const handleSubmit = () => {
    let inputs = {
      ...tippingExceptionsRequest,
      fromDate : fromDate,
      toDate: toDate
    }
    tippingExceptionsRequest(inputs);
  }

  return (
    <Container>
      <Header as="h4">
        <Header.Content>Tipping Exceptions</Header.Content>
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label>From Date</label>
            <input type="date" placeholder="From Date" onChange={event => setFromDate(event.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>To Date</label>
            <input type="date" placeholder="To Date" onChange={event => setToDate(event.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>&nbsp;</label>
            <Button onClick={handleSubmit}
              >Submit</Button>
          </Form.Field>
        </Form.Group>
      </Form>
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
              <Table.Cell>{new Date(tippingException.completionDate).toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TippingExceptions;
