import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { EnumChangefreq } from "sitemap";
import "dotenv/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Minh Duong",
  tagline: "Chia sẻ kiến thức về tài chính - công nghệ",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: process.env.APP_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.APP_BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.APP_ORGANIZATION_NAME, // Usually your GitHub org/user name.
  projectName: process.env.APP_PROJECT_NAME, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    forbiddenGiscusDocPaths: ["/docs/intro"],
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          breadcrumbs: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        googleTagManager: {
          containerId: "G-0DNVWKFWGV",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          changefreq: EnumChangefreq.WEEKLY,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env",
        systemvars: true,
      },
    ],
    [
      require.resolve("./plugins/custom-blog.ts"),
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogTitle: "Bài viết mới nhất",
        blogDescription: "Danh sách bài viết mới nhất",
        showReadingTime: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, { strict: false }]],
      },
    ],
    [
      require.resolve("./plugins/image-zoom/index.ts"),
      {
      },
    ],
    ["@docusaurus/theme-live-codeblock", {}],
  ],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      // Optional: see doc section below
      contextualSearch: false,
    },
    image: "img/personal/me.jpg",
    announcementBar: {
      id: "support_us",
      content:
        'Nếu bạn thích trang của mình, hãy đánh giá 5 sao <a target="_blank" rel="noopener noreferrer" href="https://github.com/teobatman00/minh-duong" class="tw-font-bold">tại đây</a>',
      backgroundColor: "#eef4fb",
      textColor: "#1f3f5e",
      isCloseable: true,
    },
    navbar: {
      title: "Minh Duong",
      logo: {
        alt: "Minh Dương logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Tài liệu",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          to: "/blog/tags",
          label: "Tags",
          position: "right",
        },
        {
          to: "/portfolio",
          label: "Dự án",
          position: "right",
        },
        {
          to: "/img-gallery",
          label: "Hình ảnh",
          position: "right",
        },
        {
          label: "Về tôi",
          position: "right",
          to: "/about-me",
        },
        {
          type: "custom-iconLink",
          position: "right",
          href: "https://github.com/teobatman00/",
          icon: "github",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Về tôi",
              to: "/about-me",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Minh Dương`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
