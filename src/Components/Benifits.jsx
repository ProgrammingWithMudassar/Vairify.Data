import React from 'react'
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import "./Styles.css"
import { benifitData, benifitCardData } from '../Data/DummyData'
import { motion } from 'framer-motion'



const Benifits = () => {
  return (
    <Box sx={{ mt: { xs: 10, md: 10 } }} className="benifitCirule">
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='title name' fontWeight={600} >Benefits </Typography>
        </Box>
        <Typography variant="h6" color="initial" sx={{ textIndent: '4em', mt: 6 }}>{benifitData.desc}</Typography>
        <Grid container spacing={2} sx={{ mt: { xs: 2, md: 8 } }}>
          {
            benifitCardData.map((data) => {
              return (
                <Grid item xs={12} md={4} sx={{ mt: { xs: 0, md: `${data.mt}` } }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { opacity: 0, y: data.x },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card variant="outlined" sx={{ minHeight: '26rem', pt: 2 }}>
                      <CardContent>
                        <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' sx={{ gap: 2 }}>
                          <img src={data.img} alt="" style={{ width: `${data.width}` }} />
                          <Typography variant="h6" color="initial" fontWeight={600} mt={2}>{data.title}</Typography>
                          <Typography variant="body1" color="initial" mt={2}>{data.desc}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
            })
          }
        </Grid>
      </Container >
    </Box >
  )
}

export default Benifits