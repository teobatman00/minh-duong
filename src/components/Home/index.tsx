import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function RecentBlogPostCard({recentPost}) {
  const { Preview, metadata } = recentPost;
  return (
    <article style={{ padding: 20, marginTop: 20, border: 'solid thick red' }}>
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
      <p>FrontMatter: {JSON.stringify(metadata.frontMatter)}</p>
      <hr />
      <Preview />
    </article>
  );
}

export default function Home({homePageBlogMetadata, recentPosts}): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Chuyên về tài chính - công nghệ`}
      description="Chuyên về tài chính - công nghệ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
          <div className={`p-3 container`}>
              <h1>{homePageBlogMetadata.blogTitle}</h1>
              <p>{homePageBlogMetadata.blogDescription}</p>
              <p>
                  Displaying some sample posts: <br />
                  {homePageBlogMetadata.totalRecentPosts} /{' '}
                  {homePageBlogMetadata.totalPosts}
              </p>

              <section>
                  {recentPosts.map((recentPost, index) => (
                      <RecentBlogPostCard key={index} recentPost={recentPost} />
                  ))}
              </section>
              <hr />
          </div>
      </main>
    </Layout>
  );
}
