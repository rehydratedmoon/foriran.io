// unocss.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import type { Theme } from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetTheme from 'unocss-preset-theme';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { rules, shortcuts, fontSize } from './uno-rules';
import { darkTheme, lightTheme } from './uno-radix-colors';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig<Theme>({
  include: [/\.(tsx|mdx|jsx|js|md|astro|html)($|\?)/],
  rules,
  shortcuts,
  safelist: [
    'c-sand1',
    'c-sand2',
    'c-sand3',
    'c-sand4',
    'c-sand5',
    'c-sand6',
    'c-sand7',
    'c-sand8',
    'c-sand9',
    'c-sand10',
    'c-sand11',
    'c-sand12',
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
    'bg-sandA-9',
  ],
  transformers: [transformerVariantGroup(), transformerCompileClass({ classPrefix: 'clx-' })],
  theme: {
    fontSize,
    colors: lightTheme.colors,
    breakpoints: {
      sm: '40rem',
      md: '64rem',
    },
  },
  presets: [
    presetUno({
      dark: 'class',
      variablePrefix: '',
    }),
    presetIcons({
      scale: 1.2,
    }),
    presetTheme<Theme>({
      selectors: {
        dark: '.dark',
        light: '.light',
      },
      prefix: '--rdx',
      theme: {
        dark: darkTheme,
      },
    }),
  ],
});
