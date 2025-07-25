import logo from "../assets/yashGautamLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="#"/>
    </div>
    <div className="m-8 flex items center justify center gap-4 text-4xl">
      <a href="https://www.linkedin.com/in/yash-gautam-308a90219/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/04yashgautam" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
      </a>
    </div>

  </nav>
}

export default NavBar
