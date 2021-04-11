import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.less';
import { companyLogo, navList } from './data';

const renderNav = (list, pathname) => {
  return list.map((item) => (
    <Link href={item.subNav} key={item.subNav}>
      <li
        className={
          'navitem' + ' ' + (pathname == item.subNav ? 'navitemactive' : '')
        }
      >
        {item.name}
      </li>
    </Link>
  ));
};

function Header() {
  const { pathname } = useRouter();
  return (
    <header className={'pageheader'}>
      <div className={'header'}>
        <img className={'companylogo'} src={companyLogo} />
        <h1 className={'companyname'}>秋石医药</h1>
      </div>
      <nav className={'navigation'}>
        <ul className={'navlist'}>{renderNav(navList, pathname)}</ul>
      </nav>
    </header>
  );
}

export default Header;
