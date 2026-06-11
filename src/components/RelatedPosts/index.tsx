import React from "react";
import Link from "@docusaurus/Link";
import useAllBlogPosts, {
  BlogPostTag,
} from "@site/src/lib/hooks/useAllBlogPosts";

const MAX_RELATED_POSTS = 4;

export default function RelatedPosts({
  currentPermalink,
  tags,
}: Readonly<{
  currentPermalink: string;
  tags: BlogPostTag[];
}>): JSX.Element | null {
  const allPosts = useAllBlogPosts();
  const currentTagLabels = tags.map((tag) => tag.label);

  const related = allPosts
    .filter((post) => post.permalink !== currentPermalink)
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) =>
        currentTagLabels.includes(tag.label)
      ).length,
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, MAX_RELATED_POSTS)
    .map(({ post }) => post);

  if (related.length === 0) {
    return null;
  }

  return (
    <aside className="tw-mt-12 tw-pt-8 tw-border-t tw-border-gray-200 dark:tw-border-gray-800">
      <h3 className="tw-text-lg tw-font-semibold tw-mb-4">
        Bài viết liên quan
      </h3>
      <ul className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-list-none tw-pl-0">
        {related.map((post) => (
          <li key={post.permalink}>
            <Link to={post.permalink} className="hover:tw-no-underline">
              <span className="tw-font-medium">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
