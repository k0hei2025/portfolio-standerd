import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Grid } from '@material-ui/core'
import classes from '../Component/CSS/homepage.module.css'
import Image from  'next/image'
import myProfile from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'

export default function aboutMe() {
               return (
                              <>
                              <Navbar />
        <Grid container>
                         <Grid  item md={12} xs={12}>
 <h1 className={classes.size}>  About Me  </h1>

                                        </Grid>  
                                        <Grid item md={3} ></Grid>
                                        <Grid item md={1} xs={6}>
                                                       <Image src={myProfile} height="150" width="120" />
                                        </Grid>
                                        <Grid item md={5} xs={6} >
                                        <p className={classes.cardDescription}> I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.

I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.
</p>
                                        </Grid>
                                        <Grid item md={3}  ></Grid>
                                      
                                      <Grid item md={3}></Grid>

                                        <Grid item md={6} xs={12}>

                                                       <p className={classes.cardDescription}>My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.  My clients have found that hiring me has saved them time and money, made it easier to grow their website alongside their business, and made for a product that is consistently of high quality.</p>
                                        </Grid>

                                      <Grid item md={3}></Grid>


                                        </Grid>
                                                <Footer /> 
                              </>
               )
}
