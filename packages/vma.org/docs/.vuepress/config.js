module.exports = {
  title: 'Vue Material Admin Document',
  description: 'Vue Material Admin Document',
  themeConfig: {
    nav: {
      '/': [
        { text: 'Home', link: '/' },
        { text: 'component', link: '/components/cascader.html' },
      ],
      '/zh/': [
        { text: '首页', link: '/zh' },
        { text: '组件', link: '/zh/components/cascader.html' },
      ],
    },
    sidebar: {},
    github: 'https://github.com/tookit/vmajs',

  },
  locales: {
    '/': {
      lang: 'en',
      name: 'English',
      title: 'Vue Material Admin Document',
      description: 'Vue Material admin dashboard built with vuetify 2.x',
      flag: '/img/en.png'
    },
    '/zh/': {
      lang: 'zh',
      name: '简体中文',
      title: 'Vue Material Admin 文档',
      description: 'Material Design 后台模板',
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
        ga: 'G-F0H07N62GC'
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
