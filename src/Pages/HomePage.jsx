import React from 'react'
import { Stack } from '@mui/system'
import {
  Navbar, Home, About, Benifits, ContactUs, Footer, Feature, Thanks
} from '../Components/index.js'
import '../Components/Styles.css'


const HomePage = () => {
  return (
    <Stack direction='column' sx={{ gap: { xs: 0, md: '150px' }}}>
      <Home />
      <About />
      <Benifits />
      <Feature />
      <Thanks />
      <ContactUs />
      <Footer />
    </Stack>
)
}

export default HomePage


