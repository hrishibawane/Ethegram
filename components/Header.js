import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu borderless style={{backgroundColor:"#003152"}}>
      <Link route="/">
        <a className="item" style={{ fontSize: "30px", color:"#fcfff9" }}>
          <strong><strong>Ethegram</strong></strong>
        </a>
      </Link>
      
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Link route="/users">
          <a className="item" style={{ color:"#fcfff9"}}>Users</a>
        </Link>
        <Link route="/posts/new">
          <a className="item" style={{ color:"#fcfff9"}}>+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
