'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './navLink.module.css';

export const NavLink = ({ title, href }: { title: string; href: string }) => {
  const path = usePathname();
  const isActivePath = path.startsWith(href);

  return (
    <Link href={href} className={isActivePath ? classes.active : undefined}>
      {title}
    </Link>
  );
};
