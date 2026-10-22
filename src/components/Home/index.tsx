import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { useState } from "react";
import Modal from "../shared/Modal";
import Reveal from "../shared/Reveal";
import EarthGlobe from "../EarthGlobe";

function DonateModal({
  setShowModal,
}: {
  readonly setShowModal: (value: boolean) => void;
}) {
  return (
    <Modal title="Donate QR Code">
      <div className={styles.donateBody}>
        <img
          src={
            require("@site/static/img/photo_2022-08-29_14-13-24.jpg").default
          }
          alt="Donate QR Code"
          width={660}
          height={993}
          loading="eager"
          decoding="async"
          className={styles.donateQr}
        />
      </div>
      {/*footer*/}
      <div className="tw-flex tw-justify-center tw-p-4 tw-rounded-b-lg">
        <button
          className="button button--secondary button--lg"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const [showModal, setShowModal] = useState(false);

  return (
    <header className={clsx(styles.heroBanner)}>
      <EarthGlobe />
      <div className={clsx("container", styles.heroInner)}>
        <div className={clsx(styles.avatarWrap, styles.heroReveal)}>
          <img
            src={require("@site/static/img/personal/me.jpg").default}
            alt="Về tôi"
            width={300}
            height={300}
            className={styles.avatar}
          />
        </div>
        <Heading as="h1" className={clsx(styles.heroTitle, styles.heroRevealDelay)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx(styles.heroSubtitle, styles.heroRevealDelay2)}>
          {siteConfig.tagline}
        </p>
        <div className={clsx(styles.ctaRow, styles.heroRevealDelay2)}>
          <button
            className="button button--primary button--lg"
            onClick={() => setShowModal(true)}
          >
            Ủng hộ
          </button>
          {showModal && <DonateModal setShowModal={setShowModal} />}
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Xem bài viết
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageBlogPost({ homePageBlogMetadata, recentPosts }) {
  const { blogTitle, blogDescription } = homePageBlogMetadata;
  return (
    <div className={clsx("container", styles.blogSection)}>
      <Reveal as="header" className={styles.blogHeader}>
        <span className={styles.blogEyebrow}>Mới cập nhật</span>
        <h2 className={styles.blogTitle}>{blogTitle}</h2>
        <p className={styles.blogDescription}>{blogDescription}</p>
      </Reveal>
      <section className={styles.blogGrid}>
        {recentPosts.map((recentPost, idx) => (
          <Reveal
            key={idx}
            className={styles.postCardReveal}
            delay={idx * 100}
          >
            <RecentBlogPostCard recentPost={recentPost} />
          </Reveal>
        ))}
      </section>
      <Reveal className={styles.blogFooter} delay={120}>
        <Link className={clsx("button button--outline button--primary", styles.blogAllLink)} to="/blog">
          Xem tất cả bài viết
        </Link>
      </Reveal>
    </div>
  );
}

function RecentBlogPostCard({ recentPost }) {
  const { Preview, metadata } = recentPost;
  const tagsExists = metadata.frontMatter.tags?.length > 0;
  const tags = metadata.frontMatter.tags ?? [];
  return (
    <article className={styles.postCard}>
      <Link
        to={`/blog/${metadata.frontMatter.slug}`}
        className={styles.postTitleLink}
      >
        <h3 className={styles.postTitle}>{metadata.title}</h3>
      </Link>
      {tagsExists && <RecentBlogPostTags tags={tags} />}
      {metadata.description && (
        <p className={styles.postDescription}>{metadata.description}</p>
      )}
      <div className={styles.postPreview}>
        <Preview />
      </div>
    </article>
  );
}

function RecentBlogPostTags({ tags }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ul className={clsx(styles.tagList, "padding--none")}>
      {tags.map((item, idx) => (
        <li key={idx}>
          <Link
            to={`${siteConfig.url + siteConfig.baseUrl}/blog/tags/${item}`}
            className={styles.tag}
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
  return (
    <Layout
      title={`Chuyên về tài chính - công nghệ`}
      description="Chuyên về tài chính - công nghệ"
    >
      <div className={styles.home}>
        <HomepageHeader />
        <main>
          <Reveal>
            <HomepageFeatures />
          </Reveal>
          <HomepageBlogPost
            homePageBlogMetadata={homePageBlogMetadata}
            recentPosts={recentPosts}
          />
        </main>
      </div>
    </Layout>
  );
}
