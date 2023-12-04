import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { useState } from "react";
import Modal from "../shared/Modal";

function DonateModal({
  setShowModal,
}: {
  readonly setShowModal: (value: boolean) => void;
}) {
  return (
    <Modal title="💖 Donate QR Code 💖">
      <div className="tw-relative tw-p-6 tw-flex-auto">
        <img
          src={
            require("@site/static/img/photo_2022-08-29_14-13-24.jpg").default
          }
          alt="Donate QR Code"
          className="tw-w-[15.0rem] lg:tw-w-[25.0rem] md:tw-w-[20.0rem]"
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
      <div className="container">
        <div className="tw-mb-5">
          <img
            src={require("@site/static/img/personal/me.jpg").default}
            alt="Về tôi"
            width={300}
            height={300}
            className="tw-rounded-full tw-animate-dissolve-in-out tw-shadow-2xl dark:tw-shadow-lg dark:tw-shadow-white"
          />
        </div>
        <Heading
          as="h1"
          className={`lg:tw-text-5xl md:tw-text-4xl tw-text-2xl`}
        >
          ❤ <span className={clsx(styles.heading)}>{siteConfig.title}</span> ❤
        </Heading>
        <p className="hero__subtitle tw-my-6">{siteConfig.tagline}</p>
        <div className="tw-flex tw-flex-row tw-justify-center tw-gap-4">
          <div className={styles.buttons}>
            <button
              className="button button--primary button--lg"
              onClick={() => setShowModal(true)}
            >
              Donate 💖
            </button>
            {showModal && <DonateModal setShowModal={setShowModal} />}
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Bài viết ➡
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageBlogPost({ homePageBlogMetadata, recentPosts }) {
  const { blogTitle, blogDescription } = homePageBlogMetadata;
  return (
    <div className={`tw-p-3 container`}>
      <h1 className="tw-text-center">{blogTitle}</h1>
      <p className="tw-text-center">{blogDescription}</p>
      <section>
        {recentPosts.map((recentPost, index) => (
          <RecentBlogPostCard key={index} recentPost={recentPost} />
        ))}
      </section>
    </div>
  );
}

function RecentBlogPostCard({ recentPost }) {
  const { Preview, metadata } = recentPost;
  const tagsExists = metadata.frontMatter.tags.length > 0;
  const tags = metadata.frontMatter.tags;
  return (
    <article
      style={{ padding: 20, marginTop: 20 }}
      className="tw-shadow dark:tw-border-solid tw-border tw-border-[--ifm-color-primary-dark]"
    >
      <Link to={`/blog/${metadata.frontMatter.slug}`}>
        <h2 className="tw-mb-0 tw-text-3xl">{metadata.title}</h2>
      </Link>
      {tagsExists && <RecentBlogPostTags tags={tags} />}
      <p>{metadata.description}</p>
      <hr />
      <Preview />
    </article>
  );
}

function RecentBlogPostTags({ tags }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ul className={clsx("tw-inline", "padding--none")}>
      {tags.map((item, index) => (
        <li
          key={index}
          className={clsx("tw-inline-block", "tw-mr-2", "tw-my-3")}
        >
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
