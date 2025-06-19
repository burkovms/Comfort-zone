import type { Promotion } from '../types/promotions';

export const promotions: Promotion[] = [
  {
    id: 'action1',
    img: '/promotion-1.png',
    title: 'Пробне заняття',
    description: 'Безкоштовно',
    size: 'sm',
    color: 'light',
  },
  {
    id: 'action2',
    img: '/promotion-2.png',
    title: 'Знижка 5%',
    description: 'При покупці абонемента в день пробного заняття',
    size: 'sm',
    color: 'dark',
  },
  {
    id: 'action3',
    img: '/promotion-3.png',
    title: 'Знижка 10%',
    description: 'При покупці абонемента протягом 3-х днів після завершення попереднього',
    size: 'sm',
    color: 'light',
  },
  {
    id: 'action4',
    img: '/promotion-2.png',
    title: 'Знижка 15%',
    description: 'При покупці абонемента в день пробного заняття',
    size: 'sm',
    color: 'dark',
  },
  {
    id: 'action5',
    img: '/promotion-5.png',
    title: 'Корпоративні знижки',
    description: 'від наших партнерів',
    size: 'lg',
    color: 'light',
  },
];
