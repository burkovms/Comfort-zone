import { SectionData } from '../types/firstMeeting';

export const firstMeeting: SectionData = {
  title: 'Як виглядатиме наша перша зустріч:',
  tabs: [
    {
      title: `Зареєструйся в особистому кабінеті`,
      text: 'На сайті або в мобільному застосунку.',
      description: `<span>Знижка 15% на місячний абонемент</span> при замовленні з телефону`,
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Оплати карткою або через платіжні системи`,
      text: 'На сайті або в мобільному застосунку.',
      description: `В особистому кабінеті з’явиться статус <span>«Оплачено»</span>`,
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Обирай програму відповідно до настрою, стану та розкладу`,
      text: 'На сайті або в мобільному застосунку.',
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
    {
      title: `Бронюй час`,
      text: 'Обери програму та забронюй час відвідування на сайті, в застосунку або телефоном.',
      img: {
        url: '/phone.png',
        width: 345,
        height: 661,
      },
    },
  ],
  button: {
    text: 'Записатися на пробне відвідування',
    link: '#',
  },
};
