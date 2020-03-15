import React, { Component } from "react";
import { Form, Button, Input, Image, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs";
import { Router } from "../../routes";
var swearjar = require("swearjar");

class NewPost extends Component {
  state = {
    caption: "",
    description: "",
    imgBuffer: null,
    imgIpfsHash: "",
    selectedImage: "",
    loading: false,
    errMessage: "",
    err: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const { description, caption } = this.state;

    this.setState({ loading: true, errMessage: "" });

    try {
      const accs = await web3.eth.getAccounts();
      const date = new Date();
      date.setHours(date.getHours() + 5);
      date.setMinutes(date.getMinutes() + 30);
      const timestamp = date.toUTCString().replace("GMT", "IST");

      console.log(this.state.imgBuffer);

      if (this.state.imgBuffer != null) {
        const ipfsHash = await ipfs.add(this.state.imgBuffer);
        this.setState({ imgIpfsHash: ipfsHash[0].hash });
      }

      const th = await social.methods
        .createPost(caption, description, this.state.imgIpfsHash, timestamp)
        .send({
          from: accs[0],
          value: web3.utils.toWei("0.01", "ether")
        });

      console.log(th.transactionHash);
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ err: true, errMessage: err.message });
    }

    this.setState({ loading: false });
  };

  captureFile = event => {
    event.stopPropagation();
    event.preventDefault();

    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0])
    });

    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async reader => {
    const buffer = await Buffer.from(reader.result);

    this.setState({ imgBuffer: buffer });
  };

  render() {
    return (
      <Layout>
        <h3>Create New Post</h3>
        <hr />
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            label="Caption"
            value={this.state.caption}
            onChange={event => this.setState({ caption: event.target.value })}
          />
          <Form.Input
            label="Upload an Image"
            type="file"
            onChange={event => this.captureFile(event)}
          />
          <Image src={this.state.selectedImage} size="medium" />
          <br />
          <Form.TextArea
            label="Post Description"
            value={this.state.description}
            placeholder="Whats Happening..."
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />

          <Message
            error
            header="Oops!"
            visible={this.state.err}
            content={this.state.errMessage}
          />

          <Button loading={this.state.loading} primary>
            Create Post
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default NewPost;
