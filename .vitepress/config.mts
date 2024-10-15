import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'uk-UA',
  cleanUrls: true,
  title: "СУІБ 27001",
  description: "СУІБ 27001",
  head: [
    ['link', 
      { rel: 'icon', href: '/favicon.svg' }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
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
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Пошук по сайту', // Search button text
                buttonAriaLabel: 'Пошук по сайту' // ARIA label for accessibility
              },
              modal: {
                displayDetails: 'Показати детальний список', // Option to show detailed list
                resetButtonTitle: 'Скинути пошук', // Reset search button
                backButtonTitle: 'Закрити пошук', // Back/close search button
                noResultsText: 'Нічого не знайдено за запитом', // No results message
                footer: {
                  selectText: 'Вибрати', // Select text for navigation
                  selectKeyAriaLabel: 'Введіть', // ARIA label for 'Enter' key
                  navigateText: 'Навігація', // Navigation instructions
                  navigateUpKeyAriaLabel: 'Вгору', // ARIA label for up arrow
                  navigateDownKeyAriaLabel: 'Вниз', // ARIA label for down arrow
                  closeText: 'Закрити', // Close button text
                  closeKeyAriaLabel: 'esc' // ARIA label for 'Esc' key
                }
              }
            }
          }
        }
      }
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
