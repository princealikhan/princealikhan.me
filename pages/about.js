import { Component } from "react";
import Link from "next/link";
import Head from 'next/head'

class AboutPage extends Component {
  
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Head>
          <title>About</title>
        </Head>
        {/* <strong>{this.props.isServer ? "server" : "client"} side</strong>. */}
        About
      </main>
    );
  }
}

export default AboutPage;