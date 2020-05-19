//https://stackoverflow.com/questions/35580710/using-sass-variables-in-a-vuejs-component
//https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_vars";',
      },
    },
  },
};
