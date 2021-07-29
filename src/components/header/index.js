import { Link } from 'gatsby';
import React from 'react';

import { colors, fonts, media } from '@utils/theme';
import HeaderLink from './header-link';
import DocSearch from './doc-search';

const Header = ({ location }) => {
  return (
    <header
      css={{
        backgroundColor: '#252b33',
        color: colors.white,
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        top: 0,
        left: 0,
      }}>
      <div css={{
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        overflowX: 'auto',

        [media.greaterThan('medium')]: {
          width: '90%',
        },

        [media.size('xxlarge')]: {
          maxWidth: 900,
        },
      }} >
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            [media.between('small', 'large')]: {
              height: 45,
            },
            [media.lessThan('small')]: {
              height: 40,
            },
          }}>
          <Link
            css={{
              display: 'flex',
              marginRight: 10,
              height: '100%',
              alignItems: 'center',
              color: colors.brand,

              ':focus': {
                outline: 0,
                color: colors.white,
              },

              [media.greaterThan('small')]: {
                width: 'calc(100% / 3)',
              },
              [media.lessThan('small')]: {
                flex: '0 0 auto',
              },
            }}
            to="/">
            <img
              css={{
                margin: 0,
                borderRadius: 3,
                height: 30
              }}
              src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032663585/7754/a2ab/5685/fa6b0f0675dcd210c2e285367ec352e5.png" />
            <span
              css={{
                color: '#fff',
                fontFamily: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
                marginLeft: 10,
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
                [media.lessThan('large')]: {
                  fontSize: 16,
                  marginTop: 1,
                },
                [media.lessThan('small')]: {
                  // Visually hidden
                  position: 'absolute',
                  overflow: 'hidden',
                  clip: 'rect(0 0 0 0)',
                  height: 1,
                  width: 1,
                  margin: -1,
                  padding: 0,
                  border: 0,
                },
              }}>
              little forest
            </span>
          </Link>

          <nav
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              overflowX: 'auto',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              height: '100%',
              width: '60%',

              [media.size('xsmall')]: {
                //flexGrow: '1',
                width: 'auto',
              },
              [media.greaterThan('xlarge')]: {
                width: null,
              },
              [media.lessThan('small')]: {
                maskImage:
                  'linear-gradient(to right, transparent, black 13px, black 90%, transparent)',
              },
            }}>
            <HeaderLink
              isActive={location.pathname === '/'}
              title="HOME"
              to="/"
            />
            <HeaderLink
              isActive={location.pathname.includes('/archive')}
              title="ARCHIVE"
              to="/archive"
            />
            <HeaderLink
              isActive={location.pathname.includes('/categories')}
              title="CATEGORIES"
              to="/categories"
            />
            <HeaderLink
              isActive={location.pathname.includes('/resume')}
              title="RESUME"
              to="/resume"
            />
          </nav>
          <DocSearch />
          <div
            css={{
              [media.lessThan('medium')]: {
                display: 'none',
              },
              [media.greaterThan('large')]: {
                width: 'calc(100% / 6)',
              },
            }}>

            <a
              css={{
                padding: '5px 10px',
                marginLeft: 10,
                whiteSpace: 'nowrap',
                ...fonts.mid,

                ':hover': {
                  color: colors.brand,
                },

                ':focus': {
                  outline: 0,
                  backgroundColor: colors.lighter,
                  borderRadius: 15,
                },
              }}
              href="https://twitter.com/MelloZhao"
              target="_blank"
              rel="noopener">
              <i className="icon-twitter"></i>
            </a>
            <a
              css={{
                padding: '5px 10px',
                marginLeft: 10,
                whiteSpace: 'nowrap',
                ...fonts.small,

                ':hover': {
                  color: colors.brand,
                },

                ':focus': {
                  outline: 0,
                  backgroundColor: colors.lighter,
                  borderRadius: 15,
                },
              }}
              href="mailto:wrsden@gmail.com?subject=little forest"
              target="_blank"
              rel="noopener">
              <i className="icon-brand"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
