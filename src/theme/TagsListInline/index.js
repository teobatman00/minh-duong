import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';

export default function TagsListInline({tags}) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Tags:
        </Translate>
      </span>
      <ul className={clsx(styles.tags, 'padding--none')}>
        {tags.map(({label, permalink: tagPermalink}) => (
          <li key={tagPermalink} className={styles.tag}>
            <Tag label={label} permalink={tagPermalink} />
          </li>
        ))}
      </ul>
    </div>
  );
}
