import React from 'react';
import { about, wechat } from '../data';
import styles from './index.less';

function About() {
  return (
    <section className={'about-container'}>
      <div className={'about'}>
        {about.map((item) => (
          <div className={'item'} key={item.key}>
            <span>{item.key}：</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      <img src={wechat} className={'wechatimg'} />
    </section>
  );
}

export default About;
