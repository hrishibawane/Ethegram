import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, List } from "semantic-ui-react";
import ipfs from "../../ethereum/ipfs";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class ChatRoom extends Component {
  state = {
    caption: "",
    prevMsgs: "",
    messages: [],
    currmsg: "",
    currAcc: "",
    username: "",
    items: [],
    loading: false
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const username = await social.methods.getUsername(accs[0]).call();
    this.setState({ currAcc: accs[0], username: username });

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
      return {
        key: index,
        description: (
          <div
            style={{
              width: "fit-content",
              border: "2px solid lightblue",
              margin: "5px",
              padding: "8px",
              backgroundColor: "lightblue",
              borderRadius: "5px"
            }}
          >
            <b>{str[0]}</b>
            <p>{str[1]}</p>
          </div>
        )
      };
    });
    return items;
  };

  onSend = async () => {
    this.setState({ loading: true });
    let prevMsgs = this.state.prevMsgs;
    if (prevMsgs.length > 0) {
      prevMsgs += " /// " + this.state.username + " *** " + this.state.currmsg;
    } else {
      prevMsgs += this.state.username + " *** " + this.state.currmsg;
    }
    this.setState({ prevMsgs: prevMsgs, currmsg: "" });

    // let uint8Arr = new TextEncoder("utf-8").encode(prevMsgs);
    let uint8Arr = await Buffer.from(prevMsgs);
    console.log(uint8Arr);
    const ipfshash = await ipfs.add(uint8Arr);
    console.log(ipfshash);
    await social.methods.setChatHash(ipfshash[0].hash).send({
      from: this.state.currAcc
    });

    this.componentDidMount();
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Chat Room</h3>
        <hr></hr>
        <br></br>
        <List items={this.state.items}></List>
        <Form onSubmit={() => this.onSend()}>
          <Form.Input
            fluid
            placeholder="Write your message..."
            value={this.state.currmsg}
            onChange={event => this.setState({ currmsg: event.target.value })}
          />
          <Button
            icon="send"
            color="green"
            content="Send"
            loading={this.state.loading}
          ></Button>
        </Form>
      </Layout>
    );
  }
}

export default ChatRoom;
