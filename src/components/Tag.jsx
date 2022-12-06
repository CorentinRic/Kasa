import React from 'react'
import '../styles/components/Tag.css'

function Tag({tag}) {
  return (
    <div className="tag">
        <p className='tag__name'>{tag}</p>
    </div>
  )
}

export default Tag