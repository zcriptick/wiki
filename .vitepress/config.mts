import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/",
  title: "3squad wiki",
  description: "All about 3squad projects",
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/zcriptick/wiki-3squad/refs/heads/main/trz_logo.png' }]],
  vite: {
    server: {
      allowedHosts: ['3sqd.ru']
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'TRZ Team', link: '/en/trz-team' },
          { text: 'ZXRP', link: '/en/zxrp' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'TRZ Team',
              items: [
                { text: 'Start', link: '/en/trz-team' },
              ],
            },
            {
              text: 'ZXRP',
              items: [
                { text: 'Start', link: '/en/zxrp' },
                { text: 'Updates', link: '/en/zxrp/updates/' },
                { text: 'Available items', link: '/en/zxrp/renames/' }
              ]
            },
          ]
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'TRZ Team', link: '/ru/trz-team' },
          { text: 'ZXRP', link: '/ru/zxrp' }
        ],
        sidebar: {
          '/ru/': [
            {
              text: 'TRZ Team',
              items: [
                { text: 'Начало', link: '/ru/trz-team' },
              ],
            },
            {
              text: 'ZXRP',
              items: [
                { text: 'Начало', link: '/ru/zxrp' },
                { text: 'Обновления', link: '/ru/zxrp/updates/' },
                { text: 'Доступные предметы', link: '/ru/zxrp/renames/' }
              ]
            },
          ]
        }
      }

    }
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
          { text: 'Начало', link: '/zxrp' },
          { text: 'Доступные предметы', link: '/zxrp/renames/' }
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
      { icon: "github", link: "https://github.com/zcriptick/wiki-3squad" }
    ]
  }
})
