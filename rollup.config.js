import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/nanoid/index.browser.js',
    output: {
      file: './nanoid-esm.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];