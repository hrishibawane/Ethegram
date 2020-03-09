import React from "react";
import { Menu, Input, Dropdown, Icon } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu borderless style={{ backgroundColor: "#003152" }}>
      <Link route="/">
        <a className="item" style={{ fontSize: "30px", color: "#FFF" }}>
          <strong>
            <strong>Ethegram</strong>
          </strong>
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/users">
          <a className="item" style={{ color: "#fcfff9", fontSize: "20px" }}>
            Users
          </a>
        </Link>
        <Dropdown
          className="item"
          text="Menu"
          openOnFocus
          button
          style={{ color: "#fcfff9", fontSize: "20px" }}
        >
          <Dropdown.Menu style={{  borderColor:"#003152", borderWidth:"2px" }}>
            <Dropdown.Item className="item">
              <Link route="/profile">
                <a style={{ fontSize: "18px", color:"#003152" }}>
                  Profile
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link route="/chat">
                <a style={{ fontSize: "18px", color:"#003152" }}>
                  Chat Room
                </a>
              </Link>
            </Dropdown.Item>
            {/* <Dropdown.Item>
              <Link route="/posts/new">
                <a style={{ fontSize: "18px", color:"#FFF" }}>
                  Create New Post
                </a>
              </Link>
            </Dropdown.Item> */}
            <Dropdown.Divider style={{ borderColor:"#003152" }} />
            <Dropdown.Item>
            <Link route="/about">
                <a style={{ fontSize: "18px", color:"#003152" }}>
                  About
                </a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};
