import Flex from '../flex';
import React from 'react';
import { fonts, media } from '@utils/theme';

const MarkdownHeader = ({ title, authors, date }) => (
  <Flex type="header" halign="space-between" valign="baseline">
    <div css={{
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: 200,
      overflow: 'hidden',
      background: '#323a45',
    }}>
      <h1
        css={{
          color: '#fff',
          marginBottom: 0,
          marginTop: 40,
          fontSize: 30,
          lineHeight: '40px',
          letterSpacing: '.08em',
          fontWeight: 400,
          fontFamily: '"brandon-grotesque", sans-serif',
          textTransform: 'uppercase',
          ...fonts.header,

          [media.size('medium')]: {
            marginTop: 60,
          },

          [media.greaterThan('large')]: {
            marginTop: 80,
          },
        }}>
        {title}
      </h1>
      <div css={{
        marginTop: 15,
        color: '#abb0b7',
        fontStyle: 'italic',
        letterSpacing: '.005em',
        fontSize: 12,
        fontWeight: 300,
      }}>
        {date}{' '}
        <span>
          by{' '}
          {authors[0] ? authors[0] : ''}
        </span>
      </div>
    </div>
  </Flex>
);

export default MarkdownHeader;
