import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NewsArticles from "../components/home/news-articles";
import "../css/index.css";

const IndexPage = () => {
  const { file: hero } = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/hero.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            src
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <section className="home-hero">
          <Img fluid={hero.childImageSharp.fluid} />
        </section>
        <NewsArticles />
        <section className="home-about">
          <h2 className="home__h2">About Custom Boy</h2>
          <p className="home-about__p">
            Custom Boy aims to provide you with the latest news from the Game
            Boy modding scene.
          </p>
          <p className="home-about__p">
            Custom Boy also stocks our custom made consoles that you can
            purchase. Whether you're looking for an original DMG Game Boy, a
            Game Boy Color or even a Game Boy Advance, we will constantly be
            updating and refreshing our stock.
          </p>
          <p className="home-about__p">
            Custom Boy provides a build-your-own service. We let you pick the
            case, screen, buttons and more. From this service, we will assemble
            your Game Boy and post it to you in our Custom Boy packaging.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
