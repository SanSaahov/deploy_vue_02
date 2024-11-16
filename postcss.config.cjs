module.exports = {
   plugins: {
      autoprefixer: {},
      cssnano: {},
      // 'desktop-first' , 'mobile-first'
      'postcss-sort-media-queries': { sort: 'mobile-first' }
   },
}
