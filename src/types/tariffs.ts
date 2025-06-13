export interface Tariff {
  id: number;
  slug: string;
  name: string;
  img: string;
  price: number;
  homeVisible?: boolean;
  excerpt: string;
  visit: number;
  description: string;
}
