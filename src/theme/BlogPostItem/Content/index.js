import React from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import RelatedPosts from '@site/src/components/RelatedPosts';

export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage, metadata} = useBlogPost();
  const { colorMode } = useColorMode();
  const giscus = (
    <div className="tw-mt-12 tw-pt-8 tw-border-t tw-border-gray-200 dark:tw-border-gray-800">
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
    </div>
  );

  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}
      itemProp="articleBody">
      <MDXContent>
        {children}
      </MDXContent>
      {isBlogPostPage && (
        <RelatedPosts
          currentPermalink={metadata.permalink}
          tags={metadata.tags}
        />
      )}
      {isBlogPostPage && giscus}
    </div>
  );
}
