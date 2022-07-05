import adhham from '../images/adhham.jpeg'
import {FaGithub, FaLinkedin, FaTwitter, FaIdBadge, FaEnvelope, FaWhatsapp} from 'react-icons/fa'

const About = () => {
  return (
    <div className="About">
        <img src={adhham} alt="Adhham Safwan" />
        <div className="about-me">
            <h1>Hi, it's Adhham!</h1>
            <p>I built Streamverse as an Entertainment Web App for evreyone. I am a self-learning Front end Developer since 2018. I have substantial knowledge of Computer Science on one side, but I prefer Programming. To intensify my skills is my day-to-day goal. Along my wonderful journey, I've learned some Techs and developed my skills. Let me know if there are bugs to be fixed and Feedbacks are appreciated. Enjoy exploring!</p>
            <div className="social-links">
              <a className='github' href="/" title='Adhham | GitHub'><FaGithub /></a>
              <a className='linkedin' href="/" title='Adhham | LinkedIn'><FaLinkedin /></a>
              <a className='twitter' href="/" title='Adhham | Twitter'><FaTwitter /></a>
              <a className='portfolio' href="https://adhhamdev.netlify.app" title='Adhham | Portfolio Website'><FaIdBadge /></a>
            </div>
            <div className="contact-info">
              <h2>More info...</h2>
              <p><FaEnvelope /> <a href="mailto:msmadhhamg@gmail.com">msmadhhamg@gmail.com</a> | <a href="mailto:msmadhham@outlook.com">msmadhham@outlook.com</a></p>
              <p><FaWhatsapp /> <a href="tel:0775667943">(+94) 77 566 7943</a> | <a href="tel:0773779296">(+94) 77 377 9296</a></p>
            </div>
            <footer>
              <small>Copyrigth &copy; Streamverse by Adhham 2022</small>
            </footer>
        </div>
    </div>
  )
}

export default About