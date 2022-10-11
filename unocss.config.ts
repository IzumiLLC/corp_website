import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import { promises as fs } from 'fs'

export default defineConfig({
  theme: {},
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        izumi: {
          logo: () => fs.readFile('./src/assets/icons/izumi_logo.svg', 'utf-8'),
          withtype: () =>
            fs.readFile('./src/assets/icons/izumi_logo_vertical.svg', 'utf-8'),
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
