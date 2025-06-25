'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/ui/Modal'));
import Form from '@/components/ui/Form';
import { motion } from 'motion/react';
import { useState } from 'react';

import './Header.scss';

const headerData = {
  navigation: [
    {
      src: '/promotions',
      name: 'Акції',
    },
    {
      src: '/tariffs',
      name: 'Тарифи',
    },
    {
      src: '/programs',
      name: 'Програми',
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
    },
    {
      src: '/contacts',
      name: 'Контакти',
    },
  ],
  phone: '8 800 665 54 33',
};

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className={`sidebar ${isOpenMenu ? 'opened' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 0.6, ease: 'easeOut' }}
          className="nav-wrap"
        >
          <div className="nav-cover">
            <div onClick={() => setIsOpenMenu(false)} className="nav-btn-close"></div>
            <Link href="/" className="logo">
              <Image src="/logo.png" alt="Logotype" width={146} height={219} unoptimized />
            </Link>
            <nav className="nav-menu">
              <ul className="nav-list">
                {headerData.navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.src}
                      className={pathname === item.src ? 'active' : ''}
                      onClick={() => setIsOpenMenu(false)}
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
              <button onClick={() => setOpenModal(true)} className="menu-btn">
                <span className="btn-img">
                  <Image src="/nav-btn.png" alt="Navigation Button" width={49} height={52} />
                </span>
                <p>вмикайся</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="nav-mobile">
        <button onClick={() => setIsOpenMenu(true)} className="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link href="/" className="logo-mobile">
          <Image src="/logo-mobile.svg" alt="mobile logotype" width={21} height={57} />
        </Link>
        <div className="nav-mobile__info">
          <button onClick={() => setOpenModal(true)} className="nav-mobile__btn-modal-open">
            вмикайся
          </button>
          <a className="phone-mobile" href={`tel:${headerData.phone.replace(/\s/g, '')}`}>
            {headerData.phone}
          </a>
        </div>
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} image="/popup-img.png">
        <Form />
      </Modal>
    </>
  );
};
