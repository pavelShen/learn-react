const postcssImport = require('postcss-import')
const postcssCssnext = require('postcss-cssnext')
const cssnano = require('cssnano')({ autoprefixer: false })

module.exports = {
  plugins: [
    postcssImport,
    postcssCssnext,
    cssnano,
  ],
}
