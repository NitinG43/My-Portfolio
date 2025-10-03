import "../styles/NavBar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'


export const NavBar= ({aboutRef,educationRef,skillRef,experienceRef,projectRef,contactRef})=>{
    function scroll_el(Ref){
        Ref.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <a onClick={()=>{scroll_el(aboutRef)}} id="logo-icon"><FontAwesomeIcon icon={faLaptopCode} /></a>
                        <a onClick={()=>{scroll_el(aboutRef)}} id="portfolio"> Portfolio</a>
                    </div>
                    <nav>
                        <ul className="nav-options">
                            <li> <a onClick={()=>{scroll_el(skillRef)}}>Skills</a></li>
                            <li> <a onClick={()=>{scroll_el(experienceRef)}}>Experience</a></li>
                            <li> <a onClick={()=>{scroll_el(projectRef)}}>Projects</a></li>
                            <li> <a onClick={()=>{scroll_el(educationRef)}}>Education</a></li>
                            <li> <a onClick={()=>{scroll_el(contactRef)}}>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="social-links">
                        <div className="links">
                            <a id="github" href="https://github.com/NitinG43" target="_blank">GitHub</a>
                            <a id="leetcode" href="https://leetcode.com/niting04/" target="_blank">LeetCode</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}