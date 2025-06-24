import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
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
            <Link href="#">Згода на обробку персональних даних</Link>
          </li>
        </ul>
        <div className="footer-copyrigt text-sm">© {year}, «Зона комфорта»</div>
      </div>
    </footer>
  );
};
