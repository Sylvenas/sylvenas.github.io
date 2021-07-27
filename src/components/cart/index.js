import React, { memo, useRef } from "react";
import { Link } from 'gatsby';
import { media } from '@utils/theme';

const Cart = ({ node }) => {
  const imgName = node.frontmatter.img.substring(6, 16);
  const imgType = node.frontmatter.img.substring(17);

  const svgRef = useRef()
  const picRef = useRef()

  const handleImgLoad = () => {
    setTimeout(() => {
      svgRef.current.style.opacity = 0;
      picRef.current.style.opacity = 1;
    })
  }

  return (
    <li
      css={{
        width: '100%',
        minHeight: 500,
        [media.size('medium')]: {
          width: '50%',
        },

        [media.greaterThan('large')]: {
          width: '30.303%',
          //float: 'left',
          display: 'inline-block',
          margin: '0 1.515% 1.875em',
        },
      }}
    >
      <Link
        to={node.fields.slug}>
        <div css={{ height: 250, width: '100%', overflow: 'hidden', position: 'relative' }}>
          <img
            src={`/svg/${imgName}.svg`}
            css={{
              minHeight: '250px',
              maxWidth: '100%',
              position: 'relative',
              transition: 'opacity .3s',
            }}
            ref={svgRef}
          />
          <picture>
            <source media="(min-width: 900px)"
              srcSet={`/img/${imgName}_lg_1x.webp 1x,/img/${imgName}_lg_2x.webp 2x`} type="image/webp" />
            <source media="(max-width: 900px)"
              srcSet={`/img/${imgName}_md_1x.webp 1x,/img/${imgName}_md_2x.webp 2x`} type="image/webp" />
            <img
              ref={picRef}
              onLoad={handleImgLoad}
              srcSet={`/img/${imgName}_md_1x.${imgType} 900w,/img/${imgName}_lg_1x.${imgType} 1440w`}
              src={`/img/${imgName}_lg_1x.${imgType} 1440w`}
              type={`image/${imgType}`}
              alt="image"
              css={{
                minHeight: '250px',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0,
                transition: 'opacity .3s',
              }}
              description="true" />
          </picture>
        </div>
      </Link>
      <h2 css={{
        fontFamily: '"brandon-grotesque", sans-serif',
        fontSize: 10,
        letterSpacing: '.1em',
        color: '#7e8890',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginBottom: 15,
        marginTop: 44,
        textAlign: 'center',
        cursor: 'pointer',
        ':hover': {
          color: '#323a45',
        },
      }}>
        <a href={`/categories.html#${node.frontmatter.categories}`}>
          {node.frontmatter.categories ? node.frontmatter.categories : ''}
        </a>
      </h2>
      <Link
        to={node.fields.slug}
      >
        <h1 css={{
          fontFamily: '"brandon-grotesque", sans-serif',
          fontSize: 18,
          lineHeight: '27px',
          letterSpacing: '.065em',
          color: '#fc3768',
          textTransform: 'uppercase',
          fontWeight: 700,
          maxWidth: 270,
          margin: '0 auto',
          textAlign: 'center',
          cursor: 'pointer',
          ':hover': {
            color: '#b1032e',
          },
        }}>
          {node.frontmatter.title}
        </h1>
      </Link>
      <p css={{
        fontSize: 14,
        lineHeight: '27px',
        color: '#333c4e',
        padding: '0 25px',
        textAlign: 'center',
        marginTop: '30px',
        width: '85%',
        margin: '40px auto',
      }}
      >
        {node.excerpt}
      </p>
    </li>
  )
}

export default memo(Cart)