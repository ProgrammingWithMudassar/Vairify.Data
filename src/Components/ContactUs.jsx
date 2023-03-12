import React from 'react'
import "./Styles.css"
import { Container, Box, Grid, Typography, Stack ,Button } from '@mui/material'

const ContactUS = () => {
  return (
    <Box sx={{mt:{xs:10,md:10}}} className="bgRightCirule">
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='name' fontWeight={600}>Contact Me</Typography>
        </Box>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12}>
            <Box textAlign='center'>
              <Typography variant="h4" fontWeight={600}>Send me an email</Typography>
              <Typography variant="body1" >I'm very responsive to messages</Typography>
            </Box>
            <Stack direction="column" spacing={2} mt={4}>
              <input type="text" placeholder='Name' className='input'/>
              <input type="email" placeholder='Email' className='input'/>
              <input type="text" placeholder='Subject' className='input'/>
              <textarea placeholder='Message' cols="30" rows="10" className='textInput'></textarea>
              <Button style={{borderRadius:'20px',height:"40px",color:'#ffffff'}}>Send me</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactUS