import { useRef } from 'react'
import '../styles/Home.css'

import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io'
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'
import { FaChevronDown } from 'react-icons/fa'

const Home = () => {
  const skillsRef = useRef<HTMLDivElement>(null)
  return (
    <div className='home' id='home_page'>
      <div className='about'>
        <h2>Hi, My name is Teodor</h2>
        <div className='prompt'>
          <p>
            I am a software developer with a passion for learning and tinkering
          </p>

          <a
            href='https://ro.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoLinkedin />
          </a>

          <a
            href='https://github.com/R-Teodor'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
          <a href='mailto:tcv@gmail.com'>
            <MdEmail />
          </a>
          <p
            className='prompt__chevrone'
            onClick={() =>
              skillsRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <FaChevronDown />
          </p>
        </div>
      </div>
      <div className='skills' ref={skillsRef}>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>

            <div className='tech__layout'>
              <div className='card__tech'>
                <div className='react logo__container'>
                  <SiReact size={46} />
                </div>
                <h3>ReactJs</h3>
              </div>

              <div className='card__tech'>
                <div className='redux logo__container'>
                  <SiRedux size={46} />
                </div>
                <h3>Redux Toolkit</h3>
              </div>

              <div className='card__tech'>
                <div className='tailwind logo__container'>
                  <SiTailwindcss size={46} />
                </div>
                <h3>Tailwind CSS</h3>
              </div>

              <div className='card__tech'>
                <div className='html__logo logo__container'>
                  <SiHtml5 size={46} />
                </div>
                <h3>Html</h3>
              </div>

              <div className='card__tech'>
                <div className='css__logo logo__container'>
                  <SiCss3 size={46} />
                </div>
                <h3>Css</h3>
              </div>
            </div>
          </li>
          <li className='item'>
            <h2>Back-End</h2>

            <div className='tech__layout'>
              <div className='card__tech'>
                <div className='nodejs logo__container'>
                  <SiNodedotjs size={46} />
                </div>
                <h3>NodeJs</h3>
              </div>
              <div className='card__tech'>
                <div className='nodejs logo__container'>
                  <SiMongodb size={46} />
                </div>
                <h3>MongoDb</h3>
              </div>
              <div className='card__tech'>
                <div className='expressjs logo__container'>
                  <SiExpress size={46} />
                </div>
                <h3>ExpressJS</h3>
              </div>
            </div>
          </li>
          <li className='item'>
            <h2>Languages</h2>

            <div className='tech__layout'>
              <div className='card__tech'>
                <div className='javascript logo__container'>
                  <SiJavascript size={46} />
                </div>
                <h3>Javascript</h3>
              </div>
              <div className='card__tech'>
                <div className='typescript logo__container'>
                  <SiTypescript size={46} />
                </div>
                <h3>Typescript</h3>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
