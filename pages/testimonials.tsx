import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import classes from '../Component/CSS/homepage.module.css'
import { Grid } from '@material-ui/core'
import Image from 'next/image'

import Button from '../UX/button'
import {img} from '../image/company'

export default function Testimonials() {
               return (
                              <>
                              <Navbar />
                              <Grid container>
                         <Grid  item md={12} xs={12}>
 <h1 className={classes.size}>  Testimonials  </h1>

                                        </Grid>
                                        <Grid item md={2}></Grid>
                                        <Grid item md={8}>
                                    <p className={classes.size1}> I have 12 years commercial experience helping start-ups, small businesses, and agencies create successful websites.</p>  
                                    </Grid>
                                    <Grid item md={2}></Grid>




                                   <Grid item md={2}></Grid>
                                    <Grid item md={6} xs={12} className={classes.testinomialsDescription}>
                                           <p>feedback</p>
                                    </Grid>
                                    <Grid item md={2} xs={12} className={classes.testimonialsDescriptionTitle}> <Image src={img} height="100" width="300" /></Grid>
                                         <Grid item md={2}></Grid>
                              </Grid>
                                        
<Grid md={12}>
<Button />
</Grid>
                                     <Footer />  
                              </>
               )
}