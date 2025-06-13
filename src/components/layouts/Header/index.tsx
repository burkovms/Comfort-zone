'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.scss';

const headerData = {
  navigation: [
    {
      src: '/promotions',
      name: 'Акції',
      prefetch: true,
    },
    {
      src: '/tariffs',
      name: 'Тарифи',
      prefetch: false,
    },
    {
      src: '/programms',
      name: 'Програми',
      prefetch: true,
    },
    // {
    //   src: '/schedule',
    //   name: 'Расписание занятий'
    // },
    // {
    //   src: '/partners',
    //   name: 'Партнёры и тренеры'
    // },
    {
      src: '/about',
      name: 'Про клуб',
      prefetch: true,
    },
    {
      src: '/contacts',
      name: 'Контакти',
      prefetch: true,
    },
  ],
  phone: '8 800 665 54 33',
};

export const Header = () => {
  const pathname = usePathname();

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
              {headerData.navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.src}
                    prefetch={item.prefetch}
                    className={pathname === item.src ? 'active' : ''}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <a className="menu-phone text-lg" href={`tel:${headerData.phone.replace(/\s/g, '')}`}>
              {headerData.phone}
            </a>
            <a href="#" className="popup-open menu-btn">
              <span className="btn-img">
                <Image src="/nav-btn.png" alt="Navigation Button" width={49} height={52} />
              </span>
              <p>вмикайся</p>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-btn-wrap">
        <button className="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link href="/" className="logo-mobile">
          <Image src="/logo-mobile.svg" alt="mobile logotype" width={21} height={57} />
        </Link>
        <div className="nav-btn-info">
          <a className="phone-mobile" href={`tel:${headerData.phone.replace(/\s/g, '')}`}>
            {headerData.phone}
          </a>
          <a href="#" className="popup-open mobile-btn-popup">
            вмикайся
          </a>
        </div>
      </div>
    </>
  );
};
