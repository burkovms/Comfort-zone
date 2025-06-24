import Link from 'next/link';
import './BottomSection.scss';
import Image from 'next/image';

export const BottomSection = () => {
  return (
    <section className="s-bottom p-block min-h">
      <Image className="s-bottom__bg" src="/bg-bottom.jpg" alt="Background" fill quality={90} />
      <div className="s-bottom__left">
        <ul className="s-bottom__left-list text-xl">
          <li>
            <Link href="/about">Про клуб</Link>
          </li>
          <li>
            <a href="#">Політика конфіденційності</a>
          </li>
          <li>
            <a href="#">Згода на обробку персональних даних</a>
          </li>
        </ul>
      </div>
      <div className="s-bottom__right">
        <div className="s-bottom__item">
          <h2 className="h5">Завантаж мобільний додаток</h2>
          <div className="s-bottom__item-market">
            <Image
              className="s-bottom__phone-img"
              src="/phone-bottom.png"
              alt="Phone"
              width={249}
              height={515}
              quality={90}
            />
            <ul>
              <li>
                <a href="#">
                  <img src="/app-store.png" alt="App store" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/google-play.png" alt="Google playmarket" loading="lazy" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
