import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "3squad wiki",
  description: "All about 3squad projects",
  vite: {
    server: {
      allowedHosts: ['wiki.3sqd.ru']
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TRZ Team', link: '/trz-team/' },
      // { text: 'RS Engine', link: '/rs-engine' },
      { text: 'ZXRP', link: '/zxrp' },
      // { text: 'Trezv', link: '/trezv' }
    ],

    sidebar: [
      {
        text: 'TRZ Team',
        items: [
          { text: 'Начало', link: '/trz-team' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      //{
      //  text: 'RS Engine',
      //  items: [
      //    { text: 'Getting Started', link: '/guide/getting-started' },
      //  ]
      //},
      {
        text: 'ZXRP',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
      //{
      //  text: 'Trezv',
      //  items: [
      //    { text: 'Getting Started', link: '/guide/getting-started' },
      //  ]
      //},
    ],

    socialLinks: [
      { icon: 'modrinth', link: 'https://modrinth.com/organization/trz-team' },
      { icon: "discord", link: "https://discord.gg/sYFxHqkRva" },
    ]
  }
})
