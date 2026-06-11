import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

function AboutMeHeader() {
  return (
    <header className="tw-py-16 md:tw-py-24">
      <div className="container">
        <Heading
          as="h1"
          className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-tracking-tight tw-mb-8 max-lg:tw-text-center"
        >
          Về tôi
        </Heading>
        <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-300 tw-leading-relaxed tw-max-w-3xl">
          Chào các bạn, mình là Dương Bình Minh, tác giả của trang{" "}
          <span className="tw-text--bold">Minh Duong</span> vì nickname của mình
          là <span className="tw-text--bold">Minh Dương</span>.
        </p>
        <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-300 tw-leading-relaxed tw-max-w-3xl tw-mt-4">
          Mình hiện tại là một Full-stack Java Developer và cũng là một writer,
          blogger và nhiều thứ khác nữa.
        </p>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-8 tw-mt-10">
          <div className="max-lg:tw-flex max-lg:tw-justify-center">
            <img
              src={require("@site/static/img/personal/me.jpg").default}
              alt="About me"
              width={300}
              height={350}
              loading="lazy"
              decoding="async"
              className="tw-rounded-2xl tw-shadow-md"
            />
          </div>
          <div className="lg:tw-col-span-3 max-lg:tw-text-center">
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold">Minh Dương</h2>
            <p className="tw-text-lg tw-text-gray-500 dark:tw-text-gray-400 tw-mt-2">
              Full-stack Java Developer, writer, blogger
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutMeContent() {
  return (
    <section className="tw-py-12 md:tw-py-16 tw-bg-gray-50 dark:tw-bg-gray-900/40">
      <div className="container">
        <div>
          <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold">
            Về trang blog Minh Dương
          </h2>
          <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-300 tw-max-w-3xl tw-mt-2">
            Blog Minh Dương được sinh ra với mục đích chia sẻ các kiến thức về
            ngôn ngữ lập trình và tài chính
          </p>
        </div>
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
      <main>
        <AboutMeContent />
      </main>
    </Layout>
  );
}
