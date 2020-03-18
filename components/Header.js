import React from "react";
import { Menu, Input, Dropdown, Image } from "semantic-ui-react";
import { Link } from "../routes";
import COLORS from "../colors";

export default () => {

  return (
    <Menu borderless style={{ backgroundColor: COLORS.menuBackground }}>
      <Link route="/">
        <a className="item" style={{ fontSize: "30px", color: COLORS.menuText }}>
          {/* <Image src={logo} size="small" alt="Logo"/> */}
          <strong>Ethegram</strong>
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item" style={{ color: COLORS.menuText, fontSize: "20px" }}>
            Home
          </a>
        </Link>
        <Dropdown
          simple
          className="item"
          text="Menu"
          openOnFocus
          button
          style={{
            backgroundColor: COLORS.menuBackground,
            color: COLORS.menuText,
            fontSize: "20px"
          }}
        >
          <Dropdown.Menu style={{ borderColor: COLORS.menuBackground, borderWidth: "2px", backgroundColor: COLORS.ddbackground }}>
            <Dropdown.Item className="item">
              <Link route="/profile">
                <a style={{ fontSize: "18px", color: COLORS.menuText }}>Profile</a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link route="/chat">
                <a style={{ fontSize: "18px", color: COLORS.menuText }}>Chat Room</a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link route="/users">
                <a style={{ fontSize: "18px", color: COLORS.menuText }}>Users</a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider style={{ borderColor: COLORS.menuText }} />
            <Dropdown.Item>
              <Link route="/about">
                <a style={{ fontSize: "18px", color: COLORS.menuText }}>About</a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};
