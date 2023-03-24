// unocss.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno,
} from 'unocss'
import type { Theme } from "@unocss/preset-uno";
import presetTheme from "unocss-preset-theme";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { rules, shortcuts, fontSize } from "./uno-rules";
import { darkColors, lightColors } from "./uno-radix-colors";
import transformerCompileClass from "@unocss/transformer-compile-class";



export default defineConfig<Theme>({
  // include: [/\.(tsx|mdx)($|\?)/],
  rules,
  shortcuts,
  safelist: [
    'c-gray1',
    'c-gray2',
    'c-gray3',
    'c-gray4',
    'c-gray5',
    'c-gray6',
    'c-gray7',
    'c-gray8',
    'c-gray9',
    'c-gray10',
    'c-gray11',
    'c-gray12',
    'bg-sky3',
    'bg-mint3',
    'bg-yellow3',
    'bg-teal3',
    'bg-slate3',
    'c-red11',
    'c-red12',
    'c-violet12',
    'c-orange9',
    'c-crimson9',
    'c-pink9',
    'c-plum9',
    'c-violet9',
    'c-purple9',
    'c-indigo9',
    'c-tomato11',
    'c-crimson11',
    'bg-grayA-9',
  ],
  transformers: [transformerVariantGroup(), transformerCompileClass({ classPrefix: 'clx-' })],
  theme: {
    fontSize,
    colors: lightColors.colors,
    breakpoints: {
      sm: '40rem',
    },
  },
  presets: [
    presetUno({
      dark: 'class',
      // variablePrefix: '',
    }),
    presetIcons({
      scale: 1.2,
    }),
    // @ts-ignore
    presetTheme<Theme>({
      selectors: {
        dark: ".dark",
        light: ".light",
      },
      prefix: "--rdx",
      theme: {
        dark: {
          colors: darkColors,
        } 
      },
    }),
  ],
});
