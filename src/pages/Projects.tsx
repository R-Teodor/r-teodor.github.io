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

import '../styles/utilities.css'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className='projects_page' id='projects_page'>
      <div>
        <h1 className='main__title'>Personal Projects</h1>
      </div>
      <div className='projects__layout'>
        {/* New Card */}
        {/* <div className='project__container'>
          <div className='project-container__img'>
            <img src='./portfolio.jpg' alt='' />
          </div>
          <h1 className='project__title'>Web Portfolio Project</h1>
          <div className='project__description'>
            This is a Web Portfolio presenting my work and my experience,written
            using React and css. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem eius voluptatem sunt omnis sint
            qui.
          </div>
          <h2 className='project__stack-title'>Stack</h2>
          <div className='project__stack'>
            <div className='project__stack-item'>
              <SiReact color={'#00a7e5'} size={26} />
              <p>React</p>
            </div>
            <div className='project__stack-item'>
              <SiTailwindcss color={'#3490dc'} size={26} />
              <p>Tailwindcss</p>
            </div>
            <div className='project__stack-item'>
              <SiHtml5 color={'#e34c26'} size={26} />
              <p>Html</p>
            </div>
          </div>

          <div className='project__links'>
            <a className='project__source'>Source</a>
            <a className='project__live'>Live</a>
          </div>
        </div> */}

        {/* New Card */}
        <div className='project__container'>
          <div className='project-container__img'>
            <img src='./twitter-clone.png' alt='' />
          </div>
          <h1 className='project__title'>Twitter Clone</h1>
          <div className='project__description'>
            This is a Twitter Clone presenting my work and my experience,written
            using React and css. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem eius voluptatem sunt omnis sint
            qui.
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
            This is a PasswordVault presenting my work and my experience,written
            using React and css. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem eius voluptatem sunt omnis sint
            qui.
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
            This is a Jobify presenting my work and my experience,written using
            React and css. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem eius voluptatem sunt omnis sint qui.
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
