import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import babel from '@rollup/plugin-babel'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

const packages = require('./package.json')

const ENV = process.env.NODE_ENV

const paths = {
  input: {
    root: ENV === 'example'
      ? 'example/index.js'
      : 'src/index.js'
  },
  output: {
    root: ENV === 'example'
      ? 'example/dist/'
      : 'dist/'
  }
}
const filename = packages.name.split('/').pop()
const fileNames = {
  development: `${filename}.js`,
  example: 'example.js',
  production: `${filename}.min.js`
}

const fileName = fileNames[ENV]

const config = {
  input: './src/index.js',
  output: {
    file: `dist/${fileName}`,
    format: 'umd',
    name: 'pointPolygonTest'
  },
  plugins: [
    resolve(),
    commonjs(),
    eslint({
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**'
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    (ENV === 'production' && uglify())
  ]
}

export default config
