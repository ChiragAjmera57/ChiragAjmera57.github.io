import React from 'react'
import Card2 from './Card'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import bewkoof from '../image/bewkoofimg.png'
import formweb from '../image/formweb.png'
import youtube from '../image/youtube.png'
import heathcare from '../image/healthcare.png'
import portfoio from '../image/portfolio.png'
import movix from '../image/movix.png'
import '../image/project.css'

export default function Project() {
  return (
    <div id="projects" >
        {/* <hr />
        <div className="project-card">
            <img src="" alt="projectimg" />
            <p className="project-title">Bewakoof</p>
            <p className="project-description">In our first ever project we tried to clone a famous clothing E-Commerce website firmly known as "Bewakoof" which deals with all kind of clothing segment.It has list of wide range of product and for user convinence we have provided sorting and filteration</p>
            <p  className="project-tech-stack">html,css,javastript</p>
            <a href="https://github.com/ManojSharma1122/Bewakoof"  className="project-github-link">repo link</a>
            <br />
            <a href="https://relaxed-profiterole-506b95.netlify.app/index.html" className="project-deployed-link">deploy link</a>
        </div>
        <hr />
        <div className="project-card">
        <img src="" alt="projectimg" />
            <p className="project-title">house rent</p>
            <p className="project-description">It is a simple house rent website which it made in one of masai evaluation you and also add new house on rent</p>
            <p  className="project-tech-stack">html,css,javasricpt,chakraui</p>
            <a href="https://github.com/ChiragAjmera57/Form-site"  className="project-github-link">repo link</a>
            <br />
            <a href="https://form-site-eosin.vercel.app/" className="project-deployed-link">deploy link</a>
        </div>
        <hr />
        <div className="project-card">
        <img src="" alt="projectimg" />
            <p className="project-title">youtube</p>
            <p className="project-description">It usage youtube api to fetch data and display simple html and css with some line of js code lead to this project</p>
            <p  className="project-tech-stack">html,css,javasript</p>
            <a href="https://github.com/masai-course/chirag_ajmera_pw12_059/tree/master/unit-5/sprint-2/day-5/assignment"  className="project-github-link">repo link</a>
            <br />
            <a href="https://velvety-bonbon-b84a70.netlify.app/" className="project-deployed-link">deploy link</a>
        </div>
        <div className="project-card">
        <img src="" alt="projectimg" />
            <p className="project-title">healthcare</p>
            <p className="project-description">Made this website with our own api and it has a bunch of sorting and filteration with wide range of data</p>
            <p  className="project-tech-stack">html,css,javasript</p>
            <a href="https://github.com/anuragbhardwaj21/HealthCare"  className="project-github-link">repo link</a>
            <br />
            <a href="https://github.com/anuragbhardwaj21/HealthCare" className="project-deployed-link">deploy link</a>
        </div>
        <hr />
        <div className="project-card">
        <img src="" alt="projectimg" />
            <p className="project-title">portfolio</p>
            <p className="project-description">This is my portfolio your are currently viewing made this using cool css and npm packages like react scroll and chakra ui</p>
            <p  className="project-tech-stack">html,css,javasript</p>
            <a href="https://github.com/anuragbhardwaj21/HealthCare"  className="project-github-link">repo link</a>
            <br />
            <a href="https://github.com/anuragbhardwaj21/HealthCare" className="project-deployed-link">deploy link</a>
        </div>
        <hr />
       
        <hr /> */}
    <Box w="100%" mt={20} mb={12} display="flex" justifyContent="center" id="project1">
          <Text
          id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
          >
            Projects
          </Text>
        </Box>
    <Box w="100vw" display="flex" justifyContent="space-around">
        <SimpleGrid id='project-item' columns={3} spacing="10">
          <div data-aos="zoom-in-left"><Card2 url={bewkoof} title={"Bewakoof.com"} des={"In our first ever project we tried to clone a famous clothing E-Commerce website firmly known as 'Bewakoof.com'"} gitlink={"https://github.com/ManojSharma1122/Bewakoof"} depllink={"https://relaxed-profiterole-506b95.netlify.app/index.html"}  /></div>
          <div data-aos="zoom-in-left"><Card2 url={formweb} title={"House Rent"} des={"It is a simple house rent website which it made in one of masai evaluation you and also add new house on rent"} gitlink={"https://github.com/ManojSharma1122/Bewakoof"} depllink={"https://relaxed-profiterole-506b95.netlify.app/index.html"}   /></div>
          <div data-aos="zoom-in-left"><Card2 url={youtube} title={"Youtube Search"} des={"It usage youtube api to fetch data and display simple html and css with some line of js code lead to this project"} gitlink={"https://github.com/masai-course/chirag_ajmera_pw12_059/tree/master/unit-5/sprint-2/day-5/assignment"} depllink={"https://velvety-bonbon-b84a70.netlify.app/"}   /></div>
          <div data-aos="zoom-in-left"><Card2 url={heathcare} title={"Health Care Site"} des={"Made this website with our own api and it has a bunch of sorting and filteration with wide range of data"} gitlink={"https://github.com/anuragbhardwaj21/HealthCare"} depllink={"https://github.com/anuragbhardwaj21/HealthCare"}   /></div>
          <div data-aos="zoom-in-left"><Card2 url={portfoio} title={"Portfolio"} des={"This is my portfolio your are currently viewing made this using cool css and npm packages like react scroll and chakra ui"} gitlink={"https://github.com/anuragbhardwaj21/HealthCare"} depllink={"https://github.com/anuragbhardwaj21/HealthCare"}   /></div>
          <div data-aos="zoom-in-left"><Card2 url={movix} title={"Movie Database Website"} des={"React based movie database website where you can find data related to movie Techstack used:- React,Redux,React Route dom,TMDB api"} gitlink={"https://github.com/ChiragAjmera57/Movie_Flex"} depllink={"https://movie-flex-inky.vercel.app/"}   /></div>
        
       
        </SimpleGrid>
        </Box>
        
    </div>
  )
}
