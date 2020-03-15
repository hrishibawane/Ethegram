import React from "react";
import { Container, Image } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

export default props => {
  return (
    <div style={{backgroundColor:"#eaf4fc"}}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <Header />
      <div style={{ margin:"50px", marginTop:"0px", paddingLeft:"30px", paddingRight:"30px"}}>
        {/* <Image src="logo1.png" /> */}
        {props.children}
        <br /><br />
      </div>
      <div style={{ position:"bottom", color:"#FFF", padding:"10px", backgroundColor:"#003152", height:"200px", width:"100%" }}>
        <h4>Creators:</h4>
        <ul>
          <li><a style={{color:"#FFF"}} href="https://github.com/hrishibawane">Hrishikesh Bawane</a></li>
          <li><a style={{color:"#FFF"}} href="https://github.com/Tanyashinde">Tanuja Shinde</a></li>
        </ul>
      </div>
    </div>
  );
};
