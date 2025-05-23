// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';
import React from 'react';

import { RootContainer } from '~containers';

// import { Image, ImageBackground } from '~components';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { imageAcceptableFormats } from '~utils';
// const [SIZE_230_170] = imageAcceptableFormats;

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const ComponentsPage = ({
  data: {
    page: {
      frontmatter: { meta },
    },
    photoFluid,
    photoFixed,
  },
}) => (
  <RootContainer meta={meta}>
    <div
      style={{
        maxWidth: '640px',
        margin: '0 auto',
      }}
    >
      <p>Image Background</p>
      <br />
      <br />
      {/* <ImageBackground name="home-photo-1.jpg">
        <p>Tytuł strona główna dla hero</p>
      </ImageBackground> */}
      <br />
      <br />
      <p>Image with format and types: [fluid, fixed]</p>
      <br />
      <br />
      {/* <Image name="home-photo-1.jpg" type="fixed" format={SIZE_230_170} />
      <Image name="home-photo-1.jpg" type="fluid" /> */}
      <br />
      <br />
      <p>Gatsby image fluid and fixed</p>
      <br />
      <br />
      {/* <GatsbyImage image={photoFluid.childImageSharp.gatsbyImageData} alt={photoFluid.name} />
      <GatsbyImage image={photoFixed.childImageSharp.gatsbyImageData} alt={photoFixed.name} /> */}
      <br />
      <br />
    </div>
  </RootContainer>
);

export default ComponentsPage;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        ...META_FRAGMENT
      }
    }

    # photoFluid: file(relativePath: { eq: "home/home-photo-5.jpg" }) {
    #   ...CHILD_FLUID
    # }

    # photoFixed: file(relativePath: { eq: "home/home-photo-2.jpg" }) {
    #   ...CHILD_FIXED_400_225
    # }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────
