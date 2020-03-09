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
    username: "",
    done: false
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

  renderPosts = async () => {
    const posts = this.state.posts;

    const items = await Promise.all(
      posts.map(async (post, index) => {
        // const name = await social.methods.getUsername(post.owner).call();
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
              <h3 style={{ fontSize: "20px" }}>{post.caption}</h3>
              <h5>{this.state.username}</h5>
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
          meta: <p style={{ color: "grey" }}>{post.timestamp}</p>,
          extra: (
            <div>
              <Form onSubmit={() => this.onSubmit(index)}>
                <Form.Field inline >
                  <Input
                    focus
                    placeholder="Add a comment..."
                    value={this.state.caption}
                    onChange={event =>
                      this.setState({ newComment: event.target.value })
                    }
                    style={{ width: "70%", height:"40px" }}
                  />
                  <Button size="medium" color="linkedin" style={{ height: "40px" }} inverted>
                    Post Comment
                  </Button>
                </Form.Field>
              </Form>
              <br></br>
              <Button
                onClick={() => this.likePost(index)}
                color="red"
                content="Like"
                icon="heart"
                size="small"
                label={{ basic: true, color: "red", content: post.likes }}
              />
              <Modal
                trigger={
                  <Button size="small" primary>
                    View Comments
                  </Button>
                }
                size="small"
              >
                <Header content="Comments" />
                <Modal.Content>
                  <List divided items={post.comments.split("/")}></List>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="green" inverted>
                    Close
                  </Button>
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
          <Grid.Column width={12}>
            <Card.Group centered items={this.state.items} />
          </Grid.Column>

          <Grid.Column width={4} textAlign="left">
            <Form>
              <Form.Input
                disabled={this.state.disabled}
                fluid
                label="Name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <Button
                onClick={this.signIn}
                style={{ backgroundColor: "#003152", color: "#FFF" }}
                disabled={this.state.disabled}
                loading={this.state.loading}
              >
                Sign In
              </Button>
            </Form>

            <br></br>
            <br></br>
            <Link route="/posts/new">
              <a>
                <Button
                  size="medium"
                  style={{ backgroundColor: "#003152", color: "#FFF" }}
                  disabled={!this.state.disabled}
                >
                  Create New Post
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default SocialIndex;
