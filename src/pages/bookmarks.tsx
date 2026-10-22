import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Card from "@site/src/components/shared/Card";
import useAllBlogPosts, {
  BlogPostMeta,
} from "@site/src/lib/hooks/useAllBlogPosts";
import { getBookmarks } from "@site/integration/bookmarks";
import pageStyles from "@site/src/components/shared/pageLayout.module.css";

function BookmarkedPostCard({
  post,
}: {
  readonly post: BlogPostMeta;
}): JSX.Element {
  return (
    <Card as="article" className="tw-flex tw-flex-col tw-h-full">
      <Link
        to={post.permalink}
        className="hover:tw-no-underline hover:tw-text-primary tw-transition-colors"
      >
        <h3 className="tw-text-xl tw-font-semibold tw-tracking-tight tw-mb-2 tw-leading-snug">
          {post.title}
        </h3>
      </Link>
      {post.tags.length > 0 && (
        <ul className="tw-flex tw-flex-wrap tw-gap-2 padding--none tw-mb-3">
          {post.tags.map((tag) => (
            <li key={tag.permalink} className="tw-inline-block">
              <Link to={tag.permalink} className={pageStyles.tagChip}>
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p
        className={`tw-text-sm ${pageStyles.mutedText} tw-leading-relaxed tw-mb-0 tw-mt-auto`}
      >
        {post.description}
      </p>
    </Card>
  );
}

function BookmarksContent(): JSX.Element {
  const allPosts = useAllBlogPosts();
  const [bookmarkedPermalinks, setBookmarkedPermalinks] = useState<string[]>(
    []
  );

  useEffect(() => {
    setBookmarkedPermalinks(getBookmarks());
  }, []);

  const bookmarkedPosts = allPosts.filter((post) =>
    bookmarkedPermalinks.includes(post.permalink)
  );

  if (bookmarkedPosts.length === 0) {
    return (
      <p className={`tw-text-center ${pageStyles.mutedText} tw-py-8`}>
        Bạn chưa lưu bài viết nào.
      </p>
    );
  }

  return (
    <section className={pageStyles.cardGrid}>
      {bookmarkedPosts.map((post) => (
        <BookmarkedPostCard key={post.permalink} post={post} />
      ))}
    </section>
  );
}

export default function Bookmarks(): JSX.Element {
  return (
    <Layout title="Bài viết đã lưu" description="Danh sách bài viết đã lưu">
      <header className={pageStyles.header}>
        <div className="container tw-text-center">
          <Heading
            as="h1"
            className={`${pageStyles.title} lg:tw-text-5xl md:tw-text-4xl tw-text-3xl`}
          >
            Bài viết đã lưu
          </Heading>
          <p className={`${pageStyles.subtitle} ${pageStyles.measureWide}`}>
            Các bài viết bạn đã đánh dấu để đọc sau
          </p>
        </div>
      </header>
      <main className={`container ${pageStyles.main}`}>
        <BrowserOnly>{() => <BookmarksContent />}</BrowserOnly>
      </main>
    </Layout>
  );
}
