import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus corrupti quibusdam totam cupiditate soluta odit minima
              suscipit voluptas reprehenderit molestiae neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              alias.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              tempora asperiores consectetur libero facere pariatur! Dolor autem
              ratione natus quas.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/meqverdw"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
