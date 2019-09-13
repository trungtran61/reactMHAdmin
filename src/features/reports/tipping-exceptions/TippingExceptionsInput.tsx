import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const TippingExceptionsInput = () => {
    return (
        <Form>
             <Form.Group widths='equal'>
    <Form.Field>
      <label>From Date</label>
      <input type='date' placeholder='From Date' />
    </Form.Field>
    <Form.Field>
      <label>To Date</label>
      <input type='date' placeholder='To Date' />
    </Form.Field>
    <Form.Field>
      <label>&nbsp;</label>
    <Button type='submit'>Submit</Button>
   </Form.Field>
    </Form.Group>
  </Form>
    )
}

export default TippingExceptionsInput
