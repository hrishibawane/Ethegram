const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledSocial = require("./build/Social.json");

const provider = new HDWalletProvider(
  "million taste trophy quantum sand cheese response zero casino reflect friend assist",
  "https://rinkeby.infura.io/v3/790b4e6eec7d467caacc619e21365f7d"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accs = await web3.eth.getAccounts();
  console.log("Deploying from account", accs[0]);
//   const gasPrice = web3.eth.gasPrice;
//   console.log(gasPrice);

  try {
    const result = await new web3.eth.Contract(
      JSON.parse(compiledSocial.interface)
    )
      .deploy({ data: compiledSocial.bytecode })
      .send({ gas: "2000000", from: accs[0] });

    console.log("Contract deployed to", result.options.address);
  } catch(err) {
      console.log(err.message);
  }
};

deploy();
