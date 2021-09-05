import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import classes from '../Component/CSS/homepage.module.css'
import { Grid } from '@material-ui/core'
import Image from 'next/image'

import {imageBoxMob , imageBoxWeb} from '../Component/imageContainer'
import { useDispatch, useSelector } from 'react-redux'
import {RootState , actionStore} from '../store/store'
import Button from '../UX/button'


export default function Pprojects() {

  const mobState = useSelector((state : RootState)=>state.mobState)

  const dispatch  = useDispatch();



    useEffect(()=>{

         dispatch(actionStore.setMobileState())
          
    },[])





               return (
                              <>
                              <Navbar />
                                              <h1 className={classes.size}>Projects page</h1>       


<Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Stream</h1>
     

                     </Grid>
                     {mobState ? <p></p> :    <Grid  item md={5} xs={12}>                      
                              <Image src={imageBoxWeb.stream} height={500} width={700} />
                     </Grid>}
                  

                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.stream} height={500} width={300} />
                     </Grid>

</Grid>

               <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Code Map</h1>
     

                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.codeMap} height={500} width={700} />
                     </Grid>} 


                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.codeMap} height={500} width={300} />
                     </Grid>

</Grid>

                         <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Stream-New</h1>
     

                     </Grid>
                    {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.streamNew} height={500} width={700} />
                     </Grid>
 }

                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.streamNew} height={500} width={300} />
                     </Grid>

</Grid>
                   

                              <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>AnimeBlog</h1>
     

                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.anime} height={500} width={700} />
                     </Grid> }   

                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.anime} height={500} width={300} />
                     </Grid>

</Grid>



            <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Microsoft Campuss Club (SVVV)  </h1>
     

                     </Grid>
                    {mobState ? <p></p> : <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.mcc} height={500} width={700} />
                     </Grid> } 

                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.mcc} height={500} width={300} />
                     </Grid>

</Grid>


            <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Event-Loop </h1>
     

                     </Grid>
                    {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.eventloop} height={500} width={700} />
                     </Grid>} 

                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.eventloop} height={500} width={300} />
                     </Grid>

</Grid>

                           <Button />             
 
                              <Footer />
                              </>
               )
}
