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
- If you’ve used "<a href="…">" instead of "<Link href="…">" and clicked thw link, the background color will be cleared on link clicks because the browser does a full refresh.

## Code splitting and prefetching
- Next.js does code splitting automatically, so each page only loads what’s necessary for that page. 
- That means when the homepage is rendered, the code for other pages is not served initially.
- Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.
- in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

``` Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production). ```

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

# Creating the markdown files
- You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.
-First, install gray-matter which lets us parse the metadata in each markdown file.
``` npm install gray-matter ```

## Fetching data
- Next.js data fetching method is called **getStaticProps()**.

# Pre-rendering
- By default, Next.js pre-renders every page. 
- This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. 
- Pre-rendering can result in better performance and SEO.

## Two Forms of Pre-rendering
- Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

1. **Static Generation** is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
2. **Server-side Rendering** is the pre-rendering method that generates the HTML on each request.

### When to Use Static Generation v.s. Server-side Rendering
- We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

# Static Generation
## Static Generation with Data using getStaticProps
-  In Next.js, when you export a page component, you can also export an async function called **getStaticProps()**. If you do this, then:

    - **getStaticProps** runs at build time in production
    - Inside the function, you can fetch external data and send it as props to the page.

- Methods:
1. getStaticProps()
```
export default function Home(props) { ... }
 
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...
 
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

2. Fetch External API or Query Database
``` https://nextjs.org/learn/pages-router/data-fetching-getstaticprops-details ```

### Development vs. Production
- In development (npm run dev or yarn dev), getStaticProps runs on every request.
- In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths

### Hydration 
- Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive.
- If you want to shows updated data and the page content changes on every request,In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data. 

``` Note: In development mode (when you run npm run dev or yarn dev), pages are pre-rendered on every request. This also applies to Static Generation to make it easier to develop. When going to production, Static Generation will happen once, at build time, and not on every request. ```

# Server-Side Rendering
## Fetching Data at Request Time
- To use Server-side Rendering, you need to export **getServerSideProps()** instead of **getStaticProps()** from your page.
``` 
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
} 
```