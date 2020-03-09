import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Image,
  Message,
  Grid,
  Container
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import social from "../../ethereum/social";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs";
import { Router } from "../../routes";
import CountUp from "react-countup";

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
    errMessage: ""
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
      userbalance: userBalance
    });
  }

  redeemTokens = async () => {
    const { inputRedeem, useraddress, redeemtokens } = this.state;

    if (inputRedeem == 0 || inputRedeem > redeemtokens) {
      this.setState({
        err: true,
        errMessage: "You do no have enough Redeemable Tokens"
      });
    } else {
      try {
        let value = inputRedeem * 0.001;
        value = value.toString();
        value = web3.utils.toWei(value, "ether");
        await social.methods.redeemNTokens(inputRedeem, value).send({
          from: useraddress
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <Layout>
        <br></br>
        <center>
          <h1 style={{ color:"#003152", fontSize: "50px" }}>{this.state.username}</h1>
          <p style={{ color:"#003152", fontSize: "15px" }}>{this.state.useraddress}</p>
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
                  backgroundColor: "#003152",
                  color: "#81D8D0"
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
                      justifyContent: "center"
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
                  backgroundColor: "#81D8D0",
                  color: "#003152"
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
                      justifyContent: "center"
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
                  backgroundColor: "#81D8D0",
                  color: "#003152"
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
                      margin: "10px"
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
                  backgroundColor: "#003152",
                  color: "#81D8D0"
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
                      margin: "10px"
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

        <h1 style={{color:"#003152"}}>Redeem Tokens</h1>
        <p style={{ color:"#003152", fontSize: "15px" }}>
          (Note: Tokens can be redeemed if tokens are greater than 20)
        </p>

        <Form>
          <Form.Field inline style={{ height: "50px" }}>
            <label style={{ color:"#003152", fontSize: "18px" }}>Tokens to redeem: </label>
            <Input
              required
              focus
              placeholder="No. of Tokens"
              style={{ fontSize: "18px" }}
              onChange={event =>
                this.setState({ inputRedeem: event.target.value })
              }
            />
            <Button
              style={{ height: "45px", fontSize: "15px", color:"#FFF", backgroundColor:"#003152" }}
              onClick={() => this.redeemTokens()}
            >
              Redeem
            </Button>
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
      </Layout>
    );
  }
}
// tokens earned and withdrawable tokens
// 37.4642
export default Profile;