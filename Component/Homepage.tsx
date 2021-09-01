import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import classes from './CSS/homepage.module.css'
import Image from 'next/image'

import AndroidImg from '../image/feature__web.webp';
import Tools from '../image/feature__tools.webp'
import Lock from '../image/images.png'
import Button from '../UX/button'

export default function Homepage() {
               return (
                            <>
                            <Grid  container > 
                                
                                <Grid item md={12} xs={12}>
                                   <h1 className={classes.size}> Successful Front-end Development</h1>
                                </Grid>
                               
                               <Grid md={2}>

                                </Grid>

                                <Grid item md={8} xs={12}>
                                                 <h1 className={classes.size1}> 
                                                 Hi. I’m Vaibhav, a freelance Front-end Developer with 3 years of Front-end Development Experiences 
                                                 </h1>

                                </Grid>

                                <Grid md={2} ></Grid>

                                </Grid>


<Grid container spacing={2} style={ { marginTop: '4%'} }>

<Grid item md={3} xs={2}></Grid>

                            <Grid item md={2} xs={3} className={classes.card}>
                                           
                                           <Image src={AndroidImg} width={150} height={200} />

                                           <p className={classes.cardHeading}>Front-end development</p>
                                           <p className={classes.cardDescription}>Responsive websites built for an optimal user experience that achieves your business goals.</p>
                                </Grid> 

                            <Grid item md={2} xs={3} className={classes.card}>
                                           <Image src={Tools}  width={150} height={200} />

                                           <p className={classes.cardHeading}> Performance, SEO, & accessibility testing</p>
                           <p className={classes.cardDescription}>Make your website fast, easy to find, and reach the widest audience possible.</p>
                                </Grid>

                                 <Grid item md={2} xs={3} className={classes.card}>
                                     
                                           <Image src={Lock}  width={180} height={200} />
                                 <p className={classes.cardHeading}>           Fully Secured    </p>
                                     <p className={classes.cardDescription}> Secure Your Application Database and Data like Personal information </p>
                                      

                                </Grid>
                            
<Grid item md={3} xs={2}></Grid>
                            
</Grid>

<Grid container  spacing={2} style={ { marginTop: '4%'} }>

  <Grid item md={12} xs={12}>

 <h1 className={classes.size}>  Featured Work</h1>

  </Grid>
                           
                           <Grid className={classes.projectWork}    md={3} xs={3}>
                               
                               Site Name
                               
                               Site Description

                           </Grid>
                           <Grid className={classes.projectWork}   md={5} xs={5}>
                               
                               Website of Image

                           </Grid>
                            <Grid   className={classes.projectWork}  md={4} xs={4}>
                                
                                Androoid Site Image

                            </Grid>


                            <Grid className={classes.projectWork} md={12} xs={12}>
                              <Button />
                            </Grid>

</Grid>

                               


</>                            
               )
}