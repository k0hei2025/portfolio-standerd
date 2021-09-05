import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Grid } from '@material-ui/core'
import classes from '../Component/CSS/homepage.module.css'
import Image from  'next/image'
import myProfile from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'

import Button from '../UX/button'

export default function aboutMe() {
               return (
                              <>
                              <Navbar />
        <Grid container className={classes.boxs}> 
                         <Grid  item md={12} xs={12}>
 <h1 className={classes.size}>  About Me  </h1>

                                        </Grid>  
                                        <Grid item md={3} ></Grid>
                                        <Grid item md={1} xs={12} className={classes.prot}>
                                                       <Image src={myProfile} height="150" width="120" />
                                        </Grid>
                                        <Grid item md={5} xs={12} >
                                        <p className={classes.aboutDescription}> I am a Front-end Developer with 3 years  experience, Trilingual Undergraduate University Student. I create successful websites that are fast, easy to use, and built with best practices.

I work to make a better web one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements 
</p>
                                        </Grid>
                                        <Grid item md={3}  ></Grid>
                                      
                                      <Grid item md={3}></Grid>

                                        <Grid item md={6} xs={12}>

                                                       <p className={classes.aboutDescription}>My main experience is in front-end development but I also have a passion for Learning Different Country Languages . I can speak Japnese English Hindi Natively , I Love Frontend optimizing and Efficiency work specially  efficiency and design patterns of Project . My clients have found that hiring me has saved them time and money, made it easier to grow their website alongside their business, and made for a product that is consistently of high quality.</p>
                                        </Grid>

                                      <Grid item md={3}></Grid>

                                           <Grid item md={12} xs={12}>
                                             <Button />
                                           </Grid>



                                        </Grid>
                                                    
                                                    


                                                <Footer /> 
                              </>
               )
}
