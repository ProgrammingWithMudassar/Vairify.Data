import React from 'react'
import { Box, Container, Grid, Typography, Button, Card, ListItem, List } from '@mui/material'
import "./Styles.css"
import { aboutData } from '../Data/DummyData'


const About = () => {
  return (
    <Box sx={{ mt: { xs: "24rem", md: 10 } }} className="bgCirule" >
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='title name' fontWeight={600} >About Me</Typography>
        </Box>
        <Grid container spacing={10} sx={{ mt: { xs: 0, md: 2 } }}>
          <Grid item xs={12} md={8} display='flex' alignItems='center' >
            <Typography variant="body1" color="initial" sx={{textIndent:'30px'}}>{aboutData.desc}</Typography>
          </Grid>
          <Grid item xs={12} md={4} display='flex' alignItems='center' justifyContent="center">
            <img src={aboutData.img} alt="" style={{width:"16rem"}}/>
          </Grid>
        </Grid>
      </Container >
    </Box >
  )
}

export default About