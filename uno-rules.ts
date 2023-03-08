import type { Rule, UserShortcuts } from "@unocss/core";

export const rules: Rule[] = [
  // font size utility classes without affecting line height
  ["fs-2xs", { "font-size": "0.6rem" }],
  ["fs-xs", { "font-size": "0.75rem" }],
  ["fs-sm", { "font-size": "0.875rem" }],
  ["fs-md", { "font-size": "1rem" }],
  ["fs-base", { "font-size": "1rem" }],
  ["fs-lg", { "font-size": "1.125rem" }],
  ["fs-xl", { "font-size": "1.25rem" }],
  ["fs-2xl", { "font-size": "1.5rem" }],
  ["fs-3xl", { "font-size": "1.875rem" }],
  ["fs-4xl", { "font-size": "2.25rem" }],
  ["fs-5xl", { "font-size": "3rem" }],
  ["fs-6xl", { "font-size": "3.75rem" }],
  ["fs-7xl", { "font-size": "4.5rem" }],
  ["fs-8xl", { "font-size": "6rem" }],
  ["fs-9xl", { "font-size": "8rem" }],
  // line height utility classes
  ["lh-2xs", { "line-height": "calc( var(--light-height) * 0.7)" }],
  ["lh-xs", { "line-height": "calc( var(--light-height) * 0.8)" }],
  ["lh-sm", { "line-height": "calc( var(--light-height) * 0.9)" }],
  ["lh-md", { "line-height": "var(--light-height)" }],
  ["lh-base", { "line-height": "var(--light-height)" }],
  ["lh-lg", { "line-height": "calc( var(--light-height) * 1.1)" }],
  ["lh-xl", { "line-height": "calc( var(--light-height) * 1.2)" }],
  ["lh-2xl", { "line-height": "calc( var(--light-height) * 1.3)" }],
  ["lh-3xl", { "line-height": "calc( var(--light-height) * 1.4)" }],
  ["lh-4xl", { "line-height": "calc( var(--light-height) * 1.5)" }],
  ["lh-5xl", { "line-height": "calc( var(--light-height) * 1.6)" }],
  ["lh-6xl", { "line-height": "calc( var(--light-height) * 1.7)" }],
  ["lh-7xl", { "line-height": "calc( var(--light-height) * 1.8)" }],
  ["lh-8xl", { "line-height": "calc( var(--light-height) * 1.9)" }],
  ["lh-9xl", { "line-height": "calc( var(--light-height) * 2)" }],
  // letter spacing utility classes
  ["ls-tightest", { "letter-spacing": "-0.025em" }],
  ["ls-tighter", { "letter-spacing": "-0.0125em" }],
  ["ls-tight", { "letter-spacing": "-0.00625em" }],
  ["ls-normal", { "letter-spacing": "0" }],
  ["ls-wide", { "letter-spacing": "0.00625em" }],
  ["ls-wider", { "letter-spacing": "0.0125em" }],
  ["ls-widest", { "letter-spacing": "0.025em" }],
  ["rel", { position: "relative" }],
  ["abs", { position: "absolute" }],
  ["text-2xs", { "font-size": "0.6rem", "line-height": "1.25rem" }],
  ["max-w-article", { "max-width": "60ch" }],
  ["max-w-page", { "max-width": "100rem" }],
  ["grd", { "background-image": "var(--gradient)" }],
  ["grd-sm", { "background-image": "var(--gradient-sm)" }],
  [/^content-(.*)$/, ([, cnt]) => ({ content: `"${cnt}"` })],
  [
    /^grid-min-col-(.*)$/,
    ([, minColWidth]) => ({ "grid-template-columns": `repeat(auto-fill, minmax(min(${minColWidth}, 100%), 1fr))` }),
  ],
  [/^g-auto-rows-\[(.*)\]$/, ([, val]) => ({ "grid-auto-rows": val })],
  [/^g-auto-flow-\[(.*)\]$/, ([, val]) => ({ "grid-auto-flow": val })],
  [/^g-auto-cols-\[(.*)\]$/, ([, val]) => ({ "grid-auto-columns": val })],
  [/^g-area-\[(.*)\]$/, ([, val]) => ({ "grid-area": val })],
  [/^g-row-\[(.*)\]$/, ([, val]) => ({ "grid-row": val })],
  [/^g-col-\[(.*)\]$/, ([, val]) => ({ "grid-column": val })],
  // [/^g-areas-\[(.*)\]$/, ([, val]) => ({ "grid-template-areas": val })],
  [
    /^g-cols-\[(.*)\]$/,
    ([, val]) => {
      const cols = val
        .trim()
        .split("|")
        .map((col) => col.replaceAll(``, "").replaceAll(`'`, "").replaceAll("_", " ").trim())
        .map((v) => `${v.trim()}`)
        .join(" ");
      return { "grid-template-columns": cols };
    },
  ],
  [
    /^g-rows-\[(.*)\]$/,
    ([, val]) => {
      const rows = val
        .trim()
        .split("|")
        .map((row) => row.replaceAll(``, "").replaceAll(`'`, "").replaceAll("_", " ").trim())
        .map((v) => `${v.trim()}`)
        .join(" ");
      return { "grid-template-rows": rows };
    },
  ],
  [
    /^g-areas-\[(.*)\]$/,
    ([, val]) => {
      const areas = val
        .trim()
        .split("|")
        .map((area) => area.replaceAll(``, "").replaceAll(`'`, "").replaceAll("_", " ").trim())
        .map((v) => `'${v.trim()}'`)
        .join(" ");
      return { "grid-template-areas": areas };
    },
  ],
];
export const shortcuts: UserShortcuts = [
  {
    "iso-rel": "relative isolate",
    field: "px-2 py-1 rd b-0 bg-gray3",
    chip: "no-underline rd-xl px-4 py-2 bg-gray3 c-gray11 hover:(bg-gray4)",
    "chip-link": "chip data-[in-path]:(bg-orange4 c-orange11)",
    jc: "justify-center",
    jb: "justify-between",
    ic: "items-center",
    ac: "items-center",
    "tab-link": "b rd-lg text-center  px-4 py-2 hover:(b-orange7 c-orange11) data-[in-path]:(b-orange7 c-orange11)",
    "tab-radix": "b b-orange6 c-orange11 rd-2xl hover:(b-orange7 c-orange12)  data-[state=active]:(bg-orange3)",
    "btn-disabled": "!c-gray10 !bg-gray5 !b-gray5 !cursor-not-allowed",
    "btn-common": "b-1 text-xl fw-700 px-6 py-2 rd-xl cursor-pointer",
    "btn-prm":
      "btn-common  b-prm9 bg-prm9 c-white  hover:(bg-prm10 b-prm10) focus-visible:(bg-prm10 b-prm10) active:(bg-prm11 b-prm11) disabled:(btn-disabled)",
    "btn-prm-grd":
      "btn-common b-transparent bg-gradient-to-l from-violet9 to-purple9  bg-prm9 c-white  hover:(bg-prm10 bg-gradient-to-l from-violet10 to-purple10) focus-visible:(bg-prm10 bg-gradient-to-l from-violet10 to-purple10) active:(bg-prm11 bg-gradient-to-l from-violet11 to-purple11) disabled:(btn-disabled)",
    btn: " btn-common b-gray10 bg-gray9 c-white  hover:(bg-gray10 b-gray10) focus-visible:(bg-gray10 b-gray10) active:(bg-gray11 b-gray11) disabled:(btn-disabled)",
    "btn-ghost-prm":
      "btn-common b-gray9 c-gray11 active:(b-gray11 bg-gray1) hover:(b-gray9  bg-gray1)  focus-visible:(b-gray9  bg-gray1) disabled:(btn-disabled)",
    "btn-ghost":
      "btn-common b-gray9 c-gray11 active:(b-gray11 bg-gray1) hover:(b-gray9  bg-gray1)  focus-visible:(b-gray9  bg-gray1) disabled:(btn-disabled)",
    "btn-link-prm":
      "btn-common b-transparent c-prm11 active:(b-orange3 bg-orange3) hover:(b-orange2  bg-orange2) focus-visible:(b-orange2 bg-orange2) disabled:(btn-disabled)",
    "btn-text":
      "btn-common b-transparent bg-transparent c-gray12 hover:(bg-gray2 b-gray2) focus-visible:(bg-gray2 b-gray2) active:(bg-gray3 b-gray3) disabled:(btn-disabled)",
    "btn-danger":
      "btn-common b-red10 bg-red10 c-white  hover:(bg-red9 b-red9) focus-visible:(bg-red9 b-red9) active:(bg-red11 b-red9) disabled:(btn-disabled)",
    "snack-common":
      "text-sm b-1.5  b-r-6  rd-xl p-4 pis-12 rel isolate before:text-base before:inline-block before:content-none before:vertical-text-top before:absolute before:top-5 before:right-4",
    "snack-info": "snack-common b-blue7 bg-blue3 c-blue11 before:i-ph-info",
    "snack-warning": "snack-common b-yellow7 bg-yellow3 c-yellow11 before:i-ph-warning",
    "snack-success": "snack-common b-green7 bg-green3 c-green11 before:i-ph-check-circle",
    "snack-error": "snack-common b-red7 bg-red3 c-red11 before:i-ph-x-circle",
    "snack-danger": "snack-common b-red7  bg-red3 c-red11 before:i-ph-warning-octagon ",
    "info-line": "bf-i-ph-info before:c-blue11 before:opacity-100 text-sm c-blue10 ",
    "success-line": "bf-i-ph-check-circle before:c-green11 before:opacity-100 text-sm c-green10",
    "warning-line": "bf-i-ph-warning before:c-yellow11 before:opacity-100 text-sm c-yellow10",
    "error-line": "bf-i-ph-x-circle before:c-red11 before:opacity-100 text-sm c-red10",
    "danger-line": "bf-i-ph-warning-octagon before:c-red11 before:opacity-100 text-sm c-red10",
    snack: "b b-gray7 bg-gray3 c-gray11 rd-lg p-4 text-sm",
    H1: "text-4xl fw-900 ls-tightest c-gray12",
    H2: "text-3xl fw-900 ls-tight c-gray12",
    H3: "text-xl fw-900 ls-wide c-gray12 ",
    H4: "fw-900 ls-widest c-gray12",
    text: "fw-400 text-base",
    "text-note": "c-gray11 text-sm",
    "text-tiny-note": "c-gray11 fs-xs",
    "card-ghost": "rd-xl p-4 b b-gray6",
    "card-solid": "rd-xl p-4 b b-transparent bg-gray9 ",
    "table-header-cell":
      "b-gray5 px-2 py-1 pt-2 first-of-type:(pis-4 rd-tl-xl)  last-of-type:(pie-4  last-of-type:rd-tr-xl)  b-e-1 b-b-1",
    "table-body-cell": "px-2 py-1 first-of-type:pis-4  last-of-type:pie-4 b-e-1 b-b-1 b-gray5",
    "table-footer-cell":
      "b-gray5 px-2 py-1 pb-3 first-of-type:(pis-4 rd-bl-xl)  last-of-type:(pie-4  last-of-type:rd-br-xl) b-e-1 ",
  },
  [
    /^bf-i-(.*)$/,
    ([, iconName]) =>
      `before:opacity-50 before:mie-5 empty:before:mie-0 before:vertical-middle before:scale-120 before:content-none before:inline-block before:i-${iconName}`,
  ],
  [
    /^af-i-(.*)$/,
    ([, iconName]) =>
      `after:opacity-50 after:mis-5 empty:after:mis-0 after:vertical-middle after:scale-120  after:content-none after:inline-block after:i-${iconName}`,
  ],
  [/^ol-(.*)$/, ([, val]) => `outline-${val}`],
  [/^ol-(.*)$/, ([, val]: string[]) => `outline-${val}`],
];

