import ContactsBlock from '@/components/sections/ContactsBlock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

const Contacts = () => {
  return <ContactsBlock />;
};

export default Contacts;
