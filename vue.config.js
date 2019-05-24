module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        includePaths: ['./src/assets/css'],
        data: ` @import 'test';`
      }
    }
  }
}
