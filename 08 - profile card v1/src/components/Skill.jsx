import React from 'react'

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
        <p>{props.skill}</p>
        <span>{props.emoji}</span>
    </div>
  )
}

export default Skill