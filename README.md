# Math is fun

math is so fun right

Sixth-grade math practice with hints and step-by-step solutions.

## Deploy on Render

Create a **Static Site**, connect this repository, and use:

- Build command: `npm ci --include=dev && npm run build:render`
- Publish directory: `dist-render`
- Root directory: leave blank
- Environment variable: `NODE_VERSION=22`
- No start command is needed.

Alternatively, create a Render Blueprint from this repository to load `render.yaml`.
If you previously created a Web Service, create a Static Site for this build.

The default `npm run build` produces a Cloudflare Worker for Sites. That output
is not the static site Render needs. `npm run build:render` reuses the same app
and produces HTML, CSS, and JavaScript without a Cloudflare runtime.

## Local development

`npm install`, then `npm run dev` for the Sites preview.
To preview the Render build, use `npm run build:render` followed by
`npm run preview:render`.
