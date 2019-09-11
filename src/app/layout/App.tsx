import React, { Component } from 'react';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react'
import { ITippingException } from '../models/tippingexception';

interface IState {
  tippingExceptions: ITippingException[]
}

class App extends Component <{}, IState> {
  readonly state: IState = {
    tippingExceptions: [],
  }

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
*/
    axios.get('http://localhost:60127/api/reports/gettippingexceptions?fromDate=01/01/2019&toDate=12/31/2019',    
      { withCredentials: true })
      .then(response => {
        this.setState(
          {
            tippingExceptions: response.data
          })
      });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' circular />
          <Header.Content>Tipping Exceptions</Header.Content>
        </Header>
        <table>
          <tbody>
            <tr>
              <th>
                Job Number
          </th>
              <th>
                Service Provider
          </th>
              <th>
                Job Rate
          </th>
              <th>
                tip Amount
          </th>
              <th>
                Date Completed
          </th>
            </tr>
            {this.state.tippingExceptions.map((row: any) =>
              <tr key={row.jobNumber}>
                <td>{row.jobNumber}</td>
                <td>{row.serviceProvider}</td>
                <td>{row.jobRate}</td>
                <td>{row.tipAmount}</td>
                <td>{row.completionDate}</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
