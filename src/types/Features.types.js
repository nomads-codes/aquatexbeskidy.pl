// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

export const TYPE_FEATURES_LIST_SCHEMA = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.string,
      link: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    }),
  ),
};

export const TYPE_FEATURES_LIST_DEFAULTS = {
  list: [
    {
      description: '',
      title: '',
      icon: '',
      link: [
        {
          title: '',
          url: '',
        },
      ],
    },
  ],
};
