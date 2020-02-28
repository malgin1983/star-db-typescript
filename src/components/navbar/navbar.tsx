import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="header d-flex">
      <h3>Star DB</h3>
      <ul className="d-flex ml-auto">
        <li>
          <Link to="/">Корабли</Link>
        </li>
        <li>
          <Link to="/peoples">Персонажи</Link>
        </li>
        <li>
          <Link to="/planets">Планеты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
