import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Card from "../shared/Card";

import styles from "./index.module.css";
import { useState } from "react";
import Modal from "../shared/Modal";

function DonateModal({
  setShowModal,
}: {
  readonly setShowModal: (value: boolean) => void;
}) {
  return (
    <Modal title="Donate QR Code">
      <div className="tw-relative tw-p-6 tw-flex-auto">
        <img
          src={
            require("@site/static/img/photo_2022-08-29_14-13-24.jpg").default
          }
          alt="Donate QR Code"
          loading="lazy"
          decoding="async"
          className="tw-w-[15.0rem] lg:tw-w-[25.0rem] md:tw-w-[20.0rem] tw-rounded-lg"
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
        <div className="tw-mb-6">
          <img
            src={require("@site/static/img/personal/me.jpg").default}
            alt="Về tôi"
            width={300}
            height={300}
            className="tw-rounded-full tw-animate-dissolve-in-out tw-ring-1 tw-ring-gray-200 dark:tw-ring-gray-800 tw-shadow-md"
          />
        </div>
        <Heading
          as="h1"
          className="lg:tw-text-6xl md:tw-text-4xl tw-text-3xl tw-font-bold tw-tracking-tight"
        >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle tw-mt-4 tw-mb-8 tw-text-gray-500 dark:tw-text-gray-400 tw-text-lg">
          {siteConfig.tagline}
        </p>
        <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-4">
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
    <div className="container tw-py-12 md:tw-py-16">
      <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-center tw-mb-2">
        {blogTitle}
      </h2>
      <p className="tw-text-center tw-text-gray-500 dark:tw-text-gray-400 tw-mb-10">
        {blogDescription}
      </p>
      <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
        {recentPosts.map((recentPost, idx) => (
          <RecentBlogPostCard key={idx} recentPost={recentPost} />
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
    <Card as="article" className="tw-flex tw-flex-col">
      <Link
        to={`/blog/${metadata.frontMatter.slug}`}
        className="hover:tw-no-underline"
      >
        <h3 className="tw-text-xl tw-font-semibold tw-mb-2">
          {metadata.title}
        </h3>
      </Link>
      {tagsExists && <RecentBlogPostTags tags={tags} />}
      <p className="tw-text-sm tw-text-gray-500 dark:tw-text-gray-400 tw-mb-4">
        {metadata.description}
      </p>
      <div className="tw-border-t tw-border-gray-100 dark:tw-border-gray-800 tw-pt-4 tw-mt-auto tw-text-sm">
        <Preview />
      </div>
    </Card>
  );
}

function RecentBlogPostTags({ tags }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ul className={clsx("tw-flex tw-flex-wrap tw-gap-2", "padding--none", "tw-mb-3")}>
      {tags.map((item, idx) => (
        <li key={idx} className="tw-inline-block">
          <Link
            to={`${siteConfig.url + siteConfig.baseUrl}/blog/tags/${item}`}
            className="tw-inline-block tw-text-xs tw-font-medium tw-px-2.5 tw-py-1 tw-rounded-full tw-bg-gray-100 dark:tw-bg-gray-800 tw-text-gray-600 dark:tw-text-gray-300 hover:tw-bg-[--ifm-color-primary] hover:tw-text-white tw-transition-colors hover:tw-no-underline"
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
