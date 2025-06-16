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
        <div className="copyright-wrap">
          <a href="#">
            <Image
              className="design"
              src="/marketing-time.svg"
              alt="Phone"
              width={140}
              height={28}
              quality={90}
            />
          </a>
        </div>
      </div>
      <div className="s-bottom__right">
        <div className="s-bottom__item">
          <h2 className="h5">Завантаж мобільний додаток</h2>
          <div className="s-bottom__item-market">
            <img className="s-bottom__phone-img" src="/phone-bottom.png" alt="Phone" />
            <ul>
              <li>
                <a href="#">
                  <img src="/app-store.png" alt="App store" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/google-play.png" alt="Google playmarket" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
