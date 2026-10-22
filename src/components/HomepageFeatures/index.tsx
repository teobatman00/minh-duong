import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import uniqid from 'uniqid';
import Card from '@site/src/components/shared/Card';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Về tôi',
    imgSrc: '/img/man.svg',
    imgAlt: 'Về tôi',
    description: (
      <>
        Full-stack Java Developer. Tham khảo{' '}
        <a
          href={require('@site/static/file/DUONG-BINH-MINH-CV.pdf').default}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </>
    ),
  },
  {
    title: 'Hỗ trợ',
    imgSrc: '/img/technical-support.svg',
    imgAlt: 'Hỗ trợ',
    description: (
      <>
        Đánh giá tôi tại đây{' '}
        <Link to={`https://github.com/teobatman00/minh-duong`}>Github</Link>
      </>
    ),
  },
  {
    title: 'Liên hệ',
    imgSrc: '/img/contact.svg',
    imgAlt: 'Liên hệ',
    description: <>Sđt: 0916310208</>,
  },
];

function Feature({title, imgSrc, imgAlt, description}: Readonly<FeatureItem>) {
  const src = useBaseUrl(imgSrc);
  return (
    <Card className="tw-text-center">
      <img
        className={styles.featureSvg}
        src={src}
        alt={imgAlt}
        width={64}
        height={64}
        decoding="async"
      />
      <Heading as="h3" className="tw-text-lg tw-font-semibold tw-mt-4 tw-mb-2">
        {title}
      </Heading>
      <p className="tw-text-sm tw-text-secondary tw-mb-0">
        {description}
      </p>
    </Card>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="tw-py-12 md:tw-py-16">
      <div className="container">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
          {FeatureList.map((props) => (
            <Feature key={uniqid()} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
