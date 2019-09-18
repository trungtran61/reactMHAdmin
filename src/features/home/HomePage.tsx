import React, { useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';

const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.userStore;

    useEffect(() => {        
        login();
      }, []);
      
    return (
        <Container style={{ marginTop: "1em" }}>
            <h1>Home</h1>
        </Container>
    );
}

export default HomePage;
