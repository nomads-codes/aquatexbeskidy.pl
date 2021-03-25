// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

import { TYPE_USEONSCREEN_SCHEMA, TYPE_USEONSCREEN_DEFAULTS } from '~types';

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────

export const headingsArray = ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
export const alignsArray = ['', 'left', 'right', 'center'];

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

export const TYPE_HEADING_COMON_SCHEMA = {
  heading: PropTypes.shape({
    align: PropTypes.oneOf(alignsArray),
    tag: PropTypes.oneOf(headingsArray),
    title: PropTypes.string,
  }),
};

export const TYPE_HEADING_COMON_DEFAULTS = {
  heading: {
    align: 'left',
    tag: 'h2',
    title: null,
  },
};

export const TYPE_HEADING_SCHEMA = {
  ...TYPE_USEONSCREEN_SCHEMA,
  ...TYPE_HEADING_COMON_SCHEMA,
};

export const TYPE_HEADING_DEFAULTS = {
  ...TYPE_USEONSCREEN_DEFAULTS,
  ...TYPE_HEADING_COMON_DEFAULTS,
};
