const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [fields___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields{
              slug
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node, getNode }) => {

      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

    const { relativePath } = getNode(node.parent);

    if (relativePath.includes('blog')) {
      // Blog posts don't have embedded permalinks.
      // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>.html
      // The date portion comes from the file name: <date>-<title>.md
      const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];

      let slug = `/blog/${year}/${month}/${day}/${filename}.html`;
      let date = new Date(year, month - 1, day);

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })

      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });
    }
  }
}