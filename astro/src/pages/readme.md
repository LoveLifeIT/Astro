## Static vs Server Mode

The Astro server can run in 2 modes: server and static

Static mode will generate static HTML files for all pages in the site. 
This mode is used by the Payload CMS to generate and publish the site to Azure.

Server mode will generate HTML on the fly for each request.
This mode is used to provide a live preview and is typically used in development and
to preview changes before publishing.

There are 2 `_slug.astro.*` files in the pages folder, one for each mode.
The Dockerfiles will copy the correct file to the pages folder of the image depending on whether
it's deployed as part of the Payload CMS server or as the standalone Astro server.

More information can be found here:
https://docs.astro.build/en/guides/server-side-rendering/#configure-server-or-hybrid