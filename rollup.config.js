// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/svelte-touch-to-mouse.ts',
  output: [
    {
      file:      './dist/svelte-touch-to-mouse.js',
      format:    'umd', // builds for both Node.js and Browser
      name:      'mapTouchToMouseFor', // required for UMD modules
      noConflict:true,
      sourcemap: true,
      exports:   'default',
    },{
      file:     './dist/svelte-touch-to-mouse.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [typescript(), terser({ format:{ comments:false, safari10:true } })],
};