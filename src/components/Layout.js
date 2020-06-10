import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h3 style={{ display: `inline` }}>Dorian Collier</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/CV/">CV</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
