import React from 'react';
import styles from './index.less';
import { footerNav } from './data';

export default function Footer() {
  return (
    <div className={'pagefooter'}>
      <div className={'nav'}>
        {footerNav.map((item) => (
          <section className={'navcol'} key={item.name}>
            <h1 className={'title'}>{item.name}</h1>
            {item.subNav.map((nav) => (
              <p className={'subnav'} key={nav.key}>
                {nav.key}
              </p>
            ))}
          </section>
        ))}
      </div>
      <p className={'copyright'}>
        Copyright ©2021 安徽秋石医药科技有限公司. All rights reserved.
      </p>
    </div>
  );
}
