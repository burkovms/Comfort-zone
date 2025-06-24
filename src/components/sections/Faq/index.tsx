import Image from 'next/image';
import { AccordeonItem } from '@/components/ui/Accordeon';
import { faqItems } from './data';
import Button from '@/components/ui/Button';
import './Faq.scss';

export const Faq = () => {
  return (
    <section className="faq p-block min-h">
      <Image
        className="img"
        src="/faq-1.png"
        alt="Manager"
        width={1055}
        height={1024}
        quality={90}
      />
      <h2 className="h3">Залишились питання?</h2>
      <p className="slogan text-xl">
        Я відповім на <strong>будь-які з них</strong>
      </p>
      <div className="faq-specialist">
        <div className="name h5">Марія Шевченко</div>
        <div className="prof">Провідний тренер «Зони комфорта»</div>
        <Button color="white">Задати питання</Button>
      </div>
      <ul className="faq-wrap">
        {faqItems.map((item, index) => (
          <AccordeonItem
            key={index}
            question={item.question}
            answer={item.answer}
            number={`0${index + 1}`}
          />
        ))}
      </ul>
    </section>
  );
};
