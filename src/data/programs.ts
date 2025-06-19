import type { ProgramCategory } from '../types/programs';

export const programCategories: ProgramCategory[] = [
  {
    id: 1,
    title: 'Силові та танцювальні',
    image: '/program-categoties-1.png',
    programs: [
      {
        id: 'program-1',
        title: 'Високоінтенсивні напрямки',
        slug: 'high-intensity',
        description: 'з використанням власної ваги та обладнання.',
        image: '/progr-1.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
        extra: true,
      },
      {
        id: 'program-2',
        title: 'Танцювальні напрямки',
        slug: 'dance',
        description: 'побудовані на чергуванні інтервалів частоти пульсу.',
        image: '/progr-2.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
      },
      {
        id: 'program-3',
        title: 'Танцювально-рухові напрямки',
        slug: 'dance-movement',
        description: 'з методиками вільного руху (5 ритмів, Лабан).',
        image: '/progr-3.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
      },
    ],
  },
  {
    id: 2,
    title: 'Релакс та короткий сон',
    image: '/program-categoties-2.png',
    programs: [
      {
        id: 'program-3',
        title: 'Танцювально-рухові напрямки',
        slug: 'dance-movement',
        description: 'з методиками вільного руху (5 ритмів, Лабан).',
        image: '/progr-3.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
      },
      {
        id: 'program-1',
        title: 'Високоінтенсивні напрямки',
        slug: 'high-intensity',
        description: 'з використанням власної ваги та обладнання.',
        image: '/progr-1.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
        extra: true,
      },
    ],
  },
  {
    id: 3,
    title: 'Боді Майнд та медитації',
    image: '/program-categoties-3.png',
    programs: [
      {
        id: 'program-4',
        title: 'Стретч-напрямки',
        slug: 'stretch',
        description: 'комплекси вправ на базі силової розтяжки, танцювальної хореографії та йоги.',
        image: '/progr-4.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
      },
      {
        id: 'program-2',
        title: 'Танцювальні напрямки',
        slug: 'dance',
        description: 'побудовані на чергуванні інтервалів частоти пульсу.',
        image: '/progr-2.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
      },
    ],
  },
];
