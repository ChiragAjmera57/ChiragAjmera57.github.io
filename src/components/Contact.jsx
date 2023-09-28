import {
  Box,
  Card,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import profilelogo from '../image/profilelogo.svg' 
import '../image/footer.css'

export default function Contact() {
  return (
    <>
    <div id="contact">
      {/* <a href="https://github.com/ChiragAjmera57" id="contact-github">GitHub profile link</a>
        <a href="https://www.linkedin.com/in/chirag-ajmera-08467425b/"  id="contact-linkedin">LinkedIn profile</a>
        <p  id="contact-phone">8949930815</p>
        <p id="contact-email" >chiragajmera57@gmail.com</p> */}

      <Box
        w="100%"
        mt={20}
        mb={12}
        display="flex"
        justifyContent="center"
        id="about1"
      >
        <Text
          id="forline"
          letterSpacing={-2}
          bgGradient="linear(to-l, #2A5470,#4C4177)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="900"
        >
          Contact Me
        </Text>
      </Box>
      <HStack
       data-aos="fade-up" data-aos-duration="900" 
        textColor="#838383"
        textAlign="center"
        spacing={55}
        id='contact-item'
        justifyContent="center"
      >
        <Box display="flex" flexDirection="column">
          <div style={{ margin: "auto" }} className="imges">
            <GrLinkedinOption size={50} color="white" opacity="0.8" />
          </div>
          <div className="title">
            <h2>Linedin</h2>
          </div>
          <div className="para">Connect me through Linkedin</div>
          <a
            style={{ color: "#9f9fff" }}
            target="_blank"
            href="https://www.linkedin.com/in/chirag-ajmera-08467425b/"
          >
            Chirag-Ajmera
          </a>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="center">
          <div style={{ margin: "auto" }} className="imges">
            <BiPhoneCall size={50} color="white" opacity="0.8" />
          </div>
          <div className="title">
            <h2>Phone</h2>
          </div>
          <div className="para">Connect me through my Number</div>
          <a style={{ color: "#9f9fff", cursor: "text" }}>8949930815</a>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="center">
          <div style={{ margin: "auto" }} className="imges">
            <AiOutlineMail size={50} color="white" opacity="0.8" />
          </div>
          <div className="title">
            <h2>Email</h2>
          </div>
          <div className="para">Connect me through my Email</div>
          <a style={{ color: "#9f9fff", cursor: "text" }}>
            chiragajmera57@gmail.com
          </a>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="center">
          <div style={{ margin: "auto" }} className="imges">
            <FiGithub size={50} color="white" opacity="0.8" />
          </div>
          <div className="title">
            <h2>Github</h2>
          </div>
          <div className="para">Connect me through Github</div>
          <a
            style={{ color: "#9f9fff" }}
            target="_blank"
            href="https://github.com/ChiragAjmera57"
           
          >
           Chirag Ajmera
          </a>
        </Box>
      </HStack>
      <Box  w="75vw" id="form-input-box" mt={70}>
        <Grid gap={5} id='form-inputs' templateColumns="repeat(2, 1fr)">
          <GridItem rowSpan={2}>
            <Box id="left"  >
              <Stack spacing={5}>
                <Input spellCheck="false" color='white' placeholder="Name" />
                <Input  spellCheck="false" color='white' placeholder="Email" />
                <Input spellCheck="false" color='white' placeholder="Subject" />
              </Stack>
            </Box>
          </GridItem>
          <GridItem rowSpan={2}>
            <Box id="right"  h="auto" >
              <Textarea spellCheck="false" color='white' placeholder="Message" h="21vh"/>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" w="75vw"   mt={5}  >
         <a href="" id="resume-btn">Submit</a>
         </Box>
    </div>



    <Box id="footer" display="flex"  alignItems="center" h="20vh" bgColor="rgb(19 20 25)">
    <a id="fontlogo" href="">C</a>
    <Box bgColor="rgb(19 20 25)" id="footer-social" display="flex" justifyContent="space-around" w="7%" >
      <a href="https://www.instagram.com/chiragajmera24/" target="_blank"><AiOutlineInstagram  color="white" size={30} opacity={0.6}  /></a>
      <a  href="https://goo.gl/maps/5hmA5hCGBTdb8o7r7" target="_blank"><GoLocation color="white" size={30} opacity={0.6}/></a>
      <a href="https://www.linkedin.com/in/chirag-ajmera-08467425b/" target="_blank"><AiOutlineLinkedin color="white" size={30} opacity={0.6}/></a>
    </Box>

    <Box width="22%" color="white" id="footer-para-box" ml="46.5vw" bg="rgb(19 20 25)" >
      <Text  bg="rgb(19 20 25)" textAlign='right' id="footer-para">Thank you for visiting!</Text>
    </Box>
    </Box>

    </>
  );
}
