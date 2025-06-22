import { notFound } from 'next/navigation';
import { programCategories } from '@/data/programs';
import ThumbSlider from '@/components/sections/ThumbsSlider';
import { LinkArror } from '@/components/ui/LinkArror';
import Button from '@/components/ui/Button';
import './ProgramDetail.scss';

const video = {
  posterUrl: '/progr-1.jpg',
  alt: 'video',
  videoUrl: 'https://www.youtube.com/embed/Ncu0A9dtieU?si=CZN2xTaBUStswJlD',
};

const slider = ['/progr-2.jpg', '/progr-3.jpg', '/progr-4.jpg'];

const findProgramBySlug = (slug: string) =>
  programCategories.flatMap(category => category.programs).find(program => program.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = findProgramBySlug(slug);

  if (!program) return {};

  return {
    title: program.title,
    description: program.description,
  };
}

export async function generateStaticParams() {
  return programCategories
    .flatMap(category => category.programs)
    .map(tariff => ({
      slug: tariff.slug,
    }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = findProgramBySlug(slug);

  if (!program) return notFound();

  return (
    <section className="page-container p-block program-detail">
      <p className="program-direction">
        <LinkArror href="/programs">
          <span>Програми</span>
        </LinkArror>
      </p>
      <h1>{program.title}</h1>
      <div className="program-detail__wrap">
        <div className="program-detail__left">
          <div className="program-detail__slider-wrap">
            <ThumbSlider video={video} slider={slider} />
          </div>

          <div className="program-detail__left-info">
            <div className="program-detail__info-item">
              <h6>Про програму:</h6>
              <p>
                На тренуваннях ви будете виконувати вправи з використанням власної ваги тіла або
                тренажерів.
              </p>
              <p>
                Наша програма покроково підведе вас до ідеального рівня самоконтролю та фізичної
                форми. Впливаючи на всі групи м’язів, такі напрямки ідеально підходять людям із
                сидячим способом життя.
              </p>
            </div>
            <div className="program-detail__info-item">
              <h6>Допомагає при:</h6>
              <p>Стресі, хронічній втомі, дратівливості.</p>
            </div>
            <div className="program-detail__lead">
              <h6>Програму ведуть:</h6>
              <ul className="program-detail__lead-list">
                <li>
                  <span
                    className="program-detail__lead-img"
                    style={{ backgroundImage: 'url(/pgogr-lead-1.jpg)' }}
                  />
                  <div className="program-detail__lead-info">
                    <a href="#" className="name">
                      Євгенія Басмановська
                    </a>
                    <p>Головний тренер</p>
                  </div>
                </li>
                <li>
                  <span
                    className="program-detail__lead-img"
                    style={{ backgroundImage: 'url(/pgogr-lead-2.jpg)' }}
                  />
                  <div className="program-detail__lead-info">
                    <a href="#" className="name">
                      Студія «Sport ToyrnameN»
                    </a>
                    <p>Партнер з проведення силових тренувань</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-detail__right">
          <ul>
            <li>
              <h6>Тривалість:</h6>
              <p className="h5">30 хвилин</p>
            </li>
            <li>
              <h6>Найближче заняття:</h6>
              <p className="h5">Завтра о 14:00</p>
            </li>
          </ul>
          <Button href="#" color="black" className="text-lg">
            Записатися
          </Button>
        </div>
      </div>
    </section>
  );
}
