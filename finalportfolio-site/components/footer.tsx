import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"

const Footer = () =>{
    const icon =<FontAwesomeIcon icon ={faGithub}/> ;
    return <div className="text-center border-t border-fuchsia-500 p-4 text-fuchsia-400">
        <div>Designed and built by Mamogapi</div>
        <div className ="text-3xl text-fuchsia-400">{icon}</div> 
    </div>
}
export default Footer;
