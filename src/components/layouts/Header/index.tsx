'use client';
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';

export const Header = () => {
  return (
    <>
      <div className="nav-wrap">
        <div className="nav-cover">
          <div className="nav-btn-close"></div>
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Logotype" width={146} height={219} />
          </Link>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="actions.html">
                  <span>Акции</span>
                </a>
              </li>
              <li>
                <a href="programms.html">
                  <span>Программы</span>
                </a>
              </li>
              <li>
                <a href="tariffs.html">
                  <span>Тарифы</span>
                </a>
              </li>
              <li>
                <a href="schedule.html">
                  <span>Расписание занятий</span>
                </a>
              </li>
              <li>
                <a href="about.html">
                  <span>О клубе</span>
                </a>
              </li>
              <li>
                <a href="partners.html">
                  <span>Партнёры и тренеры</span>
                </a>
              </li>
              <li>
                <a href="contacts.html">
                  <span>Контакты</span>
                </a>
              </li>
            </ul>
          </nav>
          <a className="menu-phone" href="tel:88006655433">
            8 800 665-54-33
          </a>
          <a href="#" className="popup-open menu-btn" rel="action1">
            <span className="btn-img">
              <Image src="/nav-btn.png" alt="Navigation Button" width={49} height={52} />
            </span>
            <p>включайся</p>
          </a>
        </div>
      </div>
      <div className="nav-btn-wrap">
        <a href="#" className="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <a href="index.html" className="logo-mobile">
          <Image src="/logo-mobile.svg" alt="mobile logotype" width={21} height={57} />
        </a>
        <div className="nav-btn-info">
          <a className="phone-mobile" href="tel:88006655433">
            8 800 665-54-33
          </a>
          <a href="#" className="popup-open mobile-btn-popup" rel="action1">
            включайся
          </a>
        </div>
      </div>
    </>
  );
};
