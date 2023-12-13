import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

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
          changefreq: "weekly",
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
        blogTitle: "✏ Bài viết mới nhất ✏",
        blogDescription: "Danh sách bài viết mới nhất",
        showReadingTime: true,
      },
    ],
    [
      require.resolve("./plugins/image-zoom/index.ts"),
      {
        selector: "img",
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: "#BADA55",
          scrollOffset: 0,
          container: "#zoom-container",
          template: "#zoom-template",
        },
      },
    ],
    ["@docusaurus/theme-live-codeblock", {}],
  ],
  themeConfig: {
    // Replace with your project's social card
    // CSS selector to apply the plugin to, defaults to '.markdown img'

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
    image: "img/docusaurus-social-card.jpg",
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
          label: "📄 Tài liệu",
        },
        { to: "/blog", label: "📝 Blog", position: "right" },
        {
          to: "/blog/tags",
          label: "📎 Tags",
          position: "right",
        },
        {
          to: "/portfolio",
          label: "🎥 Dự án",
          position: "right",
        },
        {
          to: "/img-gallery",
          label: "📸 Hình ảnh",
          position: "right",
        },
        {
          label: "👦 Về tôi",
          position: "right",
          to: "/about-me",
        },
        {
          href: "https://github.com/teobatman00/",
          label: "GitHub",
          position: "right",
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
