import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "75vh" }}> {children}</main>
      <Toaster />
      <Footer></Footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Shopify- shop now",
  description: "MERN stack project",
  keywords: "MERN,React,MongoDB,Express,Node",
  author: "komal",
};
export default Layout;
