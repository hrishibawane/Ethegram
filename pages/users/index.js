import React, { Component } from "react";
import Layout from "../../components/Layout";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import Link from "../../routes";
import { List, Icon } from "semantic-ui-react";

class UserIndex extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const userCount = await social.methods.userCount().call();

    const users = await Promise.all(
      Array(parseInt(userCount))
        .fill()
        .map((element, index) => {
          return social.methods.peeps(index).call();
        })
    );
    console.log(users);
    this.setState({ users: users });
  }

  getUsers = () => {
    return this.state.users.map((user, index) => {
      let score = 0;
      if (user.postsCount != 0) {
        score = user.tokens / user.postsCount;
      }
      return (
        <List.Item
          key={index}
          style={{
            borderRadius: "10px",
            marginBottom: "10px",
            backgroundColor: "#81D8D0",
            padding: "20px"
          }}
        >
          <List.Icon name="user circle" size="huge" />
          <List.Content>
            <List.Header
              style={{
                fontSize: "22px",
                margin: "5px",
                marginBottom: "10px",
                color: "#003152"
              }}
            >
              {user.name}
            </List.Header>
            <List.Description
              style={{ fontSize: "16px", marginLeft: "5px", color: "#003152" }}
            >
              <div>
                <p>{user.uadd}</p>
                <p>Score: {score}</p>
              </div>
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
  };

  render() {
    return (
      <Layout>
        <h2>Users</h2>
        <List>{this.getUsers()}</List>
      </Layout>
    );
  }
}

export default UserIndex;
