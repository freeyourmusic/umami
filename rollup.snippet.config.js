import 'dotenv/config';
import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'tracker/snippet.js',
  output: {
    file: 'public/snippet.js',
    format: 'iife',
  },
  plugins: [resolve(), buble(), terser({ compress: { evaluate: false } })],
};
