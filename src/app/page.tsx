import HeroSection from '@/components/sections/HeroSection';
import { slidesOne, slidesTwo, slidesThree } from '@/data/sliders';
import Directions from '@/components/sections/Directions';
import TabsSection from '@/components/sections/TabsSection';
import AboutStudio from '@/components/sections/AboutStudio';
import Trainer from '@/components/sections/Trainer';
import ClubCards from '@/components/sections/ClubCards';

import { firstMeeting } from '@/data/firstMeeting';
import { advantages } from '@/data/advantages';
import { Faq } from '@/components/sections/Faq';
import ContactsBlock from '@/components/sections/ContactsBlock';
import { BottomSection } from '@/components/sections/BottomSection';

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
        title="Напружений та відчуваєш втому?"
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

      <Faq />

      <ContactsBlock />

      <BottomSection />
    </>
  );
}
