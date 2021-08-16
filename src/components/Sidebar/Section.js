/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

import React from 'react';
import { colors, media } from '@utils/theme';

const linkCss = {
  color: colors.text,
  display: 'inline-block',
  transition: 'border 0.2s ease',
  marginTop: 3,
  paddingBottom: 2,
  borderBottom: '1px dotted transparent',

  '&:hover': {
    color: colors.subtle,
    borderBottom: '1px dotted rgba(64, 153, 255, .6)',
  },
};

const createLinkBlog = ({ isActive, item, section }) => {
  return (
    <a css={[linkCss]} href={'#' + section.replace(/\s/g, '-').toLowerCase()}>
      {section}
    </a>
  );
};

const Section = ({
  createLink,
  location,
  onLinkClick,
  section,
}) => (
  <div css={{
    marginBottom: 3,
    [media.greaterThan('small')]: {
      display: 'block',
    },
  }}>
    <span>- </span>    
    {createLinkBlog({
      section,
      location,
      onLinkClick,
    })}
  </div>
);

export default Section;
