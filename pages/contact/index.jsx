import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import About from './components/About';
import styles from './index.less';

function Contact() {
  return (
    <div className="container">
      <Head>
        <title>秋石医药</title>
        <meta name="description" content="安徽秋石医药科技有限公司" />
        <meta name="keywords" content="安徽 秋石 医药 科技" />
        <meta name="author" content="安徽秋石医药科技有限公司" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={'img'} />
        <About />
      </Layout>
    </div>
  );
}

export default Contact;
