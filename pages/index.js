import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello , I'm <strong> Priya.</strong>
          </p>
          <p>I'm a 3rd year studenty in B.Tech CSE.</p>
          <p>
           Recently, I’ve also been exploring Next.js for front-end
          projects and building applications that combine backend logic with
          clean user interfaces.
        </p>
      </section>
    </Layout>
  );
}
