import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Heading from "@theme/Heading";

function AboutMeHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={`
        ${clsx("hero hero--primary")}`}
    >
      <div className="container">
        <Heading as="h1" className="text--capitalize text-5xl mb-10">
          Về tôi
        </Heading>
        <p className="text-xl">
          Chào các bạn, mình là Dương Bình Minh, tác giả của trang{" "}
          <span className="text--bold">Minh Duong</span> vì nickname của mình là{" "}
          <span className="text--bold">Minh Dương</span>.
        </p>
        <p className="text-xl">
          Mình hiện tại là một Full-stack Java Developer và cũng là một writter,
          blogger và nhiều thứ khác nữa.
        </p>
        <div className="grid grid-cols-4 gap-2 py-5">
          <div>
            <img
              src={require("@site/static/img/personal/me.jpg").default}
              alt="About me"
              width={300}
              height={350}
            />
          </div>
          <div className="col-span-3">
            <h2 className="text-5xl">Minh Dương</h2>
            <p className="text-2xl">Full-stack Java Developer, writter, blogger</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutMeContent() {
    return (
        <section className="py-10">
            <div className="container">
                <div>
                    <h2 className="text-3xl">Về trang blog Minh Dương</h2>
                    <p className="text-xl">
                        Blog Minh Dương được sinh ra với mục đích chia sẻ các kiến thức về ngôn ngữ lập trình và tài chính
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
