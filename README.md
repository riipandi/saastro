# Saastro

[![Contribution](https://badgen.net/badge/icon/Contributions%20Welcome?icon=bitcoin-lightning&label&color=black&labelColor=black)](https://github.com/riipandi/saastro/pulse)
[![Top Languages](https://img.shields.io/github/languages/top/riipandi/saastro)](https://github.com/riipandi/saastro)
[![License](https://img.shields.io/github/license/riipandi/saastro)](./LICENSE)
<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/f2fd46fe-530a-4cc9-bd81-f197ff54b322/deploy-status)](https://app.netlify.com/sites/saastro/deploys) -->

A clean and fast Astro SaaS Starter template.

## Getting started

Start by [generating a new repository based on this project](https://github.com/riipandi/saastro/generate).

After cloning (or downloading) the repository to your local machine, install all dependencies with the command

```sh
pnpm install
```

## Up and running

The project comes with Astro’s built-in development server. You can start the server with:

```sh
pnpm dev
```

To trigger a production build, use

```sh
pnpm build
```

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/riipandi/saastro&project-name=saastro&repo-name=saastro&env=PUBLIC_SITE_URL)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/riipandi/saastro)

#### Cloudflare Deployment

You need to add `NODE_VERSION` with value `18.17.1` or `20.11.0` on the environment variables setting.
Visit [Cloudflare pages docs](https://developers.cloudflare.com/pages/platform/build-configuration/)
for more information.

Example environment variables for the preview branch:

```env
PUBLIC_SITE_URL=${CF_PAGES_URL}
```

## Project Structure

MDX files are located in this folder:

```text
├── src/
│   ├── content/
│   │   └── docs
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `.output/`         |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Development

This project uses TypeScript for type checking, [Biome][biome] for code formatting
and linting which is configured in [`biome.json`](./biome.json). It's recommended
to get TypeScript set up for your editor and install an editor plugin (like the
[VSCode Biome plugin][vscode-biome]) to get auto-formatting on saving and get a
really great in-editor experience with type checking and auto-complete.

## Feedback

Please provide feedback! 🤗 Ideally by [filing an issue here](https://github.com/riipandi/saastro/issues) – or via a pull request.

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).

Copyrights in this project are retained by their contributors.
See the [license file](./LICENSE) for more information.

---

<sub>💝 Support this project via [GitHub sponsors][github-sponsors] or by subscribing on Polar.</sub>

<a href="https://polar.sh/riipandi" target="_blank" rel="noopener noreferrer">
  <picture>
    <source media="(prefers-color-scheme: dark)"
      srcset="https://polar.sh/embed/subscribe.svg?org=riipandi&label=Subscribe&darkmode"><img
      alt="Subscribe on Polar" src="https://polar.sh/embed/subscribe.svg?org=riipandi&label=Subscribe">
  </picture>
</a>

<!-- link reference definition -->
[riipandi-x]: https://x.com/intent/follow?screen_name=riipandi
[github-sponsors]: https://github.com/sponsors/riipandi
[biome]: https://biomejs.dev