export const fontSize: Record<string, string | [string, string]> = {
  xs: ["0.75rem", "1.5rem"],
  // xs: ["0.75rem", "1rem"], // tailwinds default
  sm: ["0.875rem", "1.75rem"],
  // sm: ["0.875", "1.25rem"], // tailwinds default
  md: ["1rem", "2rem"],
  // md: ["1rem", "1.5rem"], // tailwinds default
  base: ["1rem", "2rem"],
  // base: ["1rem", "1.5rem"], // tailwinds default
  lg: ["1.125rem", "2.5rem"],
  // lg: ["1.125rem", "1.75rem"], // tailwinds default
  xl: ["1.25rem", "2.5rem"],
  // xl: ["1.25rem", "1.75rem"], // tailwinds default
  "2xl": ["1.5rem", "3rem"],
  // "2xl": ["1.25rem", "2rem"], // tailwinds default
  "3xl": ["1.875rem", "3.5rem"],
  // "3xl": ["1.25rem", "2.25rem"], // tailwinds default
  "4xl": ["2.25rem", "4rem"],
  // "4xl": ["1.25rem", "2.5rem"], // tailwinds default
  "5xl": ["3rem", "1.5"],
  // "5xl": ["1.25rem", "1"], // tailwinds default
  "6xl": ["3.75rem", "1.5"],
  // "6xl": ["1.25rem", "1"], // tailwinds default
  "7xl": ["4.5rem", "1.5"],
  // "7xl": ["1.25rem", "1"], // tailwinds default
  "8xl": ["6rem", "1.5"],
  // "8xl": ["1.25rem", "1"], // tailwinds default
  "9xl": ["8rem", "1.5"],
  // "9xl": ["1.25rem", "1"], // tailwinds default
};
