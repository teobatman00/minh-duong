import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ViewCounter from '@site/components/ViewCounter';
import styles from './styles.module.css';

function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

function ReadingTime({readingTime}) {
  const readingTimePlural = useReadingTimePlural();
  return (
    <span className={styles.metaItem}>{readingTimePlural(readingTime)}</span>
  );
}

function Date({date, formattedDate}) {
  return (
    <time
      className={styles.metaItem}
      dateTime={date}
      itemProp="datePublished">
      {formattedDate}
    </time>
  );
}

function Spacer() {
  return <span className={styles.separator} aria-hidden="true">·</span>;
}

export default function BlogPostItemHeaderInfo({className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {date, formattedDate, readingTime, frontMatter} = metadata;
  return (
    <div className={clsx(styles.container, 'margin-vert--sm', className)}>
      <Date date={date} formattedDate={formattedDate} />
      {typeof readingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
      {isBlogPostPage && frontMatter.slug && (
        <>
          <Spacer />
          <span className={styles.metaItem}>
            <BrowserOnly>
              {() => <ViewCounter slug={frontMatter.slug} />}
            </BrowserOnly>
          </span>
        </>
      )}
    </div>
  );
}
