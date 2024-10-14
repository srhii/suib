import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'uk-UA',
  cleanUrls: true,
  title: "СУІБ 27001",
  description: "СУІБ 27001",
  head: [
    ['link', 
      { rel: 'icon', href: '/media/favicon.svg' }
    ]
  ],
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
      { text: 'Повідомити про інцидент', link: '/report' }
    ],
    aside: false,
    sidebar: [
      { text: 'Про СУІБ', link: '/about' },
      { text: 'Нормативно-правові акти', link: '/npa' },
      {
        text: 'Документи СУІБ',
        collapsed: false,
        items: [
          { text: 'Документи Комісії СУІБ', link: '/board' },
          { text: 'Організаційні заходи забезпечення інформаційної безпеки', link: '/org' },
          { text: 'Заходи забезпечення інформаційної безпеки, пов’язаної з персоналом', link: '/hr' },
          { text: 'Заходи забезпечення інформаційної безпеки фізичними заходами захисту', link: '/physical' },
          { text: 'Технологічні заходи забезпечення інформаційної безпеки', link: '/tech' },
        ]
      },
      {
        text: 'Навчання',
        collapsed: true,
        items: [
          { text: 'Навчання з питань інформаційної безпеки', link: '/is-training' },
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
