import React, { useEffect,useState} from "react"
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
  const [catalogueList, setCatalogueList]=useState([])

  useEffect(() => {
    const h2 = [...document.querySelectorAll('h2')]
    if (h2.length) {
      setCatalogueList(h2.map(x => {
        let chapter = x.textContent.replaceAll(' ', '-').toLowerCase()
        x.id = chapter
        return chapter
      }))
    } else {
      const h3 = [...document.querySelectorAll('h3')]
      setCatalogueList(h3.map(x => {
        let chapter = x.textContent.replaceAll(' ', '-').toLowerCase()
        x.id = chapter
        return chapter
      }))
    }
  },[])

  return (
    <Layout location={location}>
      <MarkdownPage
        authors={frontmatter.author}
        // createLink={createLinkBlog}
        date={fields.date}
        location={location}
        ogDescription={excerpt}
        markdownRemark={markdownRemark}
        sectionList={catalogueList}
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
