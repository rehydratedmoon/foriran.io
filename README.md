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

We used Astro for frontend becasue

- it's simple and fast. It's crucial, specially for people in Iran on slow internet. 

![image](https://user-images.githubusercontent.com/115207762/228970569-8e01bac5-4e92-4314-acdc-c53e71ba91d8.png)

- It has greate stuff to manage content.

- Also you can use components from react/vue/solid/svelte/... inside Astro using adaptors. So more people can contribute.

Astro is quite new but you can get started very quickly, if you have some frontend experience. Take a look at [Astro Docs](https://astro.build).

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
