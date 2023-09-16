import React from "react";
import image from "../images/img.png"
 import img from "../images/olx.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faBuilding ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import "../css/header.css";
const Header = () => {

    return (
        <><nav>
            <img src={image} className="top" width="95px" ></img>
            <FontAwesomeIcon icon={faCar} />
            < a href=""  >MOTORS</a>
            <FontAwesomeIcon icon={faBuilding} />
            <a href="">PROPERTY</a><br></br>
             <img src={img} className="top1" width="75px" ></img> 
            <select className="top2"><option type="text" className="top2" >PAKISTAN</option><option type="text" className="top2" >INDIA</option><option type="text" className="top2" >IRELAND</option><option type="text" className="top2" >CHINA</option></select>
            <input type="text" className="top3" placeholder="find car mobiles phones etc"></input><FontAwesomeIcon icon= {faMagnifyingGlass} className="icon"/><span className="log"><b>login</b></span><span className="lo">SELL</span>
   
            </nav>
        </>
    )
}
export default Header