import React, { useContext } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout} = rootStore.userStore;

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item
            header
            style={{ whiteSpace: "nowrap", width: 140, height: 40 }}
          >
            <a href="https://uhauld.net/home/">
              <img src="assets/logo.svg" alt="logo" />
              uhaul.net
            </a>
          </Menu.Item>
          <Menu.Item name="Reports">
            <a href="https://uhauld.net/home/">Reports</a>
          </Menu.Item>
          <Menu.Item name="Equipment">
            <a href="https://uhauld.net/home/">Equipment</a>
          </Menu.Item>
          <Menu.Item name="Publications">
            <a href="https://uhauld.net/home/">Publications</a>
          </Menu.Item>
          <Menu.Item name="Multimedia">
            <a href="https://uhauld.net/home/">Multimedia</a>
          </Menu.Item>
          <Menu.Item name="Tools">
            <a href="https://uhauld.net/home/">Tools</a>
          </Menu.Item>
          <Menu.Item name="HR">
            <a href="https://uhauld.net/home/">HR</a>
          </Menu.Item>
          <Menu.Item name="Links">
            <a href="https://uhauld.net/home/">Links</a>
          </Menu.Item>
          <Menu.Item name="Boards">
            <a href="https://uhauld.net/home/">Boards</a>
          </Menu.Item>
          <Menu.Item name="Sustainability">
            <a href="https://uhauld.net/home/">Sustainability</a>
          </Menu.Item>
          <Menu.Item name="Cross Contact">
            <a href="https://uhauld.net/home/">Cross Contact</a>
          </Menu.Item>
        </Container>
      </Menu>

      <Menu>
        <Container>
          <Menu.Item name="Home" as={NavLink} to="/${reportName}" />
          <Menu.Item name="Orders">
            <a href="https://uhauld.net/home/">Orders</a>
          </Menu.Item>
          <Menu.Item name="Helpers">
            <a href="https://uhauld.net/home/">Helpers</a>
          </Menu.Item>
          <Menu.Item name="Reports">
            <a href="https://uhauld.net/home/">Reports</a>
          </Menu.Item>
          <Menu.Item name="Admin">
            <a href="https://uhauld.net/home/">Admin</a>
          </Menu.Item>
         {user && (
             <Menu.Item position='right'>             
              <Dropdown >

              </Dropdown>
           </Menu.Item>
         )}
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
