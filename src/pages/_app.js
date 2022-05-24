import React from "react";
import App from "next/app";
import LayoutFree from "../components/layouts/LayoutFree";
import "../styles/globals.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || LayoutFree;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
export default MyApp;
