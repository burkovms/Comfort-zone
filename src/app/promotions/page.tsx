import type { Metadata } from 'next';
import { PromotionListItem } from '@/components/sections/PromotionListItem';

export const metadata: Metadata = {
  title: 'Promotions',
};

export const Promotions = () => {
  return (
    <section id="promotions" className="page-container p-block">
      <h1>Акції та знижки</h1>
      <PromotionListItem />
    </section>
  );
};

export default Promotions;
