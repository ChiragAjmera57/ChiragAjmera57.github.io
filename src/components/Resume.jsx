import React from 'react'
import resume from '../image/resume.pdf'

export default function Resume() {
  return (
    <div className="nav-link resume">

        <a target='_blank'  id="resume-button-1" href={resume} download>resume</a>
    </div>
  )
}
