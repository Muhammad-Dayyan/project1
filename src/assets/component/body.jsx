import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "../css/body.css";
import img11 from '../images/imagess.jpeg'
import img1 from "../images/img3.jpeg"
import img2 from "../images/img4.png"
import img3 from "../images/img5.png"
import img4 from "../images/img 6.png"
import img5 from "../images/img 7.png"
import img6 from "../images/img 8.png"
import img7 from "../images/img 9.png"
import img8 from "../images/img 10.png"
import img12 from "../images/img 14.png"
import img14 from "../images/img 16.png"
import img15 from "../images/img 17.png"
import img16 from "../images/img 15.png"
import imges from "../images/IMG 2.jpg";
import Card from 'react-bootstrap/Card';
import image1 from '../images/foot.svg'
import image2 from '../images/foot2.svg'
import image3 from '../images/foot3.svg'
const Body = () => {
    return (
        <>
            <div className="head">
                <a href=""><b>All categories</b></a><FontAwesomeIcon icon={faArrowDown} className="arrow" />
                <a href="">Mobile Phones</a>
                <a href=""><b>Cars</b></a>
                <a href="">Motorcycles</a>
                <a href="">Houses</a>
                <a href="">TV-Video-Audio</a>
                <a href="">Tablets</a>
                <a href="">Land & Plots</a>

            </div>
            <img src={img1} className="img" width="100%"></img>
            <h1>All Categories</h1>
          
              <div className="images1">
            <span className="img2" >
                <img src={img2} width="90" />
                <h6><b>Jobs</b></h6>

            </span>
            <span className="img2" >
                <img src={img3} width="90" />
                <h6><b>Vehicle</b></h6>

            </span>
            <span className="img2" >
                <img src={img2} width="90" />
                <h6><b>Jobs</b></h6>

            </span>
            <span className="img2" >
                <img src={img4} width="90" />
                <h6><b>Books & sport</b></h6>

            </span>
            <span className="img2" >
                <img src={img5} width="90" />
                <h6><b>Vehicle</b></h6>

             </span>
             <span className="img2" >
                 <img src={img6} width="90" />
                 <h6><b>Furniture</b></h6>

             </span>
             <span className="img2" >
                 <img src={img7} width="90" />
                <h6><b>Animals</b></h6>

            </span>
            <span className="img2" >
                <img src={img8} width="90" />
                <h6><b>Mobiles</b></h6>

             </span></div>
            <div className="images2">
            <span className="img2" >
                <img src={img6} width="90" />
                <h6><b>Furniture</b></h6>

            </span>
            <span className="img2" >
                <img src={img4} width="90" />
                <h6><b>Books & sports</b></h6>

            </span>
            <span className="img2" >
                <img src={img5} width="90" />
                <h6><b>Vehicle</b></h6>

            </span>
            <span className="img2" >
                <img src={img12} width="90" />
                <h6><b>Fashion & beauty</b></h6>

            </span>
            <span className="img2" >
                <img src={img16} width="90" />
                <h6><b>Kids</b></h6>

            </span>
            <span className="img2" >
                <img src={img14} width="90" />
                <h6><b>Services</b></h6>

            </span>
            <span className="img2" >
                <img src={img15} width="90" />
                <h6><b>Business Industrial Agriculture</b></h6>

            </span>
            <span className="img2" >
                <img src={img16} width="90" />
                <h6><b>Kids</b></h6>

            </span></div>
            
            <h1>Trending</h1>

            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card2" style={{ width: '18rem' }}>
                <Card.Img src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>


            <Card className="card4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card6" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card7" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <Card className="card8" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imges} />
                <Card.Body>
                    <Card.Title>Rs 23,000</Card.Title>
                    <Card.Text>
                        Some quick example text title and make up Lorem ipsum dolor sit amet consectetur .
                    </Card.Text>
                    <Card.Text>Karachi, saddar</Card.Text>
                </Card.Body>
            </Card>
            <div className="div">
                <div>
                    <img src={img11} className="img1" width="80%" ></img>
                </div><div className="div1">
                    <h3>TRY THE OLX APP</h3>
                    <li> Buy, sell and find just </li>
                    <li>about anything using the</li>
                    <li>app on your mobile.</li>
                </div>
                <div className="div2">
                    <h6>GET YOUR APP TODAY</h6>
                    <img src={image1} className="bo" width="12%" ></img>
                    <img src={image2} className="bo" width="12%" ></img>
                    <img src={image3} className="bo" width="12%" ></img>
                </div>

            </div>
        </>
    )
}
export default Body