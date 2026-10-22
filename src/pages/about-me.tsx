import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import pageStyles from "@site/src/components/shared/pageLayout.module.css";

function AboutMeHeader() {
  return (
    <header className={pageStyles.header}>
      <div className="container">
        <Heading
          as="h1"
          className={`${pageStyles.title} tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-mb-6 max-lg:tw-text-center`}
        >
          Về tôi
        </Heading>
        <p
          className={`${pageStyles.prose} max-lg:tw-mx-auto max-lg:tw-text-center`}
        >
          Chào các bạn, mình là Dương Bình Minh, tác giả của trang{" "}
          <span className="tw-font-semibold tw-text-primary">Minh Duong</span> vì
          nickname của mình là{" "}
          <span className="tw-font-semibold tw-text-primary">Minh Dương</span>.
        </p>
        <p
          className={`${pageStyles.prose} tw-mt-4 max-lg:tw-mx-auto max-lg:tw-text-center`}
        >
          Mình hiện tại là một Full-stack Java Developer và cũng là một writer,
          blogger và nhiều thứ khác nữa.
        </p>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-[var(--layout-grid-gap-md)] tw-mt-12 tw-items-center">
          <div className="max-lg:tw-flex max-lg:tw-justify-center">
            <img
              src={require("@site/static/img/personal/me.jpg").default}
              alt="About me"
              width={300}
              height={350}
              decoding="async"
              // Above-fold LCP: omit loading="lazy" so the browser fetches eagerly.
              className="tw-rounded-2xl tw-shadow-md tw-ring-1 tw-ring-[var(--border-subtle)] tw-object-cover"
            />
          </div>
          <div className="lg:tw-col-span-3 max-lg:tw-text-center">
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-tracking-tight tw-mb-0">
              Minh Dương
            </h2>
            <p className={`tw-text-lg ${pageStyles.mutedText} tw-mt-3 tw-mb-0`}>
              Full-stack Java Developer, writer, blogger
            </p>
            <div
              className={`${pageStyles.accentBar} max-lg:tw-mx-auto`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutMeContent() {
  return (
    <section className={pageStyles.sectionMuted}>
      <div className="container">
        <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-tracking-tight tw-mb-0">
          Về trang blog Minh Dương
        </h2>
        <p className={`${pageStyles.prose} tw-mt-3 tw-mb-0`}>
          Blog Minh Dương được sinh ra với mục đích chia sẻ các kiến thức về
          ngôn ngữ lập trình và tài chính
        </p>
      </div>
    </section>
  );
}

export default function AboutMe(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Về tác giả ${siteConfig.title}`}
      description={`Về tác giả ${siteConfig.title}`}
    >
      <AboutMeHeader />
      <main className={pageStyles.main}>
        <AboutMeContent />
      </main>
    </Layout>
  );
}
