import React, { useContext, useEffect } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.userStore;

    useEffect(() => {        
        login();
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
