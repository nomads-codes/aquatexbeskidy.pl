// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

export const TYPE_IMAGE_ASSET_SCHEMA = {
  media: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const TYPE_IMAGE_ASSET_DEFAULTS = {
  media: '',
  alt: '',
};
