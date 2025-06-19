import Link from 'next/link';
import Image from 'next/image';
import './Tariffs.scss';
import { tariffs } from '@/data/tariffs';

const TariffsPage = () => {
  return (
    <section className="page-container tariffs p-block">
      <h1>Тарифи</h1>
      <div className="tariffs__wrap">
        {tariffs.map(tariff => (
          <div key={tariff.id} className="tariffs__item-cover">
            <Link href={`/tariffs/${tariff.slug}`} className="tariffs__item">
              <Image className="img" src={tariff.img} alt={tariff.name} width={538} height={300} />
              <div className="tariffs__info">
                <div className="quantity">
                  {tariff.visit} {tariff.visit < 5 ? 'відвідуваня' : 'відвідувань'}
                </div>
                <p className="text-md">з клубною карткою</p>
                <div className="name">{tariff.name}</div>
                <div className="price h4">{tariff.price} ₴</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TariffsPage;
