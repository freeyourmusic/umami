import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

export default function Layout({ title, children, header = true, footer = true }) {
  return (
    <>
      <Head>
        <title>FYM Stats{title && ` - ${title}`}</title>
        <link rel="icon" href="https://stamp.imgix.net/statics/logos/favicon-round@400px.png?auto=compress,format&fit=crop&ch=Save-Data" />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {header && <Header />}
      <main className="container">{children}</main>
      {footer && <Footer />}
      <div id="__modals" />
    </>
  );
}
