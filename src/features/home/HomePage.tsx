import React, { useContext, useEffect } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { NavLink, RouteComponentProps } from 'react-router-dom';

interface HomeParams {
  requestedFunction: string
}

const HomePage: React.FC<RouteComponentProps<HomeParams>> = ({match, history}) => {
    const rootStore = useContext(RootStoreContext);
    const { login, user } = rootStore.userStore;  
    const requestedFunction = match.params.requestedFunction; 
    const token = window.localStorage.getItem('MHAdminToolJWT'); 

    useEffect(() => {   
        login().then ((result) => {
          if (result)
          {
            if (result.request.status !== 200)
              window.location.replace('https://uhauld.net');       
          }
          else
          {
            if (token && requestedFunction)  
            {
              const routeUrl = '/' + requestedFunction.replace('|','/');            
              history.push(routeUrl);
            }
          }                    
        });
      }, []);
   
    return (       
         <Container style={{ marginTop: "1em" }}>
            <h1>Home</h1>        
        <Menu>
        <Container>
          <Menu.Item name="Tipping Exceptions" as={NavLink} to="/tippingexceptions" />
          </Container>
          </Menu>
          </Container>      
    );
  }

export default HomePage;