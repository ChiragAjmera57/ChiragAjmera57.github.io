import React from "react";
import "../image/about.css";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import img3 from "../image/profile.png";
import img4 from '../skill-img/1.png'
import img5 from '../skill-img/2.png'
import img6 from '../skill-img/3.png'
import img7 from '../skill-img/4.png'
import img8 from '../skill-img/5.png'
import img9 from '../skill-img/6.png'
import img10 from '../skill-img/7.png'
import img11 from '../skill-img/8.png'
import img12 from '../skill-img/9.png'
import img13 from '../skill-img/10.png'
import img14 from '../skill-img/11.png'
import img15 from '../skill-img/12.webp'
import resume from '../image/Chirag-Ajmera-Resume.pdf'
import { Link } from "react-scroll";
import { todrive } from "./todrive";


export default function About() {
  let arrow = '<';
  return (
    <>
      <div id="about">
        <Box w="100%" display="flex" justifyContent="center" id="about1">
          <Text
          id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
          > 
            About
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          margin="60px 0px 0px 0px"
          id="about2"
          
        >
          <Box w="45vw" id="about-img">
            <Image w="30vw" data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" id="profile" src={img3}></Image>
          </Box>
          <Box
            w="55vw"
            marginLeft="45px"
            padding="45px 0px 0px 100px"
            color="white"
            id="about-body"
          >
            <h4 style={{ fontSize: "30px" }}>Chirag Ajmera</h4>
            <h5
              style={{
                marginTop: "15px",
                marginBottom: "35px",
                color: "#c6baba",
              }}
            >
              Full Stack Web Developer
            </h5>
            <Text
              color="rgb(136, 135, 135);"
              letterSpacing="-0.5px"
              w="70%"
              id="about-para"
              fontSize="lg"
            >
              Full Stack Web Developer loves to build idea into reality through
              code. Believe in continuous learning and growth. Always ready to
              take initiative....
            </Text>
            <Box id='resume-about-box' onClick={()=>todrive()}  p="90px 0px 0px 0px">
              <a href={resume} download="Chirag-Ajmera-Resume" target="_blank" id="resume-btn">
                Resume
              </a>
            </Box>
          </Box>
        </Box>
      </div>
      <Box color={"white"} textAlign={"Center"} data-aos="fade-up"
    
      data-aos-duration="500"
    data-aos-offset="100" h="20vh" w="90%"  m="auto" mt='5vh' id="skill-logo" display="flex" justifyContent="space-around" alignItems="center">
      <div className="logo-container">
        
      </div>
        <div className="logo-item"  >
          <Image className="logoimg" src={img4}  />
          <span className="logo-name">HTML</span>
        </div>
        <div className="logo-item" >
          <Image className="logoimg" src={img5}  />
          <span className="logo-name">CSS</span>
        </div>
        <div  >
          <Image className="logoimg" src={img6} />
          <span className="logo-name">Javascript</span>
        </div>
        <div  >
          <Image className="logoimg" src={img7} />
          <span className="logo-name">React</span>
        </div>
        <div  >
          <Image className="logoimg" src={img8} />
          <span className="logo-name">Redux</span>
        </div>
        <div className="logo-item" >
          <Image className="logoimg" src={img9} />
          <span className="logo-name">Chakra UI</span>
        </div>
        <div  >
          <Image className="logoimg" src={img10} />
          <span className="logo-name">Git</span>
        </div>
        
        <div className="logo-item" >
          <Image className="logoimg" src={img12} />
          <span className="logo-name">GitHub</span>
        </div>
        <div className="logo-item" >
          <Image className="logoimg" src={img13} />
          <span className="logo-name">Java</span>
        </div>
        <div className="logo-item" >
          <Image className="logoimg" src={img14} />
          <span className="logo-name">MongoDB</span>
        </div>
        <div  >
          <Image className="logoimg" src={img15} />
          <span className="logo-name">NodeJs</span>
        </div>
      </Box>

      
      <Link to="home" spy={true} id='click-above' smooth={true} offset={-150} duration={500} background='yellow' > {arrow}</Link>

    </>
  );
}
