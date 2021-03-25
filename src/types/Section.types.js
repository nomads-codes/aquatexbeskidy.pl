// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

import { TYPE_HEADING_COMON_SCHEMA, TYPE_HEADING_COMON_DEFAULTS } from '~types';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

export const TYPE_SECTION_SCHEMA = {
  ...TYPE_HEADING_COMON_SCHEMA,
  // extended: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
};

export const TYPE_SECTION_DEFAULTS = {
  ...TYPE_HEADING_COMON_DEFAULTS,
  // extended: null,
  // children: null,
};
