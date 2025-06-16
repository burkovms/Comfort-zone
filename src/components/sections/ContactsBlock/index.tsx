import Image from 'next/image';
import './ContactsBlock.scss';

export const ContactsBlock = () => {
  return (
    <section className="contacts min-h">
      <div className="contacts__left p-block">
        <div className="contacts__info">
          <h2>Контакти</h2>
          <ul className="list">
            <li>
              <span className="h5">Київ</span>
              <p className="text-lg">Спортивна площа, 1, Палац Спорту</p>
            </li>
            <li>
              <span className="h5">Час работи</span>
              <p className="text-lg">з 8:00 до 22:00</p>
            </li>
            <li>
              <span className="h5">Телефон</span>
              <p className="text-lg">
                <a href="tel:88006655433">8 800 665 54 33</a>
              </p>
            </li>
          </ul>
          <a href="#" className="btn-dowload text-sm">
            Завантажити реквізити
          </a>
        </div>
      </div>
      <div className="contacts__right">
        <div id="map" className="map">
          <Image src="/google-map.png" alt="map" fill quality={90} />
        </div>
      </div>
    </section>
  );
};
