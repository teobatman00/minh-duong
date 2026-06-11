import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import uniqid from 'uniqid';
import Card from '@site/src/components/shared/Card';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Về tôi',
    Svg: require('@site/static/img/man.svg').default,
    description: (
      <>
        Full-stack Java Developer. Tham khảo <a href={require('@site/static/file/DUONG-BINH-MINH-CV.pdf').default} target='_blank' rel="noopener noreferrer">Resume</a>
      </>
    ),
  },
  {
    title: 'Hỗ trợ',
    Svg: require('@site/static/img/technical-support.svg').default,
    description: (
      <>
        Đánh giá tôi tại đây <Link to={`https://github.com/teobatman00/minh-duong`}>Github</Link>
      </>
    ),
  },
  {
    title: 'Liên hệ',
    Svg: require('@site/static/img/contact.svg').default,
    description: (
      <>
        Sđt: 0916310208
      </>
    ),
  },
];

function Feature({title, Svg, description}: Readonly<FeatureItem>) {
  return (
    <Card className="tw-text-center">
      <Svg className={styles.featureSvg} role="img" />
      <Heading as="h3" className="tw-text-lg tw-font-semibold tw-mt-4 tw-mb-2">
        {title}
      </Heading>
      <p className="tw-text-sm tw-text-gray-500 dark:tw-text-gray-400 tw-mb-0">
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
