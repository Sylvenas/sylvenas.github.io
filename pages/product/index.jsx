import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Table, { TableRes } from './components/table';
import './index.less';

function Product() {
  const [isClient, setIsClient] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>秋石医药</title>
        <meta name="description" content="安徽秋石医药科技有限公司"></meta>
        <meta name="keywords" content="安徽 秋石 医药 科技" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="p-product">
          <div className={'img'} />
          <div className={'product'}>
            <p
              className={tab === 0 ? 'tabmenuactive' : 'tabmenu'}
              onClick={() => setTab(0)}
            >
              原料药
            </p>
            <p
              className={tab === 1 ? 'tabmenuactive' : 'tabmenu'}
              onClick={() => setTab(1)}
            >
              中间体
            </p>
          </div>
          {tab === 0 ? <Table /> : <TableRes />}
        </div>
      </Layout>
    </div>
  );
}

export default Product;
