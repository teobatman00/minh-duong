import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Minh Duong",
  tagline: "Chia sẻ kiến thức về tài chính - công nghệ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://teobatman00.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/minh-duong/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "teobatman00", // Usually your GitHub org/user name.
  projectName: "teobatman00.github.io", // Usually your repo name.

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
    forbiddenGiscusDocPaths: [
      '/docs/intro'
    ],
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
          showLastUpdateAuthor: true
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          changefreq: 'weekly'
        }
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
      "docusaurus2-dotenv",
      {
        path: "./.env",
      },
    ],
    [
      require.resolve("./plugins/custom-blog.ts"),
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
        blogTitle: 'Bài viết mới nhất',
        blogDescription: 'Danh sách bài viết mới nhất',
        showReadingTime: true
      },
    ]
  ],
  themeConfig: {
    // Replace with your project's social card
    docs: {
      sidebar: {
        hideable: true
      }
    },
    algolia: {
      appId: 'K4ET45IDVU',
      // Public API key: it is safe to commit it
      apiKey: '2862bf4d96b1bf5857fda28d7a812b35',

      indexName: 'minh_duong_blog',

      // Optional: see doc section below
      contextualSearch: true,
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
          label: "Tài liệu",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          to: "/blog/tags",
          label: "Tags",
          position: "right"
        },
        {
          label: "Về tôi",
          position: "right",
          to: "/about-me"
        },
        {
          href: "https://github.com/facebook/docusaurus",
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
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Minh Dương`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
