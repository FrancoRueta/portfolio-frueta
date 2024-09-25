import React from 'react'

function SkillList({srcImg, skill}) {
  return (
    <span>
        <img src={srcImg} alt='Checkmark icon'/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList