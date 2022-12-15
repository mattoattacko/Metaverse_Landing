## Metaversus Demo Landing Page

Since we are running Next13, we need to add the following to the `next.config.js` file:

  const nextConfig = {
  experimental: {
    reactStrictMode: true,
    experimental: { appDir: false },
  },
  };

appDir is set to 'true' if we want to run it on localhost, but we need to set it to 'false' if we want to run it on the server.

We also need to add the following (&& next export) to the `package.json` file in order to export the static files:

  "scripts": {
    "build": "next build && next export",
  },