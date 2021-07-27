import React from 'react'

import Header from "../header"
import { media } from '@utils/theme';

import '@css/icomoon.less';
import '@css/global.less';
import '@css/prism-styles';

const Layout = ({ children, location }) => {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 40px)',
    }}
    >
      <Header location={location} />
      <main css={{
        flex: '1 0 auto',
        marginTop: 50,
        [media.between('medium', 'large')]: {
          marginTop: 45,
        },
        [media.lessThan('medium')]: {
          marginTop: 40,
        },
      }}>
        {children}
      </main>
    </div>
  )
}

export default Layout