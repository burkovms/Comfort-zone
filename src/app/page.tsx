import HeroSection from '@/components/sections/HeroSection';
import Directions from '@/components/sections/Directions';
import TabsSection from '@/components/sections/TabsSection';
import AboutStudio from '@/components/sections/AboutStudio';
import Trainer from '@/components/sections/Trainer';
import ClubCards from '@/components/sections/ClubCards';

import { firstMeeting } from '@/data/firstMeeting';
import { advantages } from '@/data/advantages';

const slidesOne = [
  {
    img: '/direct-1-1.png',
    text: 'Високоінтенсивні тренування з використанням власної ваги, обладнання та EMS.',
  },
  {
    img: '/direct-1-2.png',
    text: 'Танцювальні тренування, побудовані на чергуванні інтервалів частоти пульсу.',
  },
  {
    img: '/direct-1-3.png',
    text: 'Танцювально-рухові тренування за методиками вільного руху (5 ритмів, Лабан).',
  },
  {
    img: '/direct-1-4.png',
    text: 'Стретчинг-напрямки. Комплекси вправ на основі: силового розтягування; танцювальної хореографії; розтяжки на базі йоги.',
  },
];
const slidesTwo = [
  {
    img: '/direct-2-1.png',
    text: 'Аудіо-методики короткого й ефективного денного сну.',
  },
  {
    img: '/direct-2-2.png',
    text: 'Релаксаційні та гіпномедитації для зняття стресу.',
  },
  {
    img: '/direct-2-3.png',
    text: 'Короткий відпочинок у галокамері, що не лише розслабляє, а й зміцнює імунітет, знижує головний біль та ризик респіраторних захворювань.',
  },
];
const slidesThree = [
  {
    img: '/direct-3-1.png',
    text: 'Східні практики. Тренування на базі хатха- та айенгар-йоги.',
  },
  {
    img: '/direct-3-2.png',
    text: 'Антигравіті-йога. Йога в гамаках з мінімальним навантаженням на хребет.',
  },
  {
    img: '/direct-3-3.png',
    text: 'Класична йога. Комплекси вправ на основі класичних східних чоловічих і жіночих практик (Ошо, цигун).',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <Directions
        slides={slidesOne}
        title="У тебе стрес?"
        slogan="Силові та танцювальні тренування знімають стрес"
        titleForDescription="Що це таке"
        bg="light"
      />

      <Directions
        slides={slidesTwo}
        title="Напружений і відчуваєш втому?"
        slogan="Отримай релакс і короткий сон"
        titleForDescription="Що це таке"
        bg="dark"
      />

      <Directions
        slides={slidesThree}
        title="Хочеш просто розслабитися?"
        slogan="Спробуй body & mind та медитацію"
        titleForDescription="Що це таке"
        bg="light"
      />

      <TabsSection className="advantages" {...advantages} />

      <AboutStudio />

      <Trainer />

      <TabsSection className="registration" imagesBlock {...firstMeeting} />

      <ClubCards />
    </>
  );
}
