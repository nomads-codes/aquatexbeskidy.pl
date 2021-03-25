// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';
import React from 'react';

import { Hero2, Hero, FeaturesSection, Reviews, Toggler } from '~components';
import { RootContainer } from '~containers';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const HomePage = ({ data: { advantages, howWorks, features, reviews, hero, meta, faq } }) => {
  return (
    <RootContainer meta={meta.frontmatter.meta}>
      <Hero hero={hero.frontmatter.hero} />

      {(({ heading, list } = features.frontmatter.features) => (
        <FeaturesSection heading={heading} list={list} divider />
      ))()}

      <Reviews reviews={reviews.frontmatter.reviews} />

      {(({ heading, list } = advantages.frontmatter.advantages) => (
        <FeaturesSection heading={heading} list={list} divider />
      ))()}

      <Hero2 hero2={howWorks.frontmatter.howWorks} />
      <Toggler faq={faq.frontmatter.faq} />
    </RootContainer>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    meta: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        ...META_FRAGMENT
      }
    }

    faq: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        faq {
          headline
          list {
            title
            content
            icon
          }
        }
      }
    }

    howWorks: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        howWorks {
          heading
          image {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {
                  duotone: { highlight: "#176ED3", shadow: "#176ED3", opacity: 90 }
                }
                breakpoints: [320, 768, 1024, 1200]
              )
            }
            publicURL
            name
            id
          }
          buttons {
            title
            type
            link
          }
        }
      }
    }

    advantages: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        advantages {
          heading {
            title
            align
            tag
          }
          list {
            title
            icon
            description
          }
        }
      }
    }

    features: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        features {
          heading {
            title
            align
            tag
          }
          list {
            title
            icon
            link {
              title
              url
            }
          }
        }
      }
    }

    hero: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        hero {
          title
          subtitle
          image {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {
                  duotone: { highlight: "#176ED3", shadow: "#176ED3", opacity: 40 }
                }
                breakpoints: [320, 768, 1024, 1200]
              )
            }
            publicURL
            name
            id
          }
          buttons {
            title
            type
            link
          }
        }
      }
    }

    reviews: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        reviews {
          description
          image {
            childrenImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: CENTER }
                breakpoints: [320, 768, 1024]
                placeholder: NONE
                height: 337
                width: 600
                quality: 75
              )
            }
            publicURL
            name
            id
          }
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

export default HomePage;
