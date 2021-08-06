import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import Container from '@components/container';

import "./index.less"

const Categories = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  let collections = {};
  let categories;

  edges
    .filter(edge => !edge.node.frontmatter.secert)
    .forEach(edge => {
      var col = {};
      var categorie = edge.node.frontmatter.categories;
      col.date = edge.node.fields.date;
      col.title = edge.node.frontmatter.title;
      col.slug = edge.node.fields.slug;
      if (collections[categorie]) {
        collections[categorie].push(col)
      } else {
        collections[categorie] = [];
        collections[categorie].push(col)
      }
    });
  categories = Object.keys(collections);

  console.log(categories)

  let data1 = [], //第一列
    data2 = [], //第二列
    data3 = [], //第三列
    i = 0;

  while (i < categories.length) {
    data1.push(categories[i++]);
    if (i < categories.length) {
      data2.push(categories[i++]);
    }
    if (i < categories.length) {
      data3.push(categories[i++]);
    }
  }

  return (
    <Layout location={location}>
      <Container css={{
        position: 'relative',
      }}>
        <div className="masonry">
          <div className="column">
            {data1.map(x => <Card categorie={x} collections={collections[x]} />)}
          </div>
          <div className="column">
            {data2.map(x => <Card categorie={x} collections={collections[x]} />)}
          </div>
          <div className="column">
            {data3.map(x => <Card categorie={x} collections={collections[x]} />)}
          </div>
        </div>
      </Container>
    </Layout>
  )

  return (
    <Layout location={location}>
      <Container css={{
        position: 'relative',
      }}>
        <div className="timeline">
          {categories.map(categorie => (
            <div key={categorie} className="title">
              <h2 className="year" id={categorie}>
                {categorie}
              </h2>
              <ul className="posts-ul">
                {collections[categorie].map(post => (
                  <li key={post.title} className="post-li">
                    <p css={{
                      display: 'none',
                    }} className="post-date-cat">
                      <a
                        href={`/archive.html#${post.date.split(',')[1]}`}>
                        {`${post.date.substr(0, 3)} ${post.date.split(',')[0].split(' ')[1]},${post.date.split(',')[1]}`}
                      </a>
                    </p>
                    <a className="post-title-cat" href={post.slug}>{post.title}</a>
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


const Card = ({ categorie, collections }) => {
  return (
    <div className="categorie-card">
      <h2 className='categorie-title'>{categorie}</h2>
      {
        collections.map(post => (
          <p className='post-link'>
            <a className="post-title" href={post.slug}>{post.title}</a>
          </p>
        )
        )
      }
    </div>
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
            date
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
export default Categories