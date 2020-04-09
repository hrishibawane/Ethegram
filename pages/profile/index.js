import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Image,
  Message,
  Grid,
  Container,
  Modal,
  List,
  Header,
  Card,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs";
import { Router } from "../../routes";
import CountUp from "react-countup";
import ReactPlayer from "react-player";
import COLORS from "../../colors";
import { CustButton } from "../../components/styledComponents";


class Profile extends Component {
  state = {
    tokens: 0,
    username: "",
    useraddress: "",
    userposts: 0,
    userbalance: 0.0,
    redeemtokens: 0,
    inputRedeem: 0,
    err: false,
    errMessage: "",
    posts: [],
    postCount: 0,
    items: [],
    newComment: "",
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const userDetails = await social.methods.getUserDetails(accs[0]).call();
    const userAddress = accs[0];

    let userBalance = await web3.eth.getBalance(accs[0]);
    userBalance = web3.utils.fromWei(userBalance, "ether");
    userBalance = parseFloat(userBalance).toFixed(4);
    console.log(userBalance);

    this.setState({
      username: userDetails[0],
      tokens: userDetails[1],
      useraddress: userAddress,
      userposts: userDetails[2],
      redeemtokens: userDetails[3],
      userbalance: userBalance,
    });

    const postCount = await social.methods.getPostsCount().call();
    const posts = await Promise.all(
      Array(parseInt(postCount))
        .fill()
        .map((element, index) => {
          return social.methods.posts(index).call();
        })
    );

    this.setState({ posts: posts, postCount: postCount });
    this.renderPosts();
  }

