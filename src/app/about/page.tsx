import type { Metadata } from 'next';
import { aboutItems } from '@/data/about';
import './About.scss';
import { VideoBlock } from '@/components/ui/VideoBlock';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <section className="page-container about-page p-block">
      <h1>Про зону комфорту</h1>
      <div className="about-page__hero">
        <div className="about-page__hero-top">
          <div className="content">
            <div className="cover">
              <h2 className="h4">Це новий продукт</h2>
              <p className="text-xl">Такого немає на ринку – ми перша студія в Україні.</p>
            </div>
          </div>
          <div className="image" style={{ backgroundImage: 'url(/about-1.jpg)' }} />
        </div>
        <div className="about-page__hero-bottom">
          <div className="image img-left" style={{ backgroundImage: 'url(/about-2.jpg)' }} />
          <div className="cover">
            <div className="info text-lg">
              <div className="info-cover">
                <p>
                  Короткі тренування, що дають <strong>результат за 30 хвилин,</strong> вже кілька
                  років стрімко набирають популярності у всьому світі, включаючи Україну. Такі
                  протоколи, як <strong>Cross-fit, Tabata, Zumba</strong> та інші дозволяють досягти
                  результату за короткий час.
                </p>
                <p>
                  Ми використовуємо відомі та перевірені методики, зібрані в одному місці. З
                  широкого набору Ви зможете щодня обирати те, що підходить саме Вам — з урахуванням
                  настрою, самопочуття та обмежень у часі.
                </p>
              </div>
            </div>
            <span className="image" style={{ backgroundImage: 'url(/about-3.jpg)' }} />
          </div>
        </div>
      </div>

      <div className="about-page__items">
        {aboutItems.map(item => (
          <div key={item.title} className="card">
            <h4 className="title">{item.title}</h4>
            <div className="card__item">
              <div className="card__item-content">
                <h6>{item.subtitle}</h6>
                <ul className="text-lg">
                  {item.list.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="card__item-video-wrap">
                <VideoBlock posterUrl={item.posterUrl} alt={item.title} videoUrl={item.videoUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
