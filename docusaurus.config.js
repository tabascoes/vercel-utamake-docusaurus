module.exports = {
  title: 'UtamakeNext',
  tagline: '次を生きるうたまけ',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'utamake', // Usually your GitHub org/user name.
  projectName: 'vercel-utamake-docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UtamakeNext',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'wiki/home',
          label: 'Wiki',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'news', label: 'News', position: 'left'},
        {to: 'future', label: 'Future', position: 'left'},
        {
          href: 'https://utamake.minecraftr.us',
          label: 'UtamakePages',
          position: 'right',
        },
        {
          href: 'https://github.com/tabascoes/vercel-utamake-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'UtamakePages',
              href: 'https://utamake.minecraftr.us/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tabascoes/vercel-utamake-docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Utamake, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/vercel-utamake-docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/vercel-utamake-docusaurus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
