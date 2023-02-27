import React from 'react'
import t from './title.module.css'
const Title = ({subtitle, title}) => {
  return (
    <div>
     <div className={t.heading}>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
     </div>
    </div>
  )
}

export default Title