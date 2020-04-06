import Web3 from 'web3';

let provider;

// if on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and metamask present
    provider = window.web3.currentProvider;
}
else {
    // we are on server OR metamask not present
    provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/790b4e6eec7d467caacc619e21365f7d'
    );
}

// "test": "echo \"Error: no test specified\" && exit 1",

const web3 = new Web3(provider);

export default web3;