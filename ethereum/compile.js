const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const socialPath = path.resolve(__dirname, 'contracts', 'Social.sol');
const source = fs.readFileSync(socialPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

console.log(solc.compile(source, 1));
for (let contract in output) {
    let name = contract.replace(':', '');
    fs.outputJSONSync(
        path.resolve(buildPath, name + '.json'),
        output[contract]
    );
}
