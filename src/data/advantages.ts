import { SectionData } from '../types/firstMeeting';

export const advantages: SectionData = {
  title: 'Створи свою унікальну програму',
  tabs: [
    {
      title: `Можна відвідувати <span>будь-яку програму</span> у зручний час`,
      text: 'Отримай гнучку програму, яка підлаштовується під твої потреби та настрій.',
      img: {
        url: '/advantage-1.png',
        width: 682,
        height: 1040,
      },
    },
    {
      title: `30-хвилинного заняття <span>замало?</span>`,
      text: 'Досягай максимальної ефективності, поєднуючи 30-хвилинні заняття в серйозне годинне навантаження.',
      img: {
        url: '/advantage-2.png',
        width: 682,
        height: 1040,
      },
    },
    {
      title: `відвідуй програми <br /><span>без переодягання</span>`,
      text: 'Для участі в деяких програмах не потрібна спеціальна форма. Лише присутність і настрій.',
      img: {
        url: '/advantage-3.png',
        width: 682,
        height: 1040,
      },
    },
  ],
};
