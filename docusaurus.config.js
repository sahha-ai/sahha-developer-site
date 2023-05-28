// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const redocConfig = [
    'redocusaurus',
    {
      // Plugin Options for loading OpenAPI files
      specs: [
        {
          spec: 'https://sandbox-api.sahha.ai/swagger/v1/swagger.json',
          route: '/api/',
        },
      ],
      // Theme Options for modifying how redoc renders them
      theme: {
        // Change with your site colors
        primaryColor: '#333242',
        primaryColorDark: '#ffffff',
      },
    },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sahha Developer',
  tagline: 'See what you can build with Sahha',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developer.sahha.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sahha-ai', // Usually your GitHub org/user name.
  projectName: 'sahha-developer-site', // Usually your repo name.
  deploymentBranch: 'master',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogTitle: 'Sahha | News',
          blogDescription: 'How digital-phenotyping, artificial intelligence and machine learning will change the world of product development.',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    redocConfig
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'Sahha Developer',
        logo: {
          alt: 'Sahha Icon',
          src: 'img/sahha-logo-light.svg',
          srcDark: 'img/sahha-logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/api/', label: 'API', position: 'left'},
          {to: '/blog/', label: 'Blog', position: 'left'},
          /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Install the SDK',
                to: '/docs/category/install-the-sdk',
              },
              {
                label: 'Try the Demo',
                to: '/docs/try-the-demo',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sahha-ai',
              },
              {
                label: 'Substack',
                href: 'https://sahha.substack.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sahha Pty Ltd`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift', 'kotlin', 'dart'],
      },
    }),
};

module.exports = config;
