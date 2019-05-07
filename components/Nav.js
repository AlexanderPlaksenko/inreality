import styled from "styled-components"
import nav from "/static/data/Nav.json"

function getMenuItems() {
    return [
        nav
    ]
}

const MenuItem = styled.a`
  color: #ffffff;
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 14px;
  margin: 0 16px;
`;

const NavItem = styled.nav`
  header {
    margin-left: auto;
    margin-right: 103px;
    margin-top: -1px;
  }
`;

const menuItems = getMenuItems().map.call(nav, function(item) {
    return <MenuItem className="link dim" key={item.id} href={item.id}>{item.title}</MenuItem>
});

const Nav = () => (
    <NavItem>
        {menuItems}
    </NavItem>
);

export default Nav