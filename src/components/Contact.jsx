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
import profilelogo from '../image/profilelogo.svg' 
import '../image/footer.css'

export default function Contact() {
  return (
    <>
    <div id="contact" style={{ margin: "5vh 9% 0 9%",height:"80vh" }}>
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
            <GoLocation size={50} color="white" opacity="0.8" />
          </div>
          <div className="title">
            <h2>Location</h2>
          </div>
          <div className="para">Bhilwara,Rajshthan</div>
          <a
            style={{ color: "#9f9fff" }}
            target="_blank"
            href="https://goo.gl/maps/5hmA5hCGBTdb8o7r7"
          >
            View on map
          </a>
        </Box>
      </HStack>
      <Box  w="75vw" mt={70}>
        <Grid gap={5} templateColumns="repeat(2, 1fr)">
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
    <Box bgColor="rgb(19 20 25)" display="flex" justifyContent="space-around" w="7%" >
      <a href=""><AiOutlineInstagram  color="white" size={20} opacity={0.6}  /></a>
      <a href=""><AiFillGithub color="white" size={20} opacity={0.6}/></a>
      <a href=""><AiOutlineLinkedin color="white" size={20} opacity={0.6}/></a>
        
        
    </Box>
    <Box width="22%" color="white" ml="46.5vw" bg="rgb(19 20 25)" >
      <Text  bg="rgb(19 20 25)">Thank you for visiting my personal portfolio website.</Text>
    </Box>
    </Box>

    </>
  );
}
