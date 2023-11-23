import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import BlogReactions from "@site/customizations/BlogReactions";

export default function BlogPostItemFooter() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { tags, title, editUrl, hasTruncateMarker } = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  const reactions = Object.keys(metadata.frontMatter).includes("reactions")
    ? metadata.frontMatter.reactions
    : [];
  const slug = metadata.frontMatter.slug;

  if (!renderFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(
        "row docusaurus-mt-lg",
        isBlogPostPage && styles.blogPostFooterDetailsFull
      )}
    >

      {tagsExists && (
        <div className={clsx("col", { "col--9": truncatedPost })}>
          <TagsListInline tags={tags} />
        </div>
      )}

      <BrowserOnly>
        {() => (
          <div className={clsx(
            "col", {"col--9 ": truncatedPost }, 
            )}>
            <BlogReactions reactions={reactions} slug={slug} />
          </div>
        )}
      </BrowserOnly>

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div
          className={clsx("col text--right", {
            "col--3": tagsExists,
          })}
        >
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
