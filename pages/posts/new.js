import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Image,
  Message,
  Container,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs";
import { Router } from "../../routes";
import COLORS from "../../colors";
import ReactPlayer from "react-player";

class NewPost extends Component {
  state = {
    caption: "",
    description: "",
    imgBuffer: null,
    imgIpfsHash: "",
    selectedImage: "",
    loading: false,
    errMessage: "",
    err: false,
    imgFlag: true,
    vidFlag: true,
    selectedVideo: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state.imgFlag, this.state.vidFlag);
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

        if(this.state.imgFlag) {
          this.setState({ imgIpfsHash: "0" + ipfsHash[0].hash });
        }
        else {
          this.setState({ imgIpfsHash: "1" + ipfsHash[0].hash });
        }
      }

      const th = await social.methods
        .createPost(caption, description, this.state.imgIpfsHash, timestamp)
        .send({
          from: accs[0],
          value: web3.utils.toWei("0.01", "ether"),
        });

      console.log(th.transactionHash);
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ err: true, errMessage: err.message });
    }

    this.setState({ loading: false });
  };

  captureFile = (event, flag) => {
    event.stopPropagation();
    event.preventDefault();

    if (flag == 0) {
      this.setState({
        imgFlag: true,
        vidFlag: false,
        selectedImage: URL.createObjectURL(event.target.files[0]),
      });
    } else {
      this.setState({
        imgFlag: false,
        vidFlag: true,
        selectedVideo: URL.createObjectURL(event.target.files[0]),
      });
    }

    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async (reader) => {
    const buffer = await Buffer.from(reader.result);

    this.setState({ imgBuffer: buffer });
  };

  render() {
    return (
      <Layout>
        <Container>
          <h3>Create New Post</h3>
          <hr />
          <br />
          <Form onSubmit={this.onSubmit}>
            <Form.Input
              fluid
              label="Caption"
              value={this.state.caption}
              onChange={(event) =>
                this.setState({ caption: event.target.value })
              }
            />
            <Form.Input
              disabled={!this.state.imgFlag}
              label="Click here to Upload an Image"
              type="file"
              onChange={(event) => this.captureFile(event, 0)}
            />
            <Image src={this.state.selectedImage} size="medium" />
            <br />
            <Form.Input
              disabled={!this.state.vidFlag}
              label="Click here to Upload a Video"
              type="file"
              onChange={(event) => this.captureFile(event, 1)}
            />
            <ReactPlayer
              hidden={this.state.selectedVideo.length == 0}
              style={{ border: "1px solid", borderColor: COLORS.black }}
              url={this.state.selectedVideo}
              playing
              controls
            />
            <br />
            <Form.TextArea
              label="Post Description"
              value={this.state.description}
              placeholder="Whats Happening..."
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />

            <Message
              error
              header="Oops!"
              visible={this.state.err}
              content={this.state.errMessage}
            />

            <Button
              icon="edit"
              content="Create Post"
              loading={this.state.loading}
              style={{
                backgroundColor: COLORS.menuBackground,
                color: COLORS.menuText,
              }}
            />
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default NewPost;
