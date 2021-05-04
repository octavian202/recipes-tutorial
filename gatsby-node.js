const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagPageTemplate = path.resolve(`src/templates/tag-template.js`)

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slugTag = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${slugTag}`,
        component: tagPageTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
