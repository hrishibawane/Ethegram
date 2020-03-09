const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledSocial = require('../ethereum/build/Social.json');

let accounts;
let social;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    social = await new web3.eth.Contract(JSON.parse(compiledSocial.interface))
        .deploy({ data: compiledSocial.bytecode })
        .send({ from: accounts[0], gas: "2000000" });
});

describe("Testing post operations...", () => {

    it("creates a post", async () => {
        let caption = "Hello world";
        let desc = "Testing with a sample post";
        let timestamp = "25/02/2020";

        // provide separate gas for each transaction call in tests

        await social.methods
            .createPost(caption, desc, "", timestamp)
            .send({ from: accounts[0], gas: "1000000" });

        await social.methods
            .likePost(0)
            .send({ from: accounts[0], gas: "1000000" });

        let post = await social.methods.posts(0).call();
        console.log(post.likes);

        assert(post.likes > 0);

        
    });
});

describe("Testing redeem", () => {

    it("redeems tokens", async () => {

        const pbal = await web3.eth.getBalance(accounts[0]);

        await social.methods
            .redeemNTokens(2, web3.utils.toWei("0.5", "ether"))
            .send({ from: accounts[0] });

        const cbal = await web3.eth.getBalance(accounts[0]);
        console.log(pbal + ", " + cbal);

        assert(cbal > pbal);

    });

});  

