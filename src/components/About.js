import adhham from '../images/adhham.jpeg'
import {FaGithub, FaLinkedin, FaTwitter, FaIdBadge} from 'react-icons/fa'

const About = () => {
  return (
    <div className="About">
        <img src={adhham} alt="Adhham Safwan" />
        <div className="about-me">
            <h1>Hi, it's Adhham!</h1>
            <p>Streamverse is an entertainment web app built by me. I am a self-learning Front end Developer since 2018. I have substantial knowledge of Computer Science on one side, but I prefer Programming. To intensify my skills is my day-to-day goal. Along my wonderful journey, I've learned some Techs and developed my skills. Let me know if there are bugs to be fixed and Feedbacks are appreciated. Enjoy exploring!</p>
            <div className="social-links">
              <a className='github' href="/" title='Adhham | GitHub'><FaGithub /></a>
              <a className='linkedin' href="/" title='Adhham | LinkedIn'><FaLinkedin /></a>
              <a className='twitter' href="/" title='Adhham | Twitter'><FaTwitter /></a>
              <a className='portfolio' href="https://adhhamdev.netlify.app" title='Adhham | Portfolio Website'><FaIdBadge /></a>
            </div>
            <footer>
              <small>Copyrigth &copy; Streamverse by Adhham 2022</small>
            </footer>
        </div>
    </div>
  )
}

export default About