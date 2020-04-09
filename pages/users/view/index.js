import React, { Component } from "react";
import Layout from "../../../components/Layout";
import social from "../../../ethereum/social";
import {
  Container,
  Grid,
  Card,
  Form,
  Input,
  Button,
  Modal,
  Header,
  List,
  Image
} from "semantic-ui-react";
import COLORS from "../../../colors";
import CountUp from "react-countup";
import ReactPlayer from "react-player";

class ViewUser extends Component {
  state = {
    userAddress: "",
    userName: "",
    tokens: 0,
    userPosts: 0,
    redeemTokens: 0,
    items: [],
    posts: [],
    postCount: 0,
  };

  static async getInitialProps(props) {
    return {
      userAddress: props.query.address,
    };
  }

  async componentDidMount() {
    const userAddress = this.props.userAddress;

    const userDetails = await social.methods.getUserDetails(userAddress).call();
    console.log(userDetails);

    this.setState({
      userName: userDetails[0],
      tokens: userDetails[1],
      userPosts: userDetails[2],
      redeemTokens: userDetails[3],
      userAddress: userAddress,
    });

    const postCount = await social.methods.getPostsCount().call();
    const posts = await Promise.all(
      Array(parseInt(postCount))
        .fill()
        .map((element, index) => {
          return social.methods.posts(index).call();
        })
    );
    console.log(posts);
    this.setState({ posts: posts, postCount: postCount });
    this.renderPosts();
  }

  renderPosts = async () => {
    const posts = this.state.posts;
    console.log(this.state.postCount);

    const items = await Promise.all(
      posts.map(async (post, index) => {
        if (!post.valid || post.owner != this.state.userAddress) {
          return {
            key: index,
          };
        }
        const name = this.state.userName;
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
              <h4 style={{ marginBottom: "0px" }}>{name}</h4>
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
          fluid: true,
        };
      })
    );

    this.setState({ items: items });
  };

  render() {
    return (
      <Layout>
        <Container>
          <br></br>
          <center>
            <h1 style={{ color: COLORS.menuBackground, fontSize: "50px" }}>
              {this.state.userName}
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
                {this.state.userAddress}
              </p>
            </div>
          </center>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Grid centered>
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
                    end={this.state.userPosts}
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
          </Grid>
          <br />
          <br />
          <hr />
          <h1>{this.state.userName}'s Posts</h1>
          <br />
          <Card.Group centered items={this.state.items} />
        </Container>
      </Layout>
    );
  }
}

export default ViewUser;
