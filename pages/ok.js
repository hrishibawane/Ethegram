import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import ipfs from '../ethereum/ipfs';
import social from '../ethereum/social';
import Layout from '../components/Layout';

const textEncoding = require('text-encoding');

class TestIpfs extends Component {

    state = {
        ipfsHash: null,
        buffer: '',
        ethAddress: '',
        data: null,
        pic: ''
    }

    captureFile = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const file = event.target.files[0];
        let reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => this.convertToBuffer(reader);

    }

    convertToBuffer = async (reader) => {
        const buffer = await Buffer.from(reader.result);

        this.setState({ buffer: buffer });
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const accs = await web3.eth.getAccounts();
        console.log('Sending from metamask account: ' + accs[0]);

        // obtain contract address from social.js
        const ethAddress = await social.options.address;
        this.setState({ ethAddress: ethAddress });

        const ipfsHash = await ipfs.add(this.state.buffer);
        this.setState({ ipfsHash: ipfsHash[0].hash });
        console.log(this.state.ipfsHash);

        //save doc to ipfs, return its hash
        // await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        //     console.log(err, ipfsHash);

        //     this.setState({ ipfsHash: ipfsHash[0].hash });
        // });

    }

    largeuint8ArrToString(uint8arr, callback) {
        var bb = new Blob([uint8arr]);
        var f = new FileReader();
        f.onload = function(e) {
            callback(e.target.result);
        };
        
        f.readAsText(bb);
    }

    uint8ToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));

        bytes.forEach((b) => binary += String.fromCharCode(b));

        return window.btoa(binary);
    }

    getFile = async (event) => {
        event.preventDefault();

        const data = await ipfs.files.get(this.state.ipfsHash);
        const content = data[0].content;

        // this.largeuint8ArrToString(content, (text) => {
        //     console.log(text);

        //     this.setState({ pic: "data:image/png;base64" + text });
        // });
        
        const pic = this.uint8ToBase64(content);

        // const TextDecoder = textEncoding.TextDecoder;
        // let pic = new TextDecoder("utf-8").decode(content);

        this.setState({ data: data, pic: "data:image/png;base64,"+pic });
        console.log("Retrieved Data: ",  this.state.pic);
    
    }

    render() {
        return (
            <Layout>
                <h2>Test IPFS</h2>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        type="file"
                        onChange={this.captureFile}
                    />
                    <Button primary>
                        Send
                </Button>
                </Form>
                {/* { this.state.ipfsHash} */}
                <br />
                <Button onClick={this.getFile} secondary>GetFile</Button>
                <img src={this.state.pic} />
            </Layout>
        )
    }

}

export default TestIpfs;
