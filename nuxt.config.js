module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '小鹅通，专注内容付费的技术服务商',
    meta: [
      { charset: 'utf-8' },
      { name:"renderer",content:"webkit" },
      { 'http-equiv':"X-UA-Compatible",content:"IE=edge,chrome=1" },
      { name:"format-detection",content:"telephone=no" },
      { name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" },
      { name:"description",content:"小鹅通，为内容创业者提供技术支持，一分钟搭建自己的知识变现平台。服务自媒体、传统媒体、出版社、在线教育机构、线下培训机构以及知识盈余的个人。"},
      { name:"author",content:"小鹅技术" },
      { name:"keywords",content:"小鹅通,自媒体,新媒体,媒体,微信,微信公众平台,公众号,订阅号,服务号,粉丝,社群,用户画像,大数据,小程序,内容付费,知识服务,内容变现,知识变现,社群经济,粉丝经济,网红经济,流量变现,小鹅,小鹅通工具,KOL,大V,知识电商" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    
  },
  router: {
    middleware: ['user-agent']
  }
}
