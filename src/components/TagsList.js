import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, idx) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link key={idx} to={`/tags/${slug}`}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
