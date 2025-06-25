'use client';
import { useEffect, useState } from 'react';
import './Preloader.scss';

const Preloader = () => {
  const [count, setCount] = useState(0);
  const target = 100;
  const speed = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="preloader">
      <div className="preloader-img" style={{ backgroundImage: "url('/loader_pic.jpg')" }}></div>
      <div className="preloader-item">
        <svg viewBox="0 0 69 129" fill="none">
          <path
            d="M0 101.05V121.552C0 125.659 3.35081 129 7.46925 129H61.5308C65.6492 129 69 125.659 69 121.552V101.05H0Z"
            fill="#1CC27C"
          />
          <path
            id="preloader-opacity"
            d="M69 96.75V16.0476C69 11.9411 65.6492 8.6 61.5308 8.6H47.4375V0H21.5625V8.6H7.46925C3.35081 8.6 0 11.9411 0 16.0476V96.75H69ZM4.3125 16.0476C4.3125 14.3104 5.727 12.9 7.46925 12.9H61.5308C63.273 12.9 64.6875 14.3104 64.6875 16.0476V66.65H4.3125V16.0476Z"
            fill="#1CC27C"
          />
        </svg>
        <p className="preloader-text">Зарядись энергией</p>
        <span className="charge">{count}%</span>
      </div>
      <ul className="preloader-wrap">
        <li>
          <span>
            <img src="/ellipse.png" alt="ellipse" />
            Стресс
          </span>
        </li>
        <li>
          <span>
            <img src="/ellipse.png" alt="ellipse" />
            Усталость
          </span>
        </li>
        <li>
          <span>
            <img src="/ellipse.png" alt="ellipse" />
            Напряжение
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Preloader;
