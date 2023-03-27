import React, { useState } from 'react'
import { Box, Container, Button, Typography, Divider } from '@mui/material'
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Assets/png/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <Box sx={{ height: "100px" }} display="flex" alignItems="center" >
      <Container >

        {/* Laptop Navbar */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <Box>
            <img src={Logo} alt="" style={{ width: "12rem" }} />
          </Box>
          <Box display='flex' alignContent='center'>
            <Button color='myColor' sx={{ ml: 4, px: 3, borderRadius:'30px'}} >Join Us</Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 2 }} color="#9698A9" className='divider' />

      </Container>
    </Box>
  )
}

export default Navbar