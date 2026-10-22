import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { useEffect, useState } from "react";
import ListRepositoriesUserResponse from "../lib/dto/ListRepositoriesUserResponse";
import GithubRepositoriesClient from "../lib/client/GithubRepositoriesClient";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import clsx from "clsx";
import languages from "@site/static/file/languages_colors.json";
import Card from "@site/src/components/shared/Card";
import pageStyles from "@site/src/components/shared/pageLayout.module.css";
import useInView from "@site/src/lib/hooks/useInView";

function PortfolioHeader(): JSX.Element {
  return (
    <header className={pageStyles.header}>
      <div className="container tw-text-center">
        <Heading
          as="h1"
          className={`${pageStyles.title} lg:tw-text-5xl md:tw-text-4xl tw-text-3xl`}
        >
          Các dự án cá nhân
        </Heading>
        <p className={`${pageStyles.subtitle} ${pageStyles.measureWide}`}>
          Danh sách dự án cá nhân
        </p>
      </div>
    </header>
  );
}

function GithubListRepositoriesForUser({
  data,
  loading,
}: {
  readonly data: ListRepositoriesUserResponse[];
  readonly loading: boolean;
}): JSX.Element {
  if (loading || data.length === 0) {
    return (
      <p className={`container tw-text-center ${pageStyles.mutedText} tw-py-8`}>
        Đang tải danh sách dự án…
      </p>
    );
  }

  return (
    <div className={`container ${pageStyles.cardGrid}`}>
      {data.map((item) => (
        <Card key={item.id} className="tw-flex tw-flex-col tw-h-full">
          <div className="tw-flex tw-flex-row tw-items-center">
            <div className="tw-text-primary tw-opacity-80">
              <FontAwesomeIcon
                icon={icon({ name: "bookmark", style: "regular" })}
              />
            </div>
            <div className="tw-ml-3 tw-font-semibold tw-text-base tw-leading-snug">
              <Link
                to={item.html_url}
                className="hover:tw-text-primary hover:tw-no-underline"
              >
                {item.name}
              </Link>
            </div>
          </div>
          <div
            className={`tw-text-sm ${pageStyles.mutedText} tw-my-3 tw-flex-1 tw-leading-relaxed`}
          >
            {item.description ?? (
              <span className="tw-italic tw-opacity-80">No description</span>
            )}
          </div>
          <div className="tw-flex tw-flex-row tw-items-center tw-text-sm tw-mt-auto tw-pt-4 tw-border-t tw-border-[var(--border-subtle)]">
            {item.language && (
              <Link
                to={languages[item.language].url}
                className={`${pageStyles.mutedText} hover:tw-no-underline hover:tw-text-primary-dark dark:hover:tw-text-primary-light`}
              >
                <div className="tw-flex tw-flex-row tw-items-center tw-mr-5">
                  <span
                    className={clsx(
                      "tw-block tw-w-[12px] tw-h-[12px] tw-rounded-full tw-shrink-0"
                    )}
                    style={{
                      backgroundColor: languages[item.language].color,
                    }}
                  />
                  <span className="tw-ml-2">{item.language}</span>
                </div>
              </Link>
            )}
            <div
              className={`tw-flex tw-flex-row tw-items-center ${pageStyles.mutedText}`}
            >
              <span>
                <FontAwesomeIcon
                  icon={icon({ name: "star", style: "regular" })}
                />
              </span>
              <span className="tw-ml-2">{item.watchers}</span>
            </div>
            <Link
              to={item.html_url}
              aria-label={`Xem ${item.name} trên GitHub`}
              title="Xem trên GitHub"
              className={`tw-ml-auto ${pageStyles.mutedText} hover:tw-text-primary hover:tw-no-underline tw-transition-colors`}
            >
              <FontAwesomeIcon
                icon={icon({ name: "github", style: "brands" })}
              />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Portfolio(): JSX.Element {
  const { ref, inView } = useInView<HTMLElement>({ rootMargin: "300px 0px" });
  const [listRepositoriesForUser, setListRepositoriesForUser] = useState<
    ListRepositoriesUserResponse[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!inView || fetched) {
      return;
    }

    let cancelled = false;
    setLoading(true);

    GithubRepositoriesClient.callListRepositoriesForUser()
      .then((data) => {
        if (!cancelled) {
          setListRepositoriesForUser(data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
          setFetched(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [inView, fetched]);

  return (
    <Layout title="Các dự án open-source" description="Các dự án open-source">
      <PortfolioHeader />
      <main className={pageStyles.main} ref={ref}>
        <GithubListRepositoriesForUser
          data={listRepositoriesForUser}
          loading={!fetched || loading}
        />
      </main>
    </Layout>
  );
}
