import React from 'react'
import { Link } from 'react-router-dom'


export default function Preview() {
  return (
    <div>
      <h2>Preview page</h2>
      <Link to="/templates">Templates</Link>
    </div>
  )
}
