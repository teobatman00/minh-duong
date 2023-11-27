import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageBlogPost({ homePageBlogMetadata, recentPosts }) {
  const { blogTitle, blogDescription, totalRecentPosts, totalPosts } =
    homePageBlogMetadata;
  return (
    <div className={`p-3 container`}>
      <h1 className="text-center">{blogTitle}</h1>
      <p className="text-center">{blogDescription}</p>

      <section>
        {recentPosts.map((recentPost, index) => (
          <RecentBlogPostCard key={index} recentPost={recentPost} />
        ))}
      </section>
      <hr />
    </div>
  );
}

function RecentBlogPostCard({ recentPost }) {
  const { Preview, metadata } = recentPost;
  const tagsExists = metadata.frontMatter.tags.length > 0;
  const tags = metadata.frontMatter.tags;
  return (
    <article style={{ padding: 20, marginTop: 20 }}>
      <Link to={`/blog/${metadata.frontMatter.slug}`}>
        <h2>{metadata.title}</h2>
      </Link>
      <p>{metadata.description}</p>
      {tagsExists && <RecentBlogPostTags tags={tags} />}
      <hr />
      <Preview />
    </article>
  );
}

function RecentBlogPostTags({ tags }) {
  return (
    <ul className={clsx("inline", "padding--none")}>
      {tags.map((item, index) => (
        <li key={index} 
            className={clsx("inline-block", "mr-2")}
        >
          <Link to={`/blog/tags/${item}`} className={styles.tag}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home({
  homePageBlogMetadata,
  recentPosts,
}): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Chuyên về tài chính - công nghệ`}
      description="Chuyên về tài chính - công nghệ"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageBlogPost
          homePageBlogMetadata={homePageBlogMetadata}
          recentPosts={recentPosts}
        />
      </main>
    </Layout>
  );
}
