# Pages in Next.js
- In Next.js, a page is a React Component exported from a file in the pages directory.
- Pages are associated with a route based on their file name. For example, in development:

    - pages/index.js is associated with the / route.
    - pages/posts/first-post.js is associated with the /posts/first-post route. 
        - Then pages/posts/first-post component can have any name, but you must export it as a default export.

# Link Component
- In Next.js, you can use the Link Component next/link to link between pages in your application. 
- <Link> allows you to do client-side navigation and accepts props that give you better control over the navigation behavior.

## Client-Side Navigation
- The Link component enables client-side navigation between two pages in the same Next.js app.
- The browser does not load the full page and client-side navigation is working on usin <Link>.
- If you’ve used <a href="…"> instead of <Link href="…"> and clicked thw link, the background color will be cleared on link clicks because the browser does a full refresh.

## Code splitting and prefetching
- Next.js does code splitting automatically, so each page only loads what’s necessary for that page. 
- That means when the homepage is rendered, the code for other pages is not served initially.
- Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.
- in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

``` Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
```
### CSS Modules
- It automatically generates unique class names. As long as you use CSS Modules, you don’t have to worry about class name collisions.
- Furthermore, Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

### Using the Image Component
- Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. 
- Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.
- Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

### Global CSS
- In Next.js, you can add global CSS files by importing them from 'pages/_app.js'. You cannot import global CSS anywhere else.
- The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
- Any styles imported in _app.js will be applied globally, to all pages of the application.
