// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { TYPE_IMAGE_ASSET_SCHEMA, TYPE_IMAGE_ASSET_DEFAULTS } from '~types';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const ImageAsset = ({ source, alt }) => {
  if (!source && !source.includes('/icons/')) {
    return null;
  }

  return <Image src={require(`../../${source}`)} alt={alt || source} />;
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const Image = styled.img`
  height: 40px;
  width: 40px;
`;

// ─────────────────────────────────────────────────────────────────────────────
// PropTypes
// ─────────────────────────────────────────────────────────────────────────────

ImageAsset.defaultProps = TYPE_IMAGE_ASSET_DEFAULTS;
ImageAsset.propTypes = TYPE_IMAGE_ASSET_SCHEMA;
ImageAsset.displayName = 'ImageAsset';

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

export default ImageAsset;
