import '../styles/Navbar.css'
import { MdOutlineReorder } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [expandNavbar, setExtendNavbar] = useState(false)
  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={() => setExtendNavbar((prev) => !prev)}>
          <MdOutlineReorder />
        </button>
      </div>
      <div className='links'>
        <Link to='/' onClick={() => setExtendNavbar(false)}>
          Home
        </Link>
        <Link to='/projects' onClick={() => setExtendNavbar(false)}>
          Projects
        </Link>
        <Link to='/contact' onClick={() => setExtendNavbar(false)}>
          Contact
        </Link>
      </div>
    </div>
  )
}
export default Navbar
