// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { TYPE_FEATURES_LIST_SCHEMA, TYPE_FEATURES_LIST_DEFAULTS } from '~types';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow_right.svg';
import { Section, Link, ImageAsset } from '~components';
import { useOnScreen } from '~hooks';
import { mq, t, r } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const FeaturesList = ({ list }) =>
  list.map(({ title, icon, link, description }, i) => {
    const [ref, isIntersecting] = useOnScreen({ threshold: 0.5 });
    const props = {
      style: { transition: `opacity ${t * i * r}ms, transform ${t * i * r}ms` },
      isIntersecting,
      key: i,
      ref,
    };

    return (
      <FeaturesListWrapper {...props}>
        {icon && <ImageAsset source={icon} alt={title} />}
        {title && <Title>{title}</Title>}

        {link && (
          <Link to={link.url} look="primary">
            <Text>{link.title}</Text>
            <ArrowRight />
          </Link>
        )}

        {description && <Description>{description}</Description>}
      </FeaturesListWrapper>
    );
  });

const Features = ({ list, ...rest }) => (
  <Section {...rest}>
    <FeaturesWrapper>
      <FeaturesList list={list} />
    </FeaturesWrapper>
  </Section>
);

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const FeaturesWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  display: flex;

  position: relative;
  margin: 0 auto;
  width: 100%;

  ${mq.min.tablet_base} {
    flex-direction: row;
  }
`;

const FeaturesListWrapper = styled.div`
  transform: scale(${({ isIntersecting }) => (isIntersecting ? '1' : '0.9')});
  opacity: ${({ isIntersecting }) => (isIntersecting ? '1' : '0')};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  &:not(:last-child) {
    ${mq.max.tablet_base} {
      margin-bottom: 50px;
    }

    ${mq.min.tablet_base} {
      margin-right: 60px;
    }

    ${mq.min.desktop_small} {
      margin-right: 110px;
    }
  }
`;

const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  line-height: 20px;
  max-width: 160px;
  margin: 20px 0;
  width: 100%;

  ${mq.min.tablet_base} {
    max-width: 120px;
    height: 40px;
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.primary};
  margin-right: 5px;
`;

const Description = styled.p`
  width: 100%;
  max-width: 210px;
  text-align: center;
  line-height: 30px;
  height: 100px;
  margin: 0;
`;

// ─────────────────────────────────────────────────────────────────────────────
// PropTypes
// ─────────────────────────────────────────────────────────────────────────────

FeaturesList.defaultProps = TYPE_FEATURES_LIST_DEFAULTS;
FeaturesList.propTypes = TYPE_FEATURES_LIST_SCHEMA;
FeaturesList.displayName = 'FeaturesList';
Features.displayName = 'Features';

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

export default Features;
