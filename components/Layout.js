import React from "react";
import { Container, Image } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import COLORS from "../colors";

export default props => {
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link
          rel="preload"
          href="/fonts/noto-sans-v9-latin-regular.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />
      <div
        style={{
          margin: "50px",
          marginTop: "0px",
          paddingLeft: "30px",
          paddingRight: "30px",
          position: "relative",
          minHeight: "100vh"
        }}
      >
        {/* <Image src="logo1.png" /> */}
        {props.children}
        <br />
        <br />

      </div>
      <Footer />
      
    </div>
  );
};
