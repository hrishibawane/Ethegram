import React, { Component } from "react";
import { Card, Button, Grid, Image, Form } from "semantic-ui-react";
import Layout from "../components/Layout";
import social from "../ethereum/social";
import web3 from "../ethereum/web3";
import { Link } from "../routes";
import ipfs from "../ethereum/ipfs";

class SocialIndex extends Component {
  state = {
    currAccount: "",
    posts: [],
    postCount: 0,
    items: [],
    images: [],
    comments: [],
    newComment: "",
    disabled: false,
    loading: false,
    name: ''
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const isUser = await social.methods.isUser(accs[0]).call();
    console.log(accs[0], isUser);
    this.setState({ disabled: isUser, currAccount: accs[0] });

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
    // this.getComments();
  }

  likePost = async index => {
    console.log(index);
    //const accs = await web3.eth.getAccounts();

    try {
      await social.methods.likePost(index).send({
        from: this.state.currAccount,
        value: web3.utils.toWei("0.00001", "ether")
      });
    } catch (err) {}
  };

  uint8ToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach(b => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }

  renderPosts = async () => {
    const posts = this.state.posts;

    const items = await Promise.all(
      posts.map(async (post, index) => {
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
          header: <h3 style={{ fontSize: "20px" }}>{post.caption}</h3>,
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
              <Button
                onClick={() => this.likePost(index)}
                color="red"
                content="Like"
                icon="heart"
                size="tiny"
                label={{ basic: true, color: "red", content: post.likes }}
              />
              <Button color="linkedin" content="Comments" size="tiny" />
            </div>
          ),
          fluid: true
        };
      })
    );

    this.setState({ items: items });
  };

  signIn = async () => {
    this.setState({ loading: true });
    await social.methods.signIn(this.state.name).send({
      from: this.state.currAccount
    });
    this.setState({ loading: false, disabled: true });
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
                onChange={event =>
                  this.setState({ name: event.target.value })
                }
              />
              <Button
                onClick={this.signIn}
                color="blue"
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
                <Button size="medium" primary disabled={!this.state.disabled}>
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
