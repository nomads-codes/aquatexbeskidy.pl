// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { Link } from 'gatsby';
import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        Sorry we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go to home page</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────
