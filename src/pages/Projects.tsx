import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  // SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
} from 'react-icons/si'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import '../styles/utilities.css'
import '../styles/Projects.css'
import { useState } from 'react'

const Projects = () => {
  const [expand, setExpand] = useState<boolean>(false)
  return (
    <div className='projects_page' id='projects_page'>
      <div>
        <h1 className='main__title'>Personal Projects</h1>
      </div>
      <div className='projects__layout'>
        {/* New Card */}
        <div className='project__container'>
          <div className='project-container__img'>
            <img src='./twitter-clone__ss.png' alt='' />
          </div>
          <h1 className='project__title'>Twitter Clone</h1>
          <div className='project__description'>
            {/* This is a Twitter Clone presenting my work and my experience,written
          using React and css. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem eius voluptatem sunt omnis sint
          qui. */}
            <p className={`cutoff-text`}>
              The main focus of this project is to work on existing features and
              incorporate them to gain experience and knowledge in developing a
              successful product. In other words, the project involves planning
              and implementing various requirements. Specifically, the project
              is centered around building a Twitter Clone, which is still a work
              in progress.
            </p>
          </div>
          <h2 className='project__stack-title'>Stack</h2>
          <div className='project__stack'>
            <div className='project__stack-item'>
              <SiTypescript color={'#007acc'} size={26} />
              <p>Typescript</p>
            </div>
            <div className='project__stack-item'>
              <SiReact color={'#00a7e5'} size={26} />
              <p>React</p>
            </div>
            <div className='project__stack-item'>
              <SiTailwindcss color={'#3490dc'} size={26} />
              <p>Tailwindcss</p>
            </div>
            <div className='project__stack-item'>
              <SiRedux color={'#764abc'} size={26} />
              <p>Redux Toolkit</p>
            </div>
            <div className='project__stack-item'>
              <SiNodedotjs color={'#3c873a'} size={26} />
              <p>NodeJs</p>
            </div>
            <div className='project__stack-item'>
              <SiMongodb color={'#3c873a'} size={26} />
              <p>MongoDB</p>
            </div>
          </div>

          <div className='project__links'>
            <a
              href='https://github.com/R-Teodor/twitter-clone'
              target='_blank'
              rel='noopener noreferrer'
              className='project__source'
            >
              Source
            </a>
            <a className='project__live'>Live</a>
          </div>
        </div>

        {/* New Card */}
        <div className='project__container'>
          <div className='project-container__img'>
            <img src='./Keypass.png' alt='' />
          </div>
          <h1 className='project__title'>KeyPass - Password vault</h1>
          <div className='project__description'>
            <p className='cutoff-text'>
              Key Vault is a password manager that utilizes{' '}
              <span className='bold'>React.js</span> for the Front-End and{' '}
              <span className='bold'>Node.js</span> for the backend. The
              encrypted vault is securely stored in a{' '}
              <span className='bold'>MongoDB</span> database, and a unique key
              is generated upon user login to access the vault. Additionally,
              when a user registers, a corresponding vault is automatically
              generated.
            </p>
            {/* The scope of the project is to build a password manager.Using ReactJs for the frontend and NodeJs for the backend. */}
          </div>
          <h2 className='project__stack-title'>Stack</h2>
          <div className='project__stack'>
            <div className='project__stack-item'>
              <SiJavascript color={'#f0db4f'} size={26} />
              <p>Javascript</p>
            </div>
            <div className='project__stack-item'>
              <SiReact color={'#00a7e5'} size={26} />
              <p>React</p>
            </div>
            <div className='project__stack-item'>
              <SiCss3 color={'#264de4'} size={26} />
              <p>Css</p>
            </div>
            <div className='project__stack-item'>
              <SiNodedotjs color={'#3c873a'} size={26} />
              <p>NodeJs</p>
            </div>
            <div className='project__stack-item'>
              <SiMongodb color={'#3c873a'} size={26} />
              <p>MongoDB</p>
            </div>
          </div>

          <div className='project__links'>
            <a
              href='https://github.com/R-Teodor/password-manager'
              target='_blank'
              rel='noopener noreferrer'
              className='project__source'
            >
              Source
            </a>

            <a
              href='https://password-manager-i3q9.onrender.com'
              target='_blank'
              rel='noopener noreferrer'
              className='project__live'
            >
              Live
            </a>
          </div>
        </div>

        {/* New Card */}
        <div className='project__container'>
          <div className='project-container__img'>
            <img src='./Jobify.png' alt='' />
          </div>
          <h1 className='project__title'>MERN course project</h1>
          <div className='project__description'>
            <p className={`cutoff-text ${expand ? 'expand-text' : null}`}>
              The Jobify web application was the crucial starting point of my
              development career as a full stack developer. I developed my
              critical thinking skills and received essential insights into the
              practice of problem-solving during the course. I developed a
              variety of talents, from envisioning the first system designs to
              integrating new features into applications that were already in
              use. These include, among other significant skills, effectively
              managing global state with React.js context, performing
              server-side rendering by delivering static files from the Node.js
              Server, and building a reliable REST API with Node.js and Express.
            </p>

            <div className='flex__center'>
              <button
                className='description__expand-btn'
                onClick={() => setExpand((prev) => !prev)}
              >
                {expand ? (
                  <MdExpandLess size={42} />
                ) : (
                  <MdExpandMore size={42} />
                )}
              </button>
            </div>
          </div>
          <h2 className='project__stack-title'>Stack</h2>
          <div className='project__stack'>
            <div className='project__stack-item'>
              <SiJavascript color={'#f0db4f'} size={26} />
              <p>Javascript</p>
            </div>
            <div className='project__stack-item'>
              <SiReact color={'#00a7e5'} size={26} />
              <p>React</p>
            </div>
            <div className='project__stack-item'>
              <SiStyledcomponents color={'grey'} size={36} />
              <p>Styled components</p>
            </div>
            <div className='project__stack-item'>
              <SiNodedotjs color={'#3c873a'} size={26} />
              <p>NodeJs</p>
            </div>
            <div className='project__stack-item'>
              <SiMongodb color={'#3c873a'} size={26} />
              <p>MongoDB</p>
            </div>
          </div>

          <div className='project__links'>
            <a
              href='https://github.com/R-Teodor/Mern-Course-Jobify'
              target='_blank'
              rel='noopener noreferrer'
              className='project__source'
            >
              Source
            </a>
            <a className='project__live'>Live</a>
          </div>
        </div>

        {/* End */}
      </div>
    </div>
  )
}
export default Projects
