// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';
import React from 'react';

import { TYPE_HEADING_SCHEMA, TYPE_HEADING_DEFAULTS } from '~types';
import { useOnScreen } from '~hooks';
import { mq } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const Heading = ({ useOnScreenOptions, heading }) => {
  const [ref, isIntersecting] = useOnScreen(useOnScreenOptions);
  const { align, title, tag } = heading;

  const props = {
    isIntersecting,
    as: tag,
    align,
    ref,
  };

  return title && <HX {...props}>{title}</HX>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const HEADING_ALIGN_CENTER = css`
  margin-right: auto;
  margin-left: auto;
`;

const HEADING_ALIGN_RIGHT = css`
  margin-left: auto;
`;

const HEADING_ALIGN_LEFT = css`
  margin-right: auto;
`;

const HX = styled.h2`
  margin-bottom: 80px;
  position: relative;

  ${({ align }) => align === 'center' && HEADING_ALIGN_CENTER};
  ${({ align }) => align === 'right' && HEADING_ALIGN_RIGHT};
  ${({ align }) => align === 'left' && HEADING_ALIGN_LEFT};

  ${mq.max.tablet_base} {
  }

  &:before {
    width: ${({ isIntersecting }) => (isIntersecting ? '100%' : '0')};
    opacity: ${({ isIntersecting }) => (isIntersecting ? '1' : '0')};
    background-color: ${({ theme }) => theme.color.primary};
    transition: all 0.2s ease-in-out;
    transition-duration: 0.75s;
    position: absolute;
    bottom: -10px;
    content: '';
    height: 2px;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// PropTypes
// ─────────────────────────────────────────────────────────────────────────────

Heading.defaultProps = TYPE_HEADING_DEFAULTS;
Heading.propTypes = TYPE_HEADING_SCHEMA;
Heading.displayName = 'Heading';

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

export default Heading;
