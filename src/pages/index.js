import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Cart from "@components/cart"
import { media, sharedStyles } from '@utils/theme';

const IndexPage = ({ location, data: {
  allMarkdownRemark: { edges },
}, }) => {
  return (
    <Layout location={location}>
      <div css={{
        [media.greaterThan('medium')]: {
          width: '90%',
        },
        [media.size('xxlarge')]: {
          maxWidth: '1300px',
          margin: '0 auto',
        },
      }}>
        <div css={sharedStyles.articleLayout.container}>
          <div css={sharedStyles.articleLayout.content}>
            <div css={{
              fontSize: 14,
              fontFamily: '"brandon-grotesque", sans-serif',
              fontWeight: 'bold',
              color: '#7e8890',
              textTransform: 'uppercase',
              letterSpacing: '.075em',
              textAlign: 'center',
              marginBottom: '25px',
            }}>Less is More</div>
            {/* <TitleAndMetaTags
              ogUrl={`${urlRoot}/blog/all.html`}
              title="Little forest - All Posts"
            /> */}
            <ul
              css={{
                display: 'flex',
                flexWrap: 'wrap',
              }}>
              {
                edges.map(edge => <Cart node={edge.node} key={edge.node.id} />)
              }
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            date
          }
          frontmatter {
            title
            img
            author
            categories
          }
        }
      }
    }
  }
`

export default IndexPage
