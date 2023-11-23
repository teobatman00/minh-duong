import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import Unlisted from "@theme/Unlisted";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from '@docusaurus/router';
import Giscus from "@giscus/react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const {
    metadata: { unlisted },
  } = useDoc();
  const { colorMode } = useColorMode();
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const {forbiddenGiscusDocPaths} = siteConfig.customFields;
  const giscus = (
    <React.Fragment>
      <hr />
      <br></br>
      <Giscus
        id="comments"
        repo={process.env.GISCUS_REPO}
        repoId={process.env.GISCUS_REPO_ID}
        category={process.env.GISCUS_CATEGORY}
        categoryId={process.env.GISCUS_CATEGORY_ID}
        mapping={process.env.GISCUS_MAPPING}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </React.Fragment>
  );

  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        {unlisted && <Unlisted />}
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          {!forbiddenGiscusDocPaths.includes(location.pathname) && giscus}
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
