import { Tariff } from '@/types/tariffs';

export const tariffs: Tariff[] = [
  {
    id: 1,
    slug: 'single-visit',
    name: 'Разове відвідування',
    img: '/tariffs-1.svg',
    price: 300,
    homeVisible: true,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 1,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
  {
    id: 2,
    slug: 'key-to-balance',
    name: 'Ключ до балансу',
    img: '/tariffs-2.svg',
    price: 650,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 5,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
  {
    id: 3,
    slug: 'body-friend',
    name: 'Дружу з тілом',
    img: '/tariffs-3.svg',
    price: 950,
    homeVisible: true,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 12,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
  {
    id: 4,
    slug: 'full-order',
    name: 'Повний порядок',
    img: '/tariffs-4.svg',
    price: 1250,
    homeVisible: true,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 20,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
  {
    id: 5,
    slug: 'all-for-you',
    name: 'Все для тебе',
    img: '/tariffs-5.svg',
    price: 2700,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 40,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
  {
    id: 6,
    slug: 'come-together',
    name: 'Прийдемо вдвох',
    img: '/tariffs-6.svg',
    price: 3300,
    excerpt:
      'Це абонемент для тих, хто хоче відчути смак життя. За допомогою цієї клубної картки можна потрапити на будь-які тренування та інтенсиви.',
    visit: 20,
    description:
      '30 календарних днів з моменту активації. Активація абонемента відбувається в день першого заняття або через тиждень з дати продажу абонемента.',
  },
];
