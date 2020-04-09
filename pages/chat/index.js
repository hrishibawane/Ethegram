import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, List, Container } from "semantic-ui-react";
import ipfs from "../../ethereum/ipfs";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import COLORS from "../../colors";
import { CustButton } from "../../components/styledComponents";

class ChatRoom extends Component {
  state = {
    caption: "",
    prevMsgs: "",
    messages: [],
    currmsg: "",
    currAcc: "",
    username: "",
    items: [],
    loading: false,
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const username = await social.methods.getUserDetails(accs[0]).call();
    this.setState({ currAcc: accs[0], username: username[0] });

    const hash = await social.methods.chatHash().call();
    if (hash.length > 0) {
      let data = await ipfs.files.get(hash);
      console.log(data[0].content);
      let msgString = new TextDecoder("utf-8").decode(data[0].content);
      console.log(msgString);
      this.setState({ messages: msgString.split("///"), prevMsgs: msgString });
    }
    const items = this.renderMsgs();
    this.setState({ items: items });
  }

  renderMsgs = () => {
    const items = this.state.messages.map((msg, index) => {
      let str = msg.split(" *** ");
      if (index > 0) {
        str[0] = str[0].slice(1, str[0].length);
      }
      if (str[0] == this.state.username) {
        return (
          <List.Item
            key={index}
            style={{
              width: "fit-content",
              border: "1px solid",
              padding: "10px",
              backgroundColor: COLORS.white,
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            <List.Content>
              <List.Header>{str[0]}</List.Header>
              <List.Description>
                <div>
                  <p style={{ margin: "0px" }}>{str[1]}</p>
                  <hr />
                  <p style={{ margin: "0px", color: "grey", fontSize: "12px" }}>
                    {str[2]}
                  </p>
                </div>
              </List.Description>
            </List.Content>
          </List.Item>
        );
      } else {
        return (
          <List.Item
            key={index}
            style={{
              width: "fit-content",
              border: "1px solid",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            <List.Content>
              <List.Header>{str[0]}</List.Header>
              <List.Description>
                <div>
                  <p style={{ margin: "0px" }}>{str[1]}</p>
                  <hr />
                  <p style={{ margin: "0px", color: "grey", fontSize: "12px" }}>
                    {str[2]}
                  </p>
                </div>
              </List.Description>
            </List.Content>
          </List.Item>
        );
      }
    });
    return items;
  };

  onSend = async () => {
    this.setState({ loading: true });
    let prevMsgs = this.state.prevMsgs;
    const date = new Date();
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    const timestamp = date.toUTCString().replace("GMT", "IST");
    if (prevMsgs.length > 0) {
      prevMsgs +=
        " /// " +
        this.state.username +
        " *** " +
        this.state.currmsg +
        " *** " +
        timestamp;
    } else {
      prevMsgs +=
        this.state.username +
        " *** " +
        this.state.currmsg +
        " *** " +
        timestamp;
    }
    this.setState({ prevMsgs: prevMsgs, currmsg: "" });

    // let uint8Arr = new TextEncoder("utf-8").encode(prevMsgs);
    let uint8Arr = await Buffer.from(prevMsgs);
    console.log(uint8Arr);
    const ipfshash = await ipfs.add(uint8Arr);
    console.log(ipfshash);
    await social.methods.setChatHash(ipfshash[0].hash).send({
      from: this.state.currAcc,
    });

    this.componentDidMount();
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Container>
          <h3>Chat Room</h3>
          <hr></hr>
          <List items={this.state.items}></List>
          <Form onSubmit={() => this.onSend()}>
            <Form.Input
              fluid
              placeholder="Write your message..."
              value={this.state.currmsg}
              onChange={(event) =>
                this.setState({ currmsg: event.target.value })
              }
            />
            <CustButton
              icon="send"
              style={{
                backgroundColor: COLORS.menuBackground,
                color: COLORS.menuText,
              }}
              content="Send"
              loading={this.state.loading}
            />
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default ChatRoom;
