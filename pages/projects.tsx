import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import classes from '../Component/CSS/homepage.module.css'
import { Grid } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import {SiJavascript , SiFirebase , SiWebrtc , SiSocketDotIo , SiPeertube , SiNextDotJs , SiJira , SiMongodb} from 'react-icons/si'
import {FaCss3Alt , FaReact , FaFigma , FaTrello} from 'react-icons/fa'
import {AiFillHtml5 , AiFillGithub} from 'react-icons/ai'
import {FaDocker , FaNodeJs} from 'react-icons/fa'


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
                                              <h1 className={classes.size}>Projects </h1>       


<Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Stream</h1>
      
                    <p  className={classes.aboutDescription} > I create that Application within a 15 days It't really a big task for me But I do my best to Complete that Application this application concept is based on video conferencing like professors can held class with more functionality and  in Secure Way  </p>

                    <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons} >   <SiJavascript />    <FaCss3Alt/> <AiFillHtml5/>  <FaNodeJs/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}> <FaDocker/> <AiFillGithub/>  <SiWebrtc/> <SiSocketDotIo/> <SiPeertube /> <SiJira/>  <FaTrello/>  <FaFigma /> </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiFirebase/>  </p>


                     </Grid>
                     {mobState ? <p></p> :    <Grid  item md={5} xs={12}>                      
                            <Link href="https://stream-321403.el.r.appspot.com/"><Image src={imageBoxWeb.stream} height={500} width={700}  /></Link>
                     </Grid>}
                  

                     <Grid  item md={4} xs={12} >
                                   <Link href="https://stream-321403.el.r.appspot.com/"><Image src={imageBoxMob.stream} height={500} width={300} /></Link>
                     </Grid>

                  </Grid>
                  
               <Grid style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Code Map</h1>
                      
                      <p className={classes.aboutDescription}>  The concept of this website is Collabaration and Sort out the Problems of Developers In this application a developers can collabarate there problematic code and other Developers helps him to correct the code or improve the codes  </p>

                        <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/>   <SiNextDotJs/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}>  <AiFillGithub/>  <FaFigma />  </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiFirebase/>  </p>

     

                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.codeMap} height={500} width={700} />
                     </Grid>} 



                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.codeMap} height={500} width={300} />
                     </Grid>

</Grid>

                         <Grid  style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Stream-New</h1>

                       <p className={classes.aboutDescription}> This is the Renew  application of previous stream not only that we can improve the latency problem the new additional things which i add in this application is improve the independent authenticated data with the help of this unauthenticated users cant see any data and event cant see there video screen and not able to perform any operation if the authenticated user give access to unwanted user then they can only open there audio only  </p>
     
      <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/> <AiFillHtml5/>  <FaNodeJs/> <FaReact/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}> <FaDocker/> <AiFillGithub/>  <SiWebrtc/> <SiSocketDotIo/> <SiPeertube /> <SiJira/>  <FaTrello/>  <FaFigma /> </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiFirebase/>  </p>



                     </Grid>
                    {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                            <Link href="https://stream-new-323407.el.r.appspot.com/"><Image src={imageBoxWeb.streamNew} height={500} width={700} /></Link>
                     </Grid>
 }

                     <Grid  item md={4} xs={12} >
                                            <Link href="https://stream-new-323407.el.r.appspot.com/"><Image src={imageBoxMob.streamNew} height={500} width={300} /></Link>
                     </Grid>

</Grid>
                   

                         
            <Grid  style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                      <h1>Microsoft Campuss Club (SVVV)</h1>

                        <p className={classes.aboutDescription}> This is my club application which I work as front-end developer  </p>


                        <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/> <AiFillHtml5/>  <FaNodeJs/> <FaReact/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}> <FaDocker/> <AiFillGithub/>   <FaTrello/>  <FaFigma /> </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiFirebase/>  </p>


     

                     </Grid>
                    {mobState ? <p></p> : <Grid  item md={5} xs={12}>
                               <Link href="https://mccsvvv.co/"><Image src={imageBoxWeb.mcc} height={500} width={700} /></Link> 
                     </Grid> } 

                     <Grid  item md={4} xs={12} >
                                            <Link href="https://mccsvvv.co/"><Image src={imageBoxMob.mcc} height={500} width={300} /></Link> 
                     </Grid>

</Grid>


     <Grid  style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>AnimeBlog</h1>
     
                            <p className={classes.aboutDescription}> This application is based on the peoples who like and want to see Animes so that the peoples post there anime which they already watched and want to share to other peoples and recommand to other peoples and
                             You can also see all anime by activating music buttons and enjoy this application 
                              </p>
                             <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/> <AiFillHtml5/>  <FaNodeJs/> <FaReact/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}>  <AiFillGithub/>   <FaTrello/>  <FaFigma /> </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiFirebase/>  </p>


                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Link href="https://anime-blog-10478.web.app/"><Image src={imageBoxWeb.anime} height={500} width={700} /></Link>
                     </Grid> }   

                     <Grid  item md={4} xs={12} >
                                            <Link href="https://anime-blog-10478.web.app/"><Image src={imageBoxMob.anime} height={500} width={300} /></Link>
                     </Grid>

</Grid>




            <Grid  style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Event-Loop </h1>
                       
                            <p className={classes.aboutDescription}> In this application you can add the Custom Events and also comment that event Like whats you Recommandation after watching that Event you can also schedule the events event watch this events live also   </p>
     

           <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2>
                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/>   <SiNextDotJs/> </p>
                       <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>
                    <p className={classes.icons}>  <AiFillGithub/>  <FaFigma />  </p>
                    
                      <h2 className={classes.aboutDescription}>
                      Database  
                    </h2>
                     <p className={classes.icons}>  <SiMongodb/> </p>

     

                     </Grid>
                    {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Link href="https://event-loop.vercel.app/"><Image src={imageBoxWeb.eventloop} height={500} width={700} /></Link>
                     </Grid>} 

                     <Grid  item md={4} xs={12} >
                                            <Link href="https://event-loop.vercel.app/"><Image src={imageBoxMob.eventloop} height={500} width={300} /></Link>
                     </Grid>

</Grid>

                           <Button />             
 
                              <Footer />
                              </>
               )
}
