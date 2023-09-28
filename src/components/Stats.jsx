import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export default function 
() {
  return (
    <div className='github-stats-container' >
        <Box w="100%" display="flex" justifyContent="center" id="about1">
          <Text
          id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
          > 
            Github
          </Text>
        </Box>
        <img src="https://github-readme-streak-stats.herokuapp.com?user=ChiragAjmera57" className='github-element' id="github-streak-stats" alt="" />
       
        <img id="github-top-langs" className='github-element' src="https://github-readme-stats.vercel.app/api/top-langs/?username=ChiragAjmera57&size_weight=0.5&count_weight=0.5"  alt="" />
        
        <img id="github-stats-card"  src="https://github-readme-stats.vercel.app/api?username=ChiragAjmera57" alt="" />
        <GitHubCalendar style={{color:'white'}} colorScheme='light'  class="react-activity-calendar  github-element" username="ChiragAjmera57" />
    </div>
  )
}
