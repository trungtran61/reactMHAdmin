import React, { useEffect, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import MHAdminReportsStore from "../../../app/stores/MHAdminReportsStore";

const TippingExceptionsInput: React.FC = () => {
  const reportsStore = useContext(MHAdminReportsStore);
  const {tippingExceptionDates, getTippingExceptions, isSubmitting} = reportsStore;

  // set default input dates
  useEffect(() => {
    let currentTime = new Date();
    currentTime.setDate(currentTime.getDate() - 30);
    tippingExceptionDates.fromDate = currentTime.toISOString().split("T")[0];
    tippingExceptionDates.toDate = new Date().toISOString().split("T")[0];
  }, []);

  return (
    <Form>
      <h4>Tipping Exceptions</h4>
      <Form.Group widths="equal">
        <Form.Field>
          <label>From Date</label>
          <input
            type="date"
            placeholder="From Date"
            value={tippingExceptionDates.fromDate}
            onChange={event => tippingExceptionDates.fromDate = event.target.value}
          />
        </Form.Field>
        <Form.Field>
          <label>To Date</label>
          <input
            type="date"
            placeholder="To Date"
            value={tippingExceptionDates.toDate}
            onChange={event => tippingExceptionDates.toDate = event.target.value}
          />
        </Form.Field>
        <Form.Field>
          <label>&nbsp;</label>
          <Button loading={isSubmitting} onClick={getTippingExceptions}>Submit</Button>
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(TippingExceptionsInput);