import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer p-block">
      <div className="footer-wrap">
        <ul className="footer-list text-sm">
          <li>
            <Link href="#" target="_blank">
              Прес-центр
            </Link>
          </li>
          <li>
            <Link href="#">Політика конфіденційності</Link>
          </li>
          <li>
            <Link href="#">Угода на обробку персональних даних</Link>
          </li>
        </ul>
        <div className="footer-copyrigt text-sm">© 2025, «Зона комфорта»</div>
        <Link href="#" className="logo">
          <Image src="/marketing-time.svg" alt="logo" width={140} height={28} />
        </Link>
      </div>
    </footer>
  );
};
