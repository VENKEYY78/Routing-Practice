import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li className="title">
        <Link to="/">Home</Link>
      </li>
      <li className="title">
        <Link to="/about">About</Link>
      </li>
      <li className="title">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
