import '../styles/Footer.css'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a
          href='https://ro.linkedin.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/R-Teodor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>

        <Link to='contact'>
          <MdEmail />
        </Link>
      </div>
      {/* <p>&copy; Domain name</p> */}
    </div>
  )
}
export default Footer
