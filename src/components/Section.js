// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { TYPE_SECTION_SCHEMA, TYPE_SECTION_DEFAULTS } from '~types';
import { Heading } from '~components';
import { mq } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const Section = ({ heading, extended, children, divider }) => {
  return (
    <Wrapper {...(extended && { extendedCSS: extended })} data-divider-line={divider}>
      {heading && <Heading heading={heading} />}

      {children}
    </Wrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 80px auto;
  flex-wrap: wrap;
  display: flex;
  width: 100%;

  ${mq.max.tablet_base} {
    flex-direction: column;
  }

  ${mq.min.tablet_base} {
    flex-direction: row;
  }

  ${({ extendedCSS }) => extendedCSS && extendedCSS};
`;

// ─────────────────────────────────────────────────────────────────────────────
// PropTypes
// ─────────────────────────────────────────────────────────────────────────────

Section.defaultProps = TYPE_SECTION_DEFAULTS;
Section.propTypes = TYPE_SECTION_SCHEMA;
Section.displayName = 'Section';

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

export default Section;
