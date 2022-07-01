import adhham from '../images/adhham.jpeg'
import {FaGithub, FaLinkedin, FaTwitter, FaIdBadge} from 'react-icons/fa'

const About = () => {
  return (
    <div className="About">
        <img src={adhham} alt="Adhham Safwan" />
        <div className="about-me">
            <h1>Hi, it's Adhham!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores repellat amet corrupti suscipit libero dolores? Natus commodi deleniti sequi beatae, eveniet alias sint numquam blanditiis dolores dolore? Quia, recusandae illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quae, consequuntur ducimus ab dignissimos eaque aperiam voluptatibus quam nam optio sint odio minima commodi sapiente porro magni neque reprehenderit.</p>
            <div className="social-links">
              <a href="/" title='Adhham | GitHub'><FaGithub /></a>
              <a href="/" title='Adhham | LinkedIn'><FaLinkedin /></a>
              <a href="/" title='Adhham | Twitter'><FaTwitter /></a>
              <a href="https://adhhamdev.netlify.app" title='Adhham | Portfolio Website'><FaIdBadge /></a>
            </div>
        </div>
    </div>
  )
}

export default About