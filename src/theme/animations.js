// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { keyframes, css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const animationKeyframes = ({ from = {}, to = {}, properties = '' } = {}) => {
  const setup = keyframes`
    from {${from}}
    to   {${to}}
  `;

  return css`
    ${setup} ${properties}
  `;
};

export const t = 150; // timing
export const r = 1.2; // ratio
