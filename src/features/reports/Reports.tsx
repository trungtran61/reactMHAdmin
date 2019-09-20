import React from "react";
import { Segment, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header as={Link} to="/reports/tippingexceptions">
                Tipping Exception Reports
              </List.Header>
              List of jobs with tips more than job rate.
            </List.Content>
          </List.Item>         
        </List>
      </Segment>
    </div>
  );
};

export default Reports;
