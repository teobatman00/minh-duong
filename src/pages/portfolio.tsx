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

function PortfolioHeader(): JSX.Element {
  return (
    <header className="tw-py-16">
      <div className="container tw-text-center">
        <Heading
          as="h1"
          className={`lg:tw-text-5xl md:tw-text-4xl tw-text-2xl`}
        >
          Các dự án cá nhân
        </Heading>
        <p className="hero__subtitle tw-mt-6 tw-italic">
          Danh sách dự án cá nhân
        </p>
      </div>
    </header>
  );
}

function GithubListRepositoriesForUser({
  data,
}: {
  readonly data: ListRepositoriesUserResponse[];
}): JSX.Element {
  return (
    <div className="container tw-grid tw-grid-cols-1 xl:tw-grid-cols-4 lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-min-w-[300px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="tw-border-solid tw-border tw-rounded tw-border-gray-300 tw-p-5 dark:tw-bg-gray-950"
        >
          <div className="tw-flex tw-flex-row">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "bookmark", style: "regular" })}
              />
            </div>
            <div className="tw-ml-3 tw-font-semibold">
              <Link to={item.html_url}>{item.name}</Link>
            </div>
          </div>
          <div className="tw-text-sm tw-text-gray-500 dark:tw-text-gray-200 tw-my-1">
            {item.description ?? (
              <span className="tw-italic">No description</span>
            )}
          </div>
          <div className="tw-flex tw-flex-row tw-text-sm tw-mt-3">
            {item.language && (
              <Link
                to={languages[item.language].url}
                className={`tw-text-gray-500 dark:tw-text-gray-200 hover:tw-no-underline dark:hover:tw-text-[--ifm-color-primary-dark]`}
              >
                <div className="tw-flex tw-flex-row tw-mr-5">
                  <span
                    className={clsx(
                      "tw-block tw-w-[15px] tw-h-[15px] tw-rounded-full tw-m-auto"
                    )}
                    style={{
                      backgroundColor: languages[item.language].color,
                    }}
                  ></span>
                  <span className="tw-ml-2">{item.language}</span>
                </div>
              </Link>
            )}
            <div className={clsx("tw-flex tw-flex-row")}>
              <span>
                <FontAwesomeIcon
                  icon={icon({ name: "star", style: "regular" })}
                />
              </span>
              <span className="tw-ml-2">{item.watchers}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio(): JSX.Element {
  const [listRepositoriesForUser, setListRepositoriesForUser] = useState<
    ListRepositoriesUserResponse[]
  >([]);

  async function getListRepositoriesForUserData() {
    try {
      const data = await GithubRepositoriesClient.callListRepositoriesForUser();
      setListRepositoriesForUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getListRepositoriesForUserData();
  }, []);

  return (
    <Layout title="Các dự án open-source" description="Các dự án open-source">
      <PortfolioHeader />
      <main>
        <GithubListRepositoriesForUser data={listRepositoriesForUser} />
      </main>
    </Layout>
  );
}
