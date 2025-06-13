import Link from 'next/link';
import styles from './LinkArror.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const LinkArror = ({ href, children }: Props) => {
  return (
    <Link href={href} className={styles.link}>
      <svg width="18" height="7" fill="none">
        <path
          stroke="#cdccb4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 3.5H1m0 0L4.26 1M1 3.5 4.26 6"
        />
      </svg>
      <span>{children}</span>
    </Link>
  );
};
