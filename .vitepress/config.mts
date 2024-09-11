import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'uk-UA',
  cleanUrls: true,
  title: "СУІБ",
  description: "СУІБ",
  head: [['link', { rel: 'icon', href: '/media/favicon.svg' }]],
  themeConfig: {
    logo: '/media/logo.svg',
    darkModeSwitchTitle: 'Увімкнути темну тему',
    lightModeSwitchTitle: 'Увімкнути світлу тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Прокрутити вгору',
    outlineTitle: 'Зміст сторінки',
    darkModeSwitchLabel: 'Змінити тему',
    outline: {
      level: [2, 3]
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Основний сайт', link: 'https://www.skarb.com.ua/' }
    ],
    sidebar: [
      {
        text: 'Приклади',
        collapsed: true,
        items: [
          { text: 'Приклади Markdown', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Навчання',
        collapsed: true,
        items: [
          { text: 'Основи кібергігієни', link: '/cyberhygiene' },
        ]
      },
      { text: 'Терміни та визначення', link: '/vocabulary' }
    ],
    docFooter: {
      prev: false,
      next: false
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
