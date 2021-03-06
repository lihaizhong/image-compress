import path from 'path'
import BannerPlugin from 'rollup-plugin-banner'
import JSONPlugin from 'rollup-plugin-json'
import babelPlugin from 'rollup-plugin-babel'
import resolvePlugin from 'rollup-plugin-node-resolve'
import commonjsPlugin from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'dist/iqo.es.js',
    name: 'IQO',
    format: 'es'
  },
  plugins: [
    JSONPlugin(),
    babelPlugin({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolvePlugin(),
    commonjsPlugin({
      include: 'node_modules/**'
    }),
    BannerPlugin({
      file: path.resolve(__dirname, 'banner.txt'),
      encoding: 'utf-8'
    })
  ]
}