  hidePost = async (index) => {
    console.log(index);

    try {
      await social.methods
        .deletePost(index)
        .send({ from: this.state.useraddress });
      Router.pushRoute("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  onSubmit = async (index) => {
    console.log(index);
    const accs = await web3.eth.getAccounts();

    var str = this.state.username + ": " + this.state.newComment;
    console.log(str);
    try {
      await social.methods.postComment(index, str).send({ from: accs[0] });
      console.log("Comment Posted by " + accs[0]);
      this.setState({ caption: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  renderPosts = async () => {
    const posts = this.state.posts;
    console.log(this.state.postCount);

    const items = await Promise.all(
      posts.map(async (post, index) => {
        if (!post.valid || post.owner!=this.state.useraddress) {
          return {
            key: index,
          };
        }
        const name = await social.methods.getUserDetails(post.owner).call();
        let imgSrc = null,
          vidSrc = null;
        if (post.imgIpfsHash.length > 0) {
          let hash = post.imgIpfsHash;
          let type = hash[0];
          hash = hash.slice(1, hash.length);

          if (type == "0") {
            imgSrc = "https://ipfs.io/ipfs/" + hash;
          } else {
            vidSrc = "https://ipfs.io/ipfs/" + hash;
          }
        }

        console.log(post.imgIpfsHash);

        return {
          key: index,
          header: (
            <div>
              <h4 style={{ marginBottom: "0px" }}>{name[0]}</h4>
              <p style={{ color: "grey", marginTop: "0px" }}>
                {post.timestamp}
              </p>
              <h3>{post.caption}</h3>
            </div>
          ),
          description: (
            <div style={{ border: "2px solid grey" }}>
              <p style={{ margin: "10px", fontSize: "15px" }}>
                {post.description}
              </p>
              <Image
                style={{ padding: "20px" }}
                hidden={imgSrc == null}
                src={imgSrc}
                fluid
              />
              <ReactPlayer
                style={{ padding: "20px", minHeight: "100%" }}
                hidden={vidSrc == null}
                url={vidSrc}
                controls={true}
                // light="https://www.thejobconnection.org/wp-content/uploads/2019/05/Video-Arrow-overlay.png"
                width="100%"
                height="100%"
              />
            </div>
          ),
          extra: (
            <div>
              <Form onSubmit={() => this.onSubmit(index)}>
                <Form.Field inline>
                  <Input
                    required
                    focus
                    placeholder="Add a comment..."
                    value={this.state.caption}
                    onChange={(event) =>
                      this.setState({ newComment: event.target.value })
                    }
                    style={{ width: "70%", height: "40px", marginRight: "0px" }}
                  />
                  <CustButton
                    size="small"
                    color="linkedin"
                    content="Post Comment"
                    icon="edit"
                    style={{ height: "40px" }}
                  />
                </Form.Field>
              </Form>
              <br></br>
              <CustButton
                onClick={() => this.likePost(index)}
                color="red"
                content="Like"
                icon="heart"
                size="medium"
                label={{ basic: true, color: "red", content: post.likes }}
              />
              <Modal
                trigger={
                  <CustButton
                    size="medium"
                    color="facebook"
                    content="View Comments"
                    icon="comments"
                    onClick={() => this.setState({ modal: true })}
                  />
                }
                size="small"
              >
                <Header content="Comments" />
                <Modal.Content>
                  <List divided items={post.comments.split("/")}></List>
                </Modal.Content>
                <Modal.Actions>
                  <CustButton
                    color="red"
                    content="Close"
                    icon="close"
                    inverted
                    onClick={() => this.setState({ modal: false })}
                  />
                </Modal.Actions>
              </Modal>
              <CustButton
                style={{ marginLeft: "auto" }}
                content="Hide"
                icon="hide"
                color="black"
                onClick={() => this.hidePost(index)}
              />
            </div>
          ),
          fluid: true,
        };
      })
    );

    this.setState({ items: items });
  };

  redeemTokens = async () => {
    const { inputRedeem, useraddress, redeemtokens } = this.state;

    if (inputRedeem == 0 || inputRedeem > redeemtokens) {
      this.setState({
        err: true,
        errMessage: "You do no have enough Redeemable Tokens",
      });
    } else {
      try {
        let value = inputRedeem * 0.001;
        value = value.toString();
        value = web3.utils.toWei(value, "ether");
        await social.methods.redeemNTokens(inputRedeem, value).send({
          from: useraddress,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <Layout>
        <Container>
          <br></br>
          <center>
            <h1 style={{ color: COLORS.menuBackground, fontSize: "50px" }}>
              {this.state.username}
            </h1>
            <div
              style={{
                backgroundColor: COLORS.divBackground,
                padding: "10px",
                width: "500px",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: COLORS.menuBackground,
              }}
            >
              <p
                style={{
                  color: COLORS.menuBackground,
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {this.state.useraddress}
              </p>
            </div>
          </center>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Grid centered>
            <Grid.Row>
              <Grid.Column width="8">
                <div
                  style={{
                    padding: "20px",
                    height: "100%",
                    borderRadius: "50px",
                    backgroundColor: COLORS.menuBackground,
                    color: COLORS.menuText,
                    border: "2px solid",
                    borderColor: COLORS.divBackground,
                  }}
                >
                  <center>
                    <h1 style={{ fontSize: "40px" }}>Total Posts</h1>
                    <br />
                    <br />
                    <CountUp
                      style={{
                        fontSize: "80px",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                      start={0}
                      end={this.state.userposts}
                      duration={5}
                    />
                  </center>
                </div>
              </Grid.Column>
              <Grid.Column width="8">
                <div
                  style={{
                    padding: "20px",
                    height: "100%",
                    borderRadius: "50px",
                    backgroundColor: COLORS.divBackground,
                    color: COLORS.menuBackground,
                    border: "2px solid",
                    borderColor: COLORS.menuBackground,
                  }}
                >
                  <center>
                    <h1 style={{ fontSize: "40px" }}>Total Tokens Earned</h1>
                    <br />
                    <br />
                    <CountUp
                      style={{
                        fontSize: "80px",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                      start={0}
                      end={this.state.tokens}
                      duration={5}
                    />
                    <h1>GTok</h1>
                  </center>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="8">
                <div
                  style={{
                    padding: "20px",
                    height: "100%",
                    borderRadius: "50px",
                    backgroundColor: COLORS.divBackground,
                    color: COLORS.menuBackground,
                    border: "2px solid",
                    borderColor: COLORS.menuBackground,
                  }}
                >
                  <center>
                    <h1 style={{ fontSize: "40px" }}>Redeemable Tokens</h1>
                    <br />
                    <br />
                    <CountUp
                      style={{
                        fontSize: "80px",
                        alignContent: "center",
                        justifyContent: "center",
                        margin: "10px",
                      }}
                      start={0.0}
                      end={this.state.redeemtokens}
                      duration={5}
                    />
                    <h1>GTok</h1>
                  </center>
                </div>
              </Grid.Column>
              <Grid.Column width="8">
                <div
                  style={{
                    padding: "20px",
                    height: "100%",
                    borderRadius: "50px",
                    backgroundColor: COLORS.menuBackground,
                    color: COLORS.menuText,
                    border: "2px solid",
                    borderColor: COLORS.divBackground,
                  }}
                >
                  <center>
                    <h1 style={{ fontSize: "40px" }}>Account Balance</h1>
                    <br />
                    <br />
                    <CountUp
                      style={{
                        fontSize: "80px",
                        alignContent: "center",
                        justifyContent: "center",
                        margin: "10px",
                      }}
                      start={0.0}
                      end={this.state.userbalance}
                      decimals={4}
                      duration={5}
                    />
                    <h1>ETH</h1>
                  </center>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br />
          <br />
          <hr />
          <br />

          <h1 style={{ color: COLORS.menuBackground }}>Redeem Tokens</h1>
          <p style={{ color: COLORS.menuBackground, fontSize: "15px" }}>
            (Note: Tokens can be redeemed if tokens are greater than 20)
          </p>

          <Form>
            <Form.Field inline style={{ height: "50px" }}>
              <label style={{ color: COLORS.menuBackground, fontSize: "18px" }}>
                Tokens to redeem:{" "}
              </label>
              <Input
                required
                focus
                placeholder="No. of Tokens"
                style={{ fontSize: "18px" }}
                onChange={(event) =>
                  this.setState({ inputRedeem: event.target.value })
                }
              />
              <CustButton
                icon="money"
                content="Redeem"
                style={{
                  fontSize: "16px",
                  color: COLORS.menuText,
                  backgroundColor: COLORS.menuBackground,
                }}
                onClick={() => this.redeemTokens()}
              />
            </Form.Field>
            <Message
              error
              header="Insufficient Tokens!"
              visible={this.state.err}
              content={this.state.errMessage}
            />
          </Form>
          <br />
          <br />
          <hr />
          <h1>Your Posts</h1>
          <br />
          <Card.Group centered items={this.state.items} />
        </Container>
      </Layout>
    );
  }
}
// tokens earned and withdrawable tokens
// 37.4642
export default Profile;
