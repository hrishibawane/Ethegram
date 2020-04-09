import web3 from './web3';
import Social from './build/Social.json';

const instance = new web3.eth.Contract(
    JSON.parse(Social.interface),
    '0x92a0cc21564F5ecc19846149851f255D6E3f42fA'
);
// 0xB06Aa459d95A2aA3d60767FFC468757D13844E51
// '0xB94F1dF25671Ea0Fc1135069286ad3eB53C84a85'
// 0xCaAa55C33Ffe6a7542e8dEc00C142b7Abaa30622
// 0xA98edbEfA290CCFe93Cd593b01c0A48cf0C1215A

export default instance;