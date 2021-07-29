import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import Container from '@components/container';

import "./index.less"

const Archive = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  let collections = {};
  let years;

  edges
    .filter(edge => !edge.node.frontmatter.secert)
    .forEach(edge => {
      var col = {};
      var year = edge.node.fields.date.split(',')[1];
      col.categories = edge.node.frontmatter.categories;
      col.date = edge.node.fields.date;
      col.title = edge.node.frontmatter.title;
      col.slug = edge.node.fields.slug;
      if (collections[year]) {
        collections[year].push(col)
      } else {
        collections[year] = [];
        collections[year].push(col)
      }
    });

  years = Object.keys(collections);

  return (
    <Layout location={location}>
      <Container css={{
        position: 'relative',
      }}>
        <div className="timeline">
          {years.map(year => (
            <div key={year} className="title">
              <h2 className="year" id={year}>
                {year}
              </h2>
              <ul className="posts-ul">
                {collections[year].map(post => (
                  <li key={post.title} className="post-li">
                    <p className="post-date">{`${post.date.substr(0, 3)} ${post.date.split(',')[0].split(' ')[1]}`}</p>
                    <p css={{
                      display: 'none',
                    }} className="post-categories">[
                      <a
                        href={`/categories.html#${post.categories}`}
                        className="post-categorie">{post.categories}</a>
                      ]</p>
                    <a className="post-title" href={post.slug}>{post.title}</a>
                  </li>
                ))}
              </ul>
            </div>)
          )}
        </div>
      </Container>
    </Layout>
  )
}


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            author
            categories
            secert
          }
        }
      }
    }
  }
`
export default Archive