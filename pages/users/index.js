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
      return (
        <List.Item key={index}>
          <List.Icon name="user" size="big" />
          <List.Content>
            <List.Header>{user.name}</List.Header>
            <List.Description>{user.uadd}</List.Description>
          </List.Content>
          
          <hr />
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
