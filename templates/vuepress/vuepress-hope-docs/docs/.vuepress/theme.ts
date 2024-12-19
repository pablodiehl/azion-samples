import { hopeTheme } from 'vuepress-theme-hope';

import { enNavbar } from './navbar/index.js';
import { enSidebar } from './sidebar/index.js';

export default hopeTheme(
  {
    hostname: 'https://your.domain',

    author: {
      name: 'Your name',
      url: 'https://your.domain',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: 'https://theme-hope-assets.vuejs.press/logo.svg',

    repo: 'vuepress-theme-hope/online-demo',

    docsDir: 'docs',

    locales: {
      '/': {
        // Navbar
        navbar: enNavbar,

        // Sidebar
        sidebar: enSidebar,

        footer: 'Default footer',

        displayFooter: true,

        metaLocales: {
          editLink: 'Edit this page on GitHub',
        },
      },
    },

    encrypt: {
      config: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '/demo/encrypt.html': ['1234'],
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '/zh/demo/encrypt.html': ['1234'],
      },
    },

    markdown: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      spoiler: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      codeTabs: true,

      // install katex or before enabling it
      // math: {
      //   type: "katex" // or "mathjax"
      // },
      // install chart.js before enabling it
      // chartjs: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install @vuepress/plugin-revealjs before enabling it
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },

    plugins: {
      // You should generate and use your own comment service
      comment: {
        provider: 'Giscus',
        repo: 'vuepress-theme-hope/giscus-discussions',
        repoId: 'R_kgDOG_Pt2A',
        category: 'Announcements',
        categoryId: 'DIC_kwDOG_Pt2M4COD69',
      },

      components: {
        components: ['Badge', 'VPCard'],
      },

      // uncomment these if you want a pwa
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
    },
  },
  { custom: true }
);