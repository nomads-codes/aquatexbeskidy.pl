// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

export const TYPE_USEONSCREEN_SCHEMA = {
  useOnScreenOptions: PropTypes.shape({
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
  }),
};

export const TYPE_USEONSCREEN_DEFAULTS = {
  useOnScreenOptions: {
    rootMargin: '-50px 0px',
    threshold: 0.5,
  },
};
