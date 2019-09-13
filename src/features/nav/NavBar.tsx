import React from "react";
import { Menu, Container } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item header>
            <img src="assets/logo.svg" alt="logo" />
            uhaul.net
          </Menu.Item>
          <Menu.Item name="Reports" />
          <Menu.Item name="Equipment" />
          <Menu.Item name="Publications" />
          <Menu.Item name="Multimedia" />
          <Menu.Item name="Tools" />
          <Menu.Item name="HR" />
          <Menu.Item name="Links" />
          <Menu.Item name="Boards" />
          <Menu.Item name="Sustainability" />
          <Menu.Item name="Cross Contact" />          
        </Container>
      </Menu>

      <Menu>
        <Container>         
          <Menu.Item name="Home" />
          <Menu.Item name="Orders" />
          <Menu.Item name="Helpers" />
          <Menu.Item name="Reports" />
          <Menu.Item name="Admin" />
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
