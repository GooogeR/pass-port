const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
      }
    }
  }
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pass-port/' : '/'
};
