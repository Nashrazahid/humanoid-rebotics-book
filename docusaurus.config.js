// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Rebotics: A Comprehensive Guide',
  tagline: 'Physical AI, Design, Control, and Applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://humanoid-rebotics-book.github',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages, this is usually '/<project-name>/'
  baseUrl: '/humanoid-rebotics-book/',

  // GitHub pages deployment config.
  organizationName: 'nashrazahid', // Usually your GitHub org/user name.
  projectName: 'humanoid-rebotics-book', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nashrazahid/humanoid-rebotics-book/edit/main/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Humanoid Rebotics Book',
        logo: {
          alt: 'Humanoid Rebotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Book Chapters',
          },
          {
            href: 'https://github.com/nashrazahid/humanoid-rebotics-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Chapters',
            items: [
              {
                label: 'Physical AI Foundations',
                to: '/docs/module1/chapter1-what-is-physical-ai',
              },
              {
                label: 'Humanoid Design',
                to: '/docs/module2/chapter4-mechanical-design-principles',
              },
              {
                label: 'Control Systems',
                to: '/docs/module3/chapter7-control-architectures',
              },
              {
                label: 'Locomotion & Applications',
                to: '/docs/module4/chapter10-humanoid-locomotion',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nashrazahid/humanoid-rebotics-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Humanoid Rebotics Book. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;