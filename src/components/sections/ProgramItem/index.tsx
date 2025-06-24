import Button from '@/components/ui/Button';
import Link from 'next/link';
import { VideoBlock } from '@/components/ui/VideoBlock';
import { Program } from '@/types/programs';
import styles from './ProgramItem.module.scss';

export const ProgramItem = ({ props }: { props: Program }) => {
  return (
    <div className={styles.program}>
      <div className={styles.videoWrap}>
        <VideoBlock posterUrl={props.image} videoUrl={props.videoUrl} />
      </div>
      <div className={styles.info}>
        <div>
          <h6 className="text-lg">
            <Link href={`/programs/${props.slug}`}>{props.title}</Link>
          </h6>
          <p>{props.description}</p>
        </div>
        <div className={styles.btnWrap}>
          <Button href={`/programs/${props.slug}`} color="black" size="sm">
            Дізнатись більше
          </Button>
        </div>
        {props.extra && (
          <div className={styles.extra}>
            <span>Можна</span> не перевдягатись
          </div>
        )}
      </div>
    </div>
  );
};
