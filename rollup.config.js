import {terser} from 'rollup-plugin-terser';

export default {
  input: 'build/index.js',
  output: {
    file: 'dist/graphlib.js',
    format: 'umd',
    name: 'graphlib'
  },
  plugins: [terser()]
};