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
  Input
} from "semantic-ui-react";
import Layout from "../components/Layout";
import social from "../ethereum/social";
import web3 from "../ethereum/web3";
import { Link, Router } from "../routes";
import ipfs from "../ethereum/ipfs";
import COLORS from "../colors";
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
    news: []
  };

  onSubmit = async index => {
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

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const isUser = await social.methods.isUser(accs[0]).call();
    const userDetails = await social.methods.getUserDetails(accs[0]).call();
    const username = userDetails[0];

    let balance = await social.methods.getContractBalance().call();
    balance = web3.utils.fromWei(balance, "ether");
    console.log(accs[0], username);
    console.log("Balance: " + balance);

    this.setState({
      disabled: isUser,
      currAccount: accs[0],
      username: username
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

  likePost = async index => {
    console.log(index);

    try {
      await social.methods.likePost(index).send({
        from: this.state.currAccount
      });
      this.setState({ done: true });
    } catch (err) {}
  };

  uint8ToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach(b => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }

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

    const items = await Promise.all(
      posts.map(async (post, index) => {
        const name = await social.methods.getUserDetails(post.owner).call();
        let src;
        if (post.imgIpfsHash.length > 0) {
          const data = await ipfs.files.get(post.imgIpfsHash);
          const bpic = this.uint8ToBase64(data[0].content);
          src = "data:image/png;base64," + bpic;
        } else {
          src = null;
        }

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
                hidden={src == null}
                src={src}
                fluid
              />
            </div>
          ),
          extra: (
            <div>
              <Form onSubmit={() => this.onSubmit(index)}>
                <Form.Field inline>
                  <Input
                    focus
                    placeholder="Add a comment..."
                    value={this.state.caption}
                    onChange={event =>
                      this.setState({ newComment: event.target.value })
                    }
                    style={{ width: "70%", height: "40px", marginRight: "0px" }}
                  />
                  <Button
                    size="small"
                    color="linkedin"
                    content="Post Comment"
                    icon="edit"
                    style={{ height: "40px" }}
                  />
                </Form.Field>
              </Form>
              <br></br>
              <Button
                onClick={() => this.likePost(index)}
                color="red"
                content="Like"
                icon="heart"
                size="medium"
                label={{ basic: true, color: "red", content: post.likes }}
              />
              <Modal
                trigger={
                  <Button
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
                  <Button
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
        <h2>Posts</h2>
        <Grid>
          <Grid.Column width={11} style={{ marginRight:"10px", paddingRight: "20px" }}>
            <Card.Group centered items={this.state.items} />
          </Grid.Column>

          <Grid.Column
            width={4}
            textAlign="left"
            style={{
              marginLeft: "40px",
              marginTop: "15px",
              border: "1px solid #A9A9A9",
              borderRadius: "5px",
              backgroundColor: COLORS.white
            }}
          >
            <Form style={{backgroundColor: COLORS.background, padding:"10px", border: "1px solid #A9A9A9"}}>
              <label><h4 style={{color:COLORS.menuBackground}}>Name:</h4></label>
              <Form.Input
                style={{ marginTop:"5px" }}
                disabled={this.state.disabled}
                fluid
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <Button
                size="medium"
                content="Sign In"
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
                <Button
                  content="Create New Post"
                  size="medium"
                  style={{
                    backgroundColor: COLORS.menuBackground,
                    color: COLORS.menuText,
                    width: "100%"
                  }}
                  disabled={!this.state.disabled}
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
