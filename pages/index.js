import React, { Component } from "react";
import {
  Card,
  Button,
  Grid,
  Image,
  Form,
  Modal,
  Header,
  List,
  Input,
  Container,
  Step
} from "semantic-ui-react";
import Layout from "../components/Layout";
import social from "../ethereum/social";
import web3 from "../ethereum/web3";
import { Link, Router } from "../routes";
import ipfs from "../ethereum/ipfs";
import COLORS from "../colors";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { CustButton } from "../components/styledComponents";
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("9596f3ac23f5400a981fa2a3e2f8411b");

class SocialIndex extends Component {
  state = {
    currAccount: "",
    posts: [],
    postCount: 0,
    items: [],
    images: [],
    newComment: "",
    disabled: false,
    loading: false,
    name: "",
    index: 0,
    username: "unknown",
    done: false,
    modal: false,
    articles: [],
    news: [],
    userbalance: 0
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    let userbalance = await web3.eth.getBalance(accs[0]);
    userbalance = web3.utils.fromWei(userbalance, "ether");
    userbalance = parseFloat(userbalance).toFixed(4);
    const isUser = await social.methods.isUser(accs[0]).call();
    const userDetails = await social.methods.getUserDetails(accs[0]).call();
    const username = userDetails[0];

    let balance = await social.methods.getContractBalance().call();
    balance = web3.utils.fromWei(balance, "ether");
    console.log(accs[0], username);
    console.log("Balance: " + balance);
    console.log("user bal: " + userbalance);

    this.setState({
      disabled: isUser,
      currAccount: accs[0],
      username: username,
      userbalance: userbalance
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

    newsapi.v2
      .topHeadlines({
        language: "en",
        country: "in"
      })
      .then(response => {
        console.log(response.articles);
        this.setState({ articles: response.articles });
        this.renderArticles();
      });
  }

  onSubmit = async index => {
    console.log(index);
    const accs = await web3.eth.getAccounts();

    var str = this.state.username + ": " + this.state.newComment;
    console.log(str);
    try {
      await social.methods.postComment(index, str).send({ from: accs[0] });
      console.log("Comment Posted by " + accs[0]);
      this.setState({ caption: "" });
      Router.pushRoute('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  likePost = async index => {
    console.log(index);

    try {
      await social.methods.likePost(index).send({
        from: this.state.currAccount
      });
      this.setState({ done: true });
    } catch (err) {}
  };

  signIn = async () => {
    this.setState({ loading: true });
    await social.methods.signIn(this.state.name).send({
      from: this.state.currAccount,
      value: web3.utils.toWei("0.02", "ether")
    });
    this.setState({ loading: false, disabled: true });
  };

  renderArticles = () => {
    const articles = this.state.articles;

    const news = articles.map((article, index) => {
      return {
        key: index,
        header: <h4>{article.title}</h4>,
        description: <p style={{fontSize:"15px"}}>{article.description}</p>,
        extra: <a href={article.url} target="_blank" style={{color:"blue"}}>{article.url}</a>,
        fluid: true,
        style: {backgroundColor: COLORS.background}
      };
    });

    this.setState({ news: news });
  };

  renderPosts = async () => {
    const posts = this.state.posts;
    console.log(this.state.postCount);

    const items = await Promise.all(
      posts.map(async (post, index) => {
        if (!post.valid) {
          return {
            key: index,
          };
        }
        const name = await social.methods.getUserDetails(post.owner).call();
        let imgSrc = null, vidSrc = null;
        if (post.imgIpfsHash.length > 0) {
          let hash = post.imgIpfsHash;
          let type = hash[0];
          hash = hash.slice(1, hash.length);

          if(type=="0") {
            imgSrc = "https://ipfs.io/ipfs/" + hash;
          }
          else {
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
                style={{ padding: "20px", borderTop: "1px solid", borderColor: "grey"}}
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
                    onChange={event =>
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
            </div>
          ),
          fluid: true
        };
      })
    );

    this.setState({ items: items });
  };

  render() {
    return (
      <Layout>
        <Step.Group ordered fluid>
          <Step completed={this.state.currAccount}>
            <Step.Content>
              <Step.Title>Metamask Login</Step.Title>
              <Step.Description>Login to your Metamask Account</Step.Description>
            </Step.Content>
          </Step>
          <Step completed={this.state.userbalance > 2}>
            <Step.Content>
              <Step.Title>Request Ethers</Step.Title>
              <Step.Description>
                Request ether in your account, if required, from <a href="https://faucet.rinkeby.io/" target="_blank">here</a>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step completed={this.state.disabled}>
            <Step.Content>
              <Step.Title>Ethegram One-Time Signup</Step.Title>
              <Step.Description>Signup to the Ethegram Platform</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Step.Content>
              <Step.Title>Welcome to Ethegram!!!</Step.Title>
              <Step.Description>You are ready to go...</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>

        <h2>Posts</h2>
        <Grid>
          <Grid.Column width={11}>
            <Card.Group centered items={this.state.items} />
          </Grid.Column>

          <Grid.Column
            width={5}
            textAlign="left"
            style={{
              // marginRight: "10px",
              marginTop: "15px",
              border: "1px solid #A9A9A9",
              borderRadius: "5px",
              backgroundColor: COLORS.white
            }}
          >
            <Form style={{backgroundColor: COLORS.background, padding:"10px", border: "1px solid #A9A9A9"}}>
              <label><h4 style={{color:COLORS.menuBackground}}>Name:</h4></label>
              <Form.Input
                required
                style={{ marginTop:"5px" }}
                disabled={this.state.disabled}
                fluid
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <CustButton
                size="medium"
                content="Sign Up"
                onClick={this.signIn}
                style={{
                  backgroundColor: COLORS.menuBackground,
                  color: COLORS.menuText,
                  width: "100%"
                }}
                disabled={this.state.disabled}
                loading={this.state.loading}
              />
            </Form>

            <br />
            <Link route="/profile">
              <a style={{color:COLORS.menuBackground}}><h4>Signed in as {this.state.username}</h4></a>
            </Link>
            <br />
            <Link route="/posts/new">
              <a>
                <CustButton
                  content="Create New Post"
                  size="medium"
                  disabled={!this.state.disabled}
                  style={{ backgroundColor: COLORS.menuBackground, color: COLORS.menuText, width: "100%" }}
                />
              </a>
            </Link>
            <br />
            <br />
            <hr />
            <h3 style={{marginBottom:"0px", color:COLORS.menuBackground}}>News Updates</h3>
            <p style={{ color:"grey", marginBottom: "20px" }}>
              Powered by newsapi.org
            </p>
            <Card.Group items={this.state.news} />
          </Grid.Column>
        </Grid>
        
      </Layout>
    );
  }
}


export default SocialIndex;
