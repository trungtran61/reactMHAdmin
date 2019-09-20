import React, { useEffect, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../app/stores/rootStore";

const TippingExceptionsInput: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    tippingExceptionDates,
    isSubmitting,
    getTippingExceptions,    
    setTippingExceptionDates,
    setTippingExceptionFromDate,
    setTippingExceptionToDate
  } = rootStore.tippingExceptionsReportStore;

  // set default input dates
  useEffect(() => {
    let currentTime = new Date();
    currentTime.setDate(currentTime.getDate() - 30);
    setTippingExceptionDates(
      currentTime.toISOString().split("T")[0],
      new Date().toISOString().split("T")[0]
    );
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
            onChange={event =>
              (setTippingExceptionFromDate(event.target.value))
            }
          />
        </Form.Field>
        <Form.Field>
          <label>To Date</label>
          <input
            type="date"
            placeholder="To Date"
            value={tippingExceptionDates.toDate}
            onChange={event =>
              (setTippingExceptionToDate(event.target.value))
            }
          />
        </Form.Field>
        <Form.Field>
          <label>&nbsp;</label>
          <Button loading={isSubmitting} onClick={getTippingExceptions}>
            Submit
          </Button>
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(TippingExceptionsInput);
