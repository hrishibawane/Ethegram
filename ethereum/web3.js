import Web3 from 'web3';

let web3;

// if on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and metamask present
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // we are on server OR metamask not present
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/790b4e6eec7d467caacc619e21365f7d'
    );
    web3 = new Web3(provider);
}

// "test": "echo \"Error: no test specified\" && exit 1",

export default web3;