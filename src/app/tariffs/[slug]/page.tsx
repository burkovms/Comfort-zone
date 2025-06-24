import { tariffs } from '@/data/tariffs';
import { notFound } from 'next/navigation';
import { LinkArror } from '@/components/ui/LinkArror';
import './TariffDetail.scss';
import Button from '@/components/ui/Button';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tariff = tariffs.find(item => item.slug === slug);

  if (!tariff) return {};

  return {
    title: tariff.name,
    description: tariff.description,
  };
}

export async function generateStaticParams() {
  return tariffs.map(tariff => ({
    slug: tariff.slug,
  }));
}

export default async function TariffDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const tariff = tariffs.find(item => item.slug === slug);

  if (!tariff) return notFound();

  return (
    <section className="tariff__detail p-block page-container single-page">
      <LinkArror href="/tariffs">Тарифи</LinkArror>
      <h1>{tariff.name}</h1>
      <div className="tariff__detail-wrap single-page__wrap">
        <div className="tariff__left single-page__left">
          <div className="wrap">
            <img className="img" src={tariff.img} alt={tariff.name} />
            <div className="tariff__promotion">
              <span>5% знижка</span> у день пробного заняття
            </div>
          </div>
          <div className="info">
            <p>{tariff.excerpt}</p>
            <h6>Тривалість:</h6>
            <p>{tariff.description}</p>
            <a className="tariff__terms text-md" href="#">
              Правила використання
            </a>
          </div>
        </div>
        <div className="tariff__right single-page__right">
          <h6>Кількість відвідувань</h6>
          <p className="h5">{tariff.visit} в місяц</p>
          <div className="price">{tariff.price} ₴</div>
          <Button href="#" color="black" className="text-lg">
            Придбати
          </Button>
        </div>
      </div>
    </section>
  );
}
