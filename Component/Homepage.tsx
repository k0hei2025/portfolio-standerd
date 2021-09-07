import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import classes from './CSS/homepage.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AndroidImg from '../image/feature__web.webp';
import Tools from '../image/feature__tools.webp'
import Lock from '../image/images.png'
import Button from '../UX/button'
import {useSelector , useDispatch} from 'react-redux'
import {RootState , actionStore}  from '../store/store'
import {imageBoxMob , imageBoxWeb} from '../Component/imageContainer'
import {img} from '../image/company'

export default function Homepage() {

     

    const mobState = useSelector((state : RootState)=>state.mobState);
    const dispatch = useDispatch();
          console.log(mobState)


         
          useEffect(() =>{
            
             dispatch(actionStore.setMobileState())

          },[])


          

               return (
                            <>
                            <Grid  container className={classes.pad} > 
                                
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

<Grid item md={12} xs={12} className={classes.border}></Grid>

  <Grid item md={12} xs={12}>


 <h1 className={classes.size}>  Featured Work</h1>

  </Grid>
                           
                   <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={3} xs={12}>

                       <h1>Stream</h1>
     

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
     

                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.codeMap} height={500} width={700} />
                     </Grid>} 


                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.codeMap} height={500} width={300} />
                     </Grid>

</Grid>
 
 <Grid style={{textAlign: 'center'}}  item md={12} xs={12}>
                    <Link href="/projects"> View all Projects </Link>
</Grid>

                            <Grid className={classes.projectWork} md={12} xs={12}>
                              <Button />
                            </Grid>



  <Grid item md={12} xs={12}>
    <Grid item md={12} xs={12} className={classes.border}></Grid>

 <h1 className={classes.size}> Testimonials</h1>

  </Grid>

      <Grid item md={2}></Grid>
                                    <Grid item md={6} xs={12} className={classes.testinomialsDescription}>
                                           <p className={classes.aboutDescription}>I have worked with many bright, young professionals, but Vaibhav verma's talent and problem-solving skills stand out among his peers. I remain impressed with his driven work ethic and ability to work creatively under pressure at Sttabot Technology. He has done his task but some of the task were outside of Vaibhav’s normal role, but he accepted the responsibility without hesitation. Within the week, I'm grateful for Him & his team’s hard work in meeting the deadline under the circumstances.</p>
                                    </Grid>
                                    <Grid item md={2} xs={12} className={classes.testimonialsDescriptionTitle}> <Image src={img} height="100" width="300" /></Grid>
                                         <Grid item md={2}></Grid>

                                         <Grid style={{textAlign: 'center'}} item md={12} xs={12}>
                                        <Link href="/testimonials"> View all testimonials </Link>
                                    </Grid>


                            <Grid style={{marginBottom: '3%'}} className={classes.projectWork} md={12} xs={12}>
                              <Button />
                            </Grid>



</Grid>


                               


</>                            
               )
}
