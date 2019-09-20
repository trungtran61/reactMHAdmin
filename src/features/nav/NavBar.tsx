import React, { useContext } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import { AppConfiguration } from "read-appsettings-json";

const apiEndPoint = AppConfiguration.Setting().apiEndPoint;
const uHaulNetRootUrl = AppConfiguration.Setting().uHaulNetRootUrl;

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  return (
    <Container>
      <header>
        <div className="fixed">
          <div className="contain-to-grid">
            <nav className="top-bar" data-options="is_hover:false">
              <ul className="title-area">
                <li className="toggle-topbar menu-icon">
                  <a href="#">
                    <span></span>
                  </a>
                </li>
                <li className="name">
                  <h1>
                    <a href="/home/">uhaul.net</a>
                  </h1>
                </li>
                </ul>
                <section className="top-bar-section">
                  <ul className="left">
                    <li><a href={uHaulNetRootUrl + "/reports/reportfactory/"}  className="reports_tab" >Reports</a></li>
                    <li><a href={ uHaulNetRootUrl + "/equipment/search/default.aspx" } className="reports_tab">Equipment</a></li>
                    <li><a href={uHaulNetRootUrl + "/publications/search_advanced.aspx"} className="reports_tab">Publication</a></li>
                    <li><a href={uHaulNetRootUrl +
                          "/login_main.aspx?ReturnURL=https://videos.uhaul.com&relaystate=/"} className="reports_tab">Multimedia</a></li>
                    <li><a href={uHaulNetRootUrl + "/tools/"} className="reports_tab">Tools</a></li>
                    <li><a href={uHaulNetRootUrl + "/hr/"} className="reports_tab">HR</a></li>
                    <li><a href={uHaulNetRootUrl + "/links/"} className="reports_tab">Links</a></li>
                    <li><a href={uHaulNetRootUrl + "/AspNetForums/"} className="reports_tab">Boards</a></li>
                    <li><a href={uHaulNetRootUrl + "/Sustainability/"} className="reports_tab">Sustainability</a></li>
                    <li><a href={uHaulNetRootUrl + "/contact/crosscontact"} className="reports_tab">Cross Contact</a></li>
                  </ul>
                </section>              
            </nav>
          </div>
        </div>
        <div className="user">
          <div className="username">Trung Tran</div>
          <div className="user-functions">
            <ul>
              <li>
                <a href="/add_link.aspx" target="_blank">
                  Add to Links
                </a>
              </li>
              <li>
                <a href="javascript:window.print();">Print</a>
              </li>
              <li>
                <a href='/logout'>Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Menu style={{ marginTop: "1em" }}>
        <Menu.Item header>
          <a href="https://uhauld.net/home/">Moving Help Admin Home</a>
        </Menu.Item>
        <Menu.Item name="Orders">
          <a href="https://uhauld.net/home/">Orders</a>
        </Menu.Item>
        <Menu.Item name="Helpers">
          <a href="https://uhauld.net/home/">Helpers</a>
        </Menu.Item>
        <Menu.Item name="Reports" as={NavLink} to="/reports" />
        <Menu.Item name="Admin">
          <a href="https://uhauld.net/home/">Admin</a>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default NavBar;
