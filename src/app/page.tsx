import HeroSection from '@/components/sections/HeroSection';
import Directions from '@/components/sections/Directions';
import TabsSection from '@/components/sections/TabsSection';
import AboutStudio from '@/components/sections/AboutStudio';
import Trainer from '@/components/sections/Trainer';

const slidesOne = [
  {
    img: '/direct-1-1.png',
    text: 'Высокоинтенсивные тренировки с использованием собственного веса и оборудования и EMS.',
  },
  {
    img: '/direct-1-2.png',
    text: 'Танцевальные тренировки, построенные на чередовании интервалов частоты пульса.',
  },
  {
    img: '/direct-1-3.png',
    text: 'Танцевально-двигательные тренировки по методикам свободного движения (5 ритмов, Лабан).',
  },
  {
    img: '/direct-1-4.png',
    text: 'Стрейч-направления. Комплексы упражнений на базе: силовой растяжки; танцевальной хореографии; растяжки на базе йоги.',
  },
];
const slidesTwo = [
  {
    img: '/direct-2-1.png',
    text: 'Аудио-методики короткого эффективного дневного сна',
  },
  {
    img: '/direct-2-2.png',
    text: 'Релаксационные и гипномедитации для снятия стресса',
  },
  {
    img: '/direct-2-3.png',
    text: 'Короткий отдых в галокамере, позволяющий не только расслабиться, но и повысить иммунитет, избавиться от головных болей, снизить риск респираторных заболеваний',
  },
];
const slidesThree = [
  {
    img: '/direct-3-1.png',
    text: 'Восточные практики. Тренировки на базе хатха и айенгара йоги',
  },
  {
    img: '/direct-3-2.png',
    text: 'Антигравити-йога. Йога в гамаках с уменьшенной нагрузкой на позвоночник',
  },
  {
    img: '/direct-3-3.png',
    text: 'Классическая йога. комплексы упражнений на базе классических, восточных мужских и женских практик (ошо, цигун)',
  },
];

const advantagesData = {
  title: 'Создай свою уникальную программу',
  tabs: [
    {
      title: `Можно посещать <span>любую программу</span> в удобное время`,
      text: 'Получи гибкую программу, которая подстраивается под твои нужды и настроение.',
      img: {
        url: '/advantage-1.png',
        width: 682,
        height: 1040,
      },
    },
    {
      title: `30 минутного занятия <span>недостаточно?</span>`,
      text: 'Добейся максимальной эффективности комбинируя занятия по 30 минут в серьёзную часовую нагрузку.',
      img: {
        url: '/advantage-2.png',
        width: 682,
        height: 1040,
      },
    },
    {
      title: `посещай программы <br /><span>не переодеваясь</span>`,
      text: 'Для посещения некоторых программ не потребуется специальная форма. Только присутствие и настрой.',
      img: {
        url: '/advantage-3.png',
        width: 682,
        height: 1040,
      },
    },
  ],
};

const registrationData = {
  title: 'Как будет выглядеть наша первая встреча:',
  tabs: [
    {
      title: `регистрируйся в личном кабинете`,
      text: 'На сайте или в мобильном приложении.',
      description: `<span>Скидка 15% на месячный абонемент</span> при заказе с телефона`,
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Производи оплату с карты или через платёжные системы`,
      text: 'На сайте или в мобильном приложении.',
      description: `В личном кабенете появится статус <span>«Оплачено»</span>`,
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Выбирай программу с учётом настроения, состояния и временных ограничений`,
      text: 'На сайте или в мобильном приложении.',
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Бронируй время`,
      text: 'Выбери программу и забронируй время посещения на сайте, в мобильном приложении или по телефону.',
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
  ],
  button: {
    text: 'Записаться на пробное посещение',
    link: '#',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <Directions
        slides={slidesOne}
        title="У тебя стресс?"
        slogan="Стресс снимают силовые и танцевальные тренировки"
        titleForDescription="Что это такое"
        bg="light"
      />

      <Directions
        slides={slidesTwo}
        title="Напряжён и чувствуешь усталость?"
        slogan="Получи релакс и короткий сон"
        titleForDescription="Что это такое"
        bg="dark"
      />

      <Directions
        slides={slidesThree}
        title="Хочешь просто расслабиться?"
        slogan="Попробуй боди майнд и медитацию"
        titleForDescription="Что это такое"
        bg="light"
      />

      <TabsSection className="advantages" {...advantagesData} />

      <AboutStudio />

      <Trainer />

      <TabsSection className="registration" {...registrationData} />
    </>
  );
}
