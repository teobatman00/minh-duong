import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import uniqid from 'uniqid';

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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={uniqid()} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
