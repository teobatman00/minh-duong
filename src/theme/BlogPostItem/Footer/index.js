import React, {Suspense, lazy} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ButtonBookmark from '@site/components/ButtonBookmark';

const BlogReactions = lazy(() => import('@site/customizations/BlogReactions'));

export default function BlogPostItemFooter() {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags, title, editUrl, hasTruncateMarker} = metadata;
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const reactions = Object.keys(metadata.frontMatter).includes('reactions')
    ? metadata.frontMatter.reactions
    : [];
  const slug = metadata.frontMatter.slug;
  const hasReactions = Object.keys(reactions).length > 0;
  const renderFooter =
    tagsExists || truncatedPost || editUrl || hasReactions || isBlogPostPage;

  if (!renderFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(
        styles.footer,
        isBlogPostPage && styles.footerPage,
      )}>
      {tagsExists && (
        <div className={styles.tagsCol}>
          <TagsListInline tags={tags} />
        </div>
      )}

      <BrowserOnly>
        {() => (
          <div className={styles.actionsCol}>
            {hasReactions && (
              <Suspense fallback={null}>
                <BlogReactions reactions={reactions} slug={slug} />
              </Suspense>
            )}
            <ButtonBookmark permalink={metadata.permalink} />
          </div>
        )}
      </BrowserOnly>

      {isBlogPostPage && editUrl && (
        <div className={styles.editCol}>
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div className={styles.readMoreCol}>
          <ReadMoreLink
            blogPostTitle={title}
            className={clsx(
              'button button--outline button--primary',
              styles.readMore,
            )}
            to={metadata.permalink}
          />
        </div>
      )}
    </footer>
  );
}
