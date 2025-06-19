// import { notFound } from 'next/navigation';
// import { programCategories } from '@/data/programs';
// import './ProgramDetail.scss';

// const findProgramBySlug = (slug: string) =>
//   programCategories.flatMap(category => category.programs).find(program => program.slug === slug);

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const { slug } = await params;
//   const program = findProgramBySlug(slug);

//   if (!program) return {};

//   return {
//     title: program.title,
//     description: program.description,
//   };
// }

// export async function generateStaticParams() {
//   return programCategories
//     .flatMap(category => category.programs)
//     .map(tariff => ({
//       slug: tariff.slug,
//     }));
// }

// export default async function ProgramDetail({ params }: { params: { slug: string } }) {
//   const { slug } = await params;
//   const program = findProgramBySlug(slug);

//   if (!program) return notFound();

//   return (
//     <div className="page-container p-block">
//       <h1>{program.title}</h1>
//     </div>
//   );
// }
import { notFound } from 'next/navigation';
import { programCategories } from '@/data/programs';
import { getSlug } from '@/lib/helpers';

export default async function ProgramDetail({
  params,
}: { params: { slug: string } } | { params: Promise<{ slug: string }> }) {
  const { slug } = await getSlug(params);

  const program = programCategories
    .flatMap(category => category.programs)
    .find(program => program.slug === slug);

  if (!program) return notFound();

  return (
    <div className="page-container p-block">
      <h1>{program.title}</h1>
    </div>
  );
}
