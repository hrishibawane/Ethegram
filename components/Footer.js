import React from "react";
import { Menu, Input, Dropdown, Image, Grid, Icon } from "semantic-ui-react";
import { Link } from "../routes";
import COLORS from "../colors";

export default () => {
  return (
    <div
      style={{
        padding: "20px",
        color: COLORS.menuText,
        backgroundColor: COLORS.menuBackground,
        position:"relative",
        bottom: "0",
        width: "100%"
      }}
    >
      <Grid>
        <Grid.Column width={8} style={{ borderRight: "1px solid", borderColor:COLORS.menuText }}>
        <h2>Ethegram</h2>
        <p>A Decentralized Social Network with features such as:</p>
        <ul>
          <li>Rewards for your own content</li>
          <li>Simple Tokenomics</li>
          <li>Ethereum Blockchain based storage</li>
          <li>IPFS for large file storage</li>
        </ul>
        </Grid.Column>
        <Grid.Column width={8}>
          <h3>Authors:</h3>
          <ul>
            <li><a href="https://github.com/hrishibawane" target="_blank" style={{color:COLORS.menuText}}>Hrishikesh Bawane</a></li>
            <li><a href="https://github.com/Tanyashinde" target="_blank" style={{color:COLORS.menuText}}>Tanuja Shinde</a></li>
            <li><a href="https://github.com/budukhyash" target="_blank" style={{color:COLORS.menuText}}>Yash Budukh</a></li>
            <li><a href="https://github.com/hrishibawane" target="_blank" style={{color:COLORS.menuText}}>Abhishek Kadam</a></li>
          </ul>
        </Grid.Column>
      </Grid>
      <br />
      <hr style={{borderColor:COLORS.menuText}}/>
      <div style={{color:COLORS.menuText}}>
        <center>
          <p>2020 Copyright: Hrishikesh Vinayak Bawane</p>
        </center>
      </div>
    </div>
  );
};
