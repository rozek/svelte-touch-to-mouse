// see https://github.com/rozek/build-configuration-study

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
      plugins:   [terser({ format:{ comments:false, safari10:true } })],
    },{
      file:     './dist/svelte-touch-to-mouse.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [
    typescript(),
  ],
};