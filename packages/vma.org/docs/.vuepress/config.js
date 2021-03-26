module.exports = {
  title: 'Vuepress theme neptune',
  description: 'A nice dark vuepress theme made with vuetify 2.0',
  theme: 'vuepress-theme-mdc',
  themeConfig: {
    nav: {
      '/': [
        { text: 'Home', link: '/' },
      ],
      '/zh/': [
        { text: '首页', link: '/zh' },
      ]
    },
    sidebar: {},
  },
  locales: {
    '/': {
      lang: 'en',
      name: 'English',
      title: 'Vuepress theme neptune',
      description: 'A nice dark vuepress theme made with vuetify 2.0',
      flag: '/img/en.png'
    },
    '/zh/': {
      lang: 'zh',
      name: '简体中文',
      title: 'vupresss黑色主题',
      description: '一个整洁简单的深色vuepress主题',
      flag: '/img/zh.png'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-3881136-7'
      }
    ],
    [
      'register-components',
      {
        componentsDir: 'components'
      }
    ]
  ]
}
