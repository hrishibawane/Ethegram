import React from "react";
import { Container } from "semantic-ui-react";
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
      <Container>{props.children}</Container>
    </div>
  );
};
