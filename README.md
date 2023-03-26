# For IRAN

[website: foriran.io](https://foriran.io)

A place to gather and organize content about Iran Revolution.

## 🤝  Contributing

To contribute with the content please check [our notion](https://www.notion.so/1536c3b436584a57bcd284cffafb4dee).

To contribute with the website please create an issue and state what you are interested to work on.

⚠️ For your and others' safety use anonymous github account plus anonymous name and emails in your git config. 

## 🗺️ Roadmap

- [x] publish website
- [ ] PWA
- [ ] RSS
- [ ] Telegram Instant View
- [ ] Email Campaign Page
- [ ] ...

## 🚀 Project Structure

We used Astro for frontend because it's simple and fast. Also you can use components from react/vue/solid/svelte/ ... using adaptors.

Astro is quite new but you can get started very quickly, if you have worked with any other frontend frameworks. Take a look at [Astro Docs](https://astro.build).

## About Astro 

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

⚠️ Please use `pnpm` instead of `npm` and `yarn`. Get pnpm [here](https://pnpm.io/)

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |
