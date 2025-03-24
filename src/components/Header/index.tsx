import Link from 'next/link';
import { FC } from 'react';

import Image from 'next/image';

import styles from './header.module.css';
import logo from '@/assets/logo.png';
import { HeaderBackground } from '../HeaderBackground';
import { NavLink } from './components';

export const Header: FC = () => {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logo.src} alt='logo' width={80} height={80} priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink title='Browse Meals' href='/meals' />
            </li>
            <li>
              <NavLink title='Foodies Community' href='/community' />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
