import React, { useState } from 'react'
import { Box, Container, Button, Typography, Divider } from '@mui/material'
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../Assets/png/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <Box sx={{ height: "80px" }} display="flex" alignItems="center" >
      <Container >
        {/* Laptop Navbar */}
        <Box className='PC'>
          <Box>
            <Link to="/" style={{ color: "#000" }}>
              <img src={logo} alt="" width={140} />
            </Link>
          </Box>
          <Box display='flex' alignContent='center'>
            <ul className='LaptopuList'>
              <li style={{ fontSize: "0.8rem" }}><Link to="/whatNext" style={{ color: "#000" }}>Whats Next</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/CountriesProviderRepresentative" style={{ color: "#000" }}>Countries & Provider Representative</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/VairifyWorldwideForum" style={{ color: "#000" }}>Vairify Worldwide Forum</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/MyRevenueportal" style={{ color: "#000" }}>My Revenue portal</Link></li>
            </ul>
            <Link to='/ContactMe'>
              <Button color='myColor' sx={{ ml: 4, px: 3, borderRadius: '30px', fontSize: "1rem" }}>Register</Button>
              <Button color='myColor' sx={{ ml: 4, px: 4.2, borderRadius: '30px', fontSize: "1rem" }}>Login</Button>
            </Link>
          </Box>
        </Box>
        <Divider sx={{ mt: 2 }} color="#9698A9" className='divider' />

        {/* Mobile Navbar */}
        <Box className='mobile'>
          <Box>
            <Link to="/" style={{ color: "#000" }}>
              <img src={logo} alt="" width={140} />
            </Link>
          </Box>
          <Box>
            {
              nav ?
                <CloseIcon style={{ color: "#000" }} onClick={handleClick} /> :
                <MenuIcon style={{ color: "#000" }} onClick={handleClick} />
            }
          </Box>
          <Box className={nav ? 'mobileNav' : 'd'} >
            <ul className='uList'>
              <li style={{ fontSize: "0.8rem" }}><Link to="/whatNext" style={{ color: "#fff" }}>Whats Next</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/CountriesProviderRepresentative" style={{ color: "#fff" }}>Countries & Provider Representative</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/VairifyWorldwideForum" style={{ color: "#fff" }}>Vairify Worldwide Forum</Link></li>
              <li style={{ fontSize: "0.8rem" }}><Link to="/MyRevenueportal" style={{ color: "#fff" }}>My Revenue portal</Link></li>
            </ul>
            <Link to='/ContactMe'>
              <Button color='myColor' sx={{ ml: 4, px: 3, borderRadius: '30px', fontSize: "1rem" }}>Register</Button>
              <Button color='myColor' sx={{ ml: 4, px: 4.2, borderRadius: '30px', fontSize: "1rem" }}>Login</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar