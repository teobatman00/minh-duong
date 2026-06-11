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

function BookmarkedPostCard({
  post,
}: {
  readonly post: BlogPostMeta;
}): JSX.Element {
  return (
    <Card as="article" className="tw-flex tw-flex-col">
      <Link to={post.permalink} className="hover:tw-no-underline">
        <h3 className="tw-text-xl tw-font-semibold tw-mb-2">{post.title}</h3>
      </Link>
      {post.tags.length > 0 && (
        <ul className="tw-flex tw-flex-wrap tw-gap-2 padding--none tw-mb-3">
          {post.tags.map((tag) => (
            <li key={tag.permalink} className="tw-inline-block">
              <Link
                to={tag.permalink}
                className="tw-inline-block tw-text-xs tw-font-medium tw-px-2.5 tw-py-1 tw-rounded-full tw-bg-gray-100 dark:tw-bg-gray-800 tw-text-gray-600 dark:tw-text-gray-300 hover:tw-bg-[--ifm-color-primary] hover:tw-text-white tw-transition-colors hover:tw-no-underline"
              >
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">
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
      <p className="tw-text-center tw-text-gray-500 dark:tw-text-gray-400">
        Bạn chưa lưu bài viết nào.
      </p>
    );
  }

  return (
    <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
      {bookmarkedPosts.map((post) => (
        <BookmarkedPostCard key={post.permalink} post={post} />
      ))}
    </section>
  );
}

export default function Bookmarks(): JSX.Element {
  return (
    <Layout title="Bài viết đã lưu" description="Danh sách bài viết đã lưu">
      <header className="tw-py-12 md:tw-py-16">
        <div className="container tw-text-center">
          <Heading
            as="h1"
            className="lg:tw-text-5xl md:tw-text-4xl tw-text-3xl tw-font-bold tw-tracking-tight"
          >
            Bài viết đã lưu
          </Heading>
          <p className="hero__subtitle tw-mt-4 tw-text-gray-500 dark:tw-text-gray-400">
            Các bài viết bạn đã đánh dấu để đọc sau
          </p>
        </div>
      </header>
      <main className="container tw-pb-16">
        <BrowserOnly>{() => <BookmarksContent />}</BrowserOnly>
      </main>
    </Layout>
  );
}
