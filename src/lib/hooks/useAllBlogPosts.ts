import { usePluginData } from "@docusaurus/useGlobalData";

export interface BlogPostTag {
    label: string;
    permalink: string;
}

export interface BlogPostMeta {
    id: string;
    title: string;
    permalink: string;
    description: string;
    date: string;
    tags: BlogPostTag[];
}

interface BlogPluginGlobalData {
    allPosts: BlogPostMeta[];
}

export default function useAllBlogPosts(): BlogPostMeta[] {
    const { allPosts } = usePluginData(
        "docusaurus-plugin-content-blog",
        "blog"
    ) as BlogPluginGlobalData;
    return allPosts;
}
