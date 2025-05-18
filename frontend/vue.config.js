module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/'
};