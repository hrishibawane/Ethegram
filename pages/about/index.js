import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Image,
  Message,
  Menu,
  Dropdown,
  Icon,
  Grid,
  Container,
  List,
} from "semantic-ui-react";
import Head from "next/head";
import Header from "../../components/Header";
import { Link } from "../../routes";
import COLORS from "../../colors";

class About extends Component {
  render() {
    return (
      <div style={{ margin: "0px", backgroundColor: COLORS.menuBackground }}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <div
          style={{
            padding: "30px",
            paddingTop: "35px",
            backgroundColor: COLORS.menuBackground,
            position: "absolute",
            left: "10px",
          }}
        >
          <Link route="/">
            <a
              className="item"
              style={{ color: COLORS.menuText, fontSize: "20px" }}
            >
              <Icon name="home" />
            </a>
          </Link>
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: COLORS.menuBackground,
            position: "absolute",
            right: "10px",
          }}
        >
          <Dropdown
            simple
            className="icon"
            icon="align justify"
            openOnFocus
            button
            style={{
              backgroundColor: COLORS.menuBackground,
              color: COLORS.menuText,
              fontSize: "20px",
            }}
          >
            <Dropdown.Menu
              style={{
                width: "200px",
                borderColor: COLORS.menuBackground,
                borderWidth: "2px",
                backgroundColor: COLORS.ddbackground,
              }}
            >
              <Dropdown.Item className="item">
                <Link route="/profile">
                  <a style={{ fontSize: "18px", color: COLORS.menuText }}>
                    Profile
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link route="/chat">
                  <a style={{ fontSize: "18px", color: COLORS.menuText }}>
                    Chat Room
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link route="/users">
                  <a style={{ fontSize: "18px", color: COLORS.menuText }}>
                    Users
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider style={{ borderColor: COLORS.menuText }} />
              <Dropdown.Item>
                <Link route="/about">
                  <a style={{ fontSize: "18px", color: COLORS.menuText }}>
                    About
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div
          style={{
            backgroundColor: COLORS.menuBackground,
            width: "100%",
            height: "102vh",
            margin: "0px",
          }}
        >
          <center>
            <div
              style={{
                marginTop: "180px",
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                position: "absolute",
                color: COLORS.menuText,
              }}
            >
              <Icon size="massive" name="code" />
              <h1
                style={{
                  fontFamily: "Noto Sans",
                  fontSize: "90px",
                  color: COLORS.menuText,
                }}
              >
                ETHEGRAM
              </h1>
              <p style={{ fontSize: "50px", color: COLORS.menuText }}>
                The Decentralized Social Network
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Container>
                <p style={{ fontSize: "20px", color: COLORS.menuText }}>
                  Ethegram is a Decentralized Application based Social Network
                  created on Ethereum Blockchain. It uses Inter-Planetary File
                  System (IPFS) for storing large files like images and videos.
                  You can post articles, blogs, images, videos, etc. and view
                  them at a very low latency. You will be rewarded based on the
                  upvotes your posts get. The rewards are in the form of Gram
                  Tokens (GTok). You can redeem these tokens on this platform
                  itself into real Ether.
                </p>
                <p style={{ fontSize: "20px", color: COLORS.menuText }}>
                  Ethegram is a completely safe and secure Decentralized
                  Application. Your entire data is stored on the Blockchain. The
                  transactions are completely secure and surely profitable . . .
                </p>
              </Container>
            </div>
          </center>
        </div>
        <div>
          <Grid>
            <Grid.Column
              width={6}
              style={{
                borderRadius: "20px",
                backgroundColor: COLORS.divBackground,
                color: COLORS.menuBackground,
                padding: "30px",
              }}
            >
              <p style={{ fontSize: "40px", float: "right" }}>Creators</p>
              <br />
              <br />
              <br />
              <br />
              <List inverted size="huge" relaxed floated="right">
                <List.Item>
                  <Image
                    avatar
                    src="https://avatars0.githubusercontent.com/u/23273469?s=460&u=1bf613c4e5bd4199a4844e0fc0bea151c068fec1&v=4"
                  />
                  <List.Content>
                    <List.Header
                      style={{ color: COLORS.menuBackground, fontSize: "20px" }}
                    >
                      Hrishikesh Bawane
                    </List.Header>
                    <List.Description>
                      <a
                        style={{
                          color: COLORS.menuBackground,
                          fontSize: "15px",
                        }}
                        href="https://github.com/hrishibawane"
                        target="_blank"
                      >
                        github.com/hrishibawane
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image
                    avatar
                    src="https://avatars0.githubusercontent.com/u/41316054?s=460&v=4"
                  />
                  <List.Content>
                    <List.Header
                      style={{ color: COLORS.menuBackground, fontSize: "20px" }}
                    >
                      Tanuja Shinde
                    </List.Header>
                    <List.Description>
                      <a
                        style={{
                          color: COLORS.menuBackground,
                          fontSize: "15px",
                        }}
                        href="https://github.com/Tanyashinde"
                        target="_blank"
                      >
                        github.com/tanyashinde
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image
                    avatar
                    src="https://avatars0.githubusercontent.com/u/15326939?s=460&u=3556f175182b4115d9bb498e2a607aa6d0b5d2b8&v=4"
                  />
                  <List.Content>
                    <List.Header
                      style={{ color: COLORS.menuBackground, fontSize: "20px" }}
                    >
                      Yash Budukh
                    </List.Header>
                    <List.Description>
                      <a
                        style={{
                          color: COLORS.menuBackground,
                          fontSize: "15px",
                        }}
                        href="https://github.com/budukhyash"
                        target="_blank"
                      >
                        github.com/budukhyash
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                  />
                  <List.Content>
                    <List.Header
                      style={{ color: COLORS.menuBackground, fontSize: "20px" }}
                    >
                      Abhishek Kadam
                    </List.Header>
                    <List.Description>
                      <a
                        style={{
                          color: COLORS.menuBackground,
                          fontSize: "15px",
                        }}
                        href="https://github.com/akadam"
                        target="_blank"
                      >
                        github.com/akadam
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}></Grid.Column>

            <Grid.Column
              width={6}
              style={{
                borderRadius: "20px",
                backgroundColor: COLORS.divBackground,
                color: COLORS.menuBackground,
                padding: "30px",
              }}
            >
              <p style={{ fontSize: "40px" }}>Features</p>

              <ul style={{ marginTop: "2px" }}>
                <li style={{ fontSize: "20px", margin: "8px" }}>
                  Easy to get started
                </li>
                <li style={{ fontSize: "20px", margin: "8px" }}>
                  Upload and view media content in a fast and timely manner
                </li>
                <li style={{ fontSize: "20px", margin: "8px" }}>
                  Earn rewards for your own content
                </li>
                <li style={{ fontSize: "20px", margin: "8px" }}>
                  Simple yet profitable tokenomics
                </li>
                <li style={{ fontSize: "20px", margin: "8px" }}>
                  Rewards purely based on quality of user-content
                </li>
              </ul>
            </Grid.Column>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default About;

// Rewards for your own content
// Simple Tokenomics
// Ethereum Blockchain based storage
// IPFS for large file storage
