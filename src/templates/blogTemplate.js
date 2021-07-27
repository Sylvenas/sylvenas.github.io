import React from "react"
import { graphql } from "gatsby"
import MarkdownPage from '@components/markdown-page';
import Layout from "@components/layout"
// import { createLinkBlog } from '@utils/createLink';

export default function Template({
  location,
  data,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, excerpt, fields } = markdownRemark

  return (
    <Layout location={location}>
      <MarkdownPage
        authors={frontmatter.author}
        // createLink={createLinkBlog}
        date={fields.date}
        location={location}
        ogDescription={excerpt}
        markdownRemark={markdownRemark}
        sectionList={frontmatter.catalogue || []}
        titlePostfix=" - little forest"
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        img
        author
        categories
      }
    }
  }
`
