//https://stackoverflow.com/questions/35580710/using-sass-variables-in-a-vuejs-component
//https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
module.exports = {
  // devServer: {
  //   proxy: '',
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_vars";',
      },
    },
  },
  chainWebpack: (config) => {
    // Inline SVG files for SVGIcons
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use('html-loader')
      .loader('html-loader')
      .end();
  },
};
