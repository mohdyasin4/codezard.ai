import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Required: Add the preset to your config.
  presets: ['@shadow-panda/preset'],

  // Optional: Enable CSS reset
  preflight: true,

  // Use React
  jsxFramework: 'react',

  // Optional: Emit artifacts to `node_modules` as a package.
  // The copy-paste component examples use `@shadow-panda/styled-system` as the import path of the generated files.
  // If you choose not to use this option, you should rewrite your component imports as needed.
  // @see https://panda-css.com/docs/references/config#emitpackage
  emitPackage: true,
  outdir: '@shadow-panda/styled-system',

  // Other configurations and overrides...
})
