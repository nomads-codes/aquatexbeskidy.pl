// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';
import React from 'react';

import { CookieInfo, CallMeUp, FacebookUp, YoutubeUp } from '~components';
import { HeaderContainer, FooterContainer, SEOContainer } from '~containers';
import { ThemeProvider } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const RootContainer = ({ children, meta }) => (
  <ThemeProvider>
    <SEOContainer meta={meta} />
    <CookieInfo />
    <YoutubeUp />
    <FacebookUp />
    <CallMeUp />
    <div>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </div>
  </ThemeProvider>
);

export default RootContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

RootContainer.displayName = 'RootContainer';

RootContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  meta: PropTypes.oneOfType([PropTypes.object]),
};
