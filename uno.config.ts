// unocss.config.ts
import { defineConfig } from "@unocss/webpack";
import presetUno from "@unocss/preset-uno";
import type { Theme } from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetTheme from "unocss-preset-theme";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { rules, shortcuts, fontSize } from "./uno-rules";
import { darkTheme, lightTheme } from "./uno-radix-colors";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig<Theme>({
  rules,
  shortcuts,
  safelist: [
    "bg-sky3",
    "bg-mint3",
    "bg-yellow3",
    "bg-teal3",
    "bg-slate3",
    "c-red11",
    "c-red12",
    "c-tomato10",
    "c-tomato11",
    "bg-grayA-9",
  ],
  transformers: [transformerVariantGroup(), transformerCompileClass({ classPrefix: "clx-" })],
  theme: {
    fontSize,
    colors: lightTheme.colors,
  },
  presets: [
    presetUno({
      dark: "class",
      variablePrefix: "",
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
        dark: darkTheme,
      },
    }),
  ],
});
