import React from 'react';
import clsx from 'clsx';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

export default function BlogPostItemContainer({children, className}) {
  const {
    frontMatter,
    assets,
    metadata: {description},
    isBlogPostPage,
  } = useBlogPost();
  const {withBaseUrl} = useBaseUrlUtils();
  const image = assets.image ?? frontMatter.image;
  const keywords = frontMatter.keywords ?? [];
  return (
    <article
      className={clsx(
        isBlogPostPage ? styles.articlePage : styles.articleList,
        className,
      )}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting">
      {description && <meta itemProp="description" content={description} />}
      {image && (
        <link itemProp="image" href={withBaseUrl(image, {absolute: true})} />
      )}
      {keywords.length > 0 && (
        <meta itemProp="keywords" content={keywords.join(',')} />
      )}
      {children}
    </article>
  );
}
