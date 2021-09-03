import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Grid } from '@material-ui/core'
import Image from 'next/image'

import classes from '../styles/contact.module.css'
import myImage from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import { textAlign } from '@material-ui/system'

export default function Contact() {
               return (
                              <>
                              <Navbar/>
                              <Grid container style={{marginBottom:'5%'}} >
                                             <Grid item md={1}></Grid>
                                             <Grid item md={5} xs={12}>
                                           
                                           <h1 className={classes.heading}> Get in Touch</h1>

                                           <p className={classes.description}>Send a general message or details of a project you like me to be a part of and I will get back to you as soon as possible.</p>

                              <Grid container>

<Grid item md={1}></Grid>

<Grid className={classes.formContainer} item md={12} xs={12}>
               
               <form className={classes.form} >
               <h2> About You</h2>

 <p> Your Name</p>
 <input type="text" className={classes.input} ></input>
               
               <p> Email</p>
 <input type="text" className={classes.input} ></input>
               
               <p> General Message</p>
 <input type="text" className={classes.input} ></input>

  <button className={classes.buttonTwo}><span>Send</span></button>
        

</form>

      


</Grid>




</Grid>


                                             </Grid>
                              
                                             <Grid md={1} ></Grid>


                                             <Grid item md={1} xs={6}>
                             <h2>About Me </h2>
<Image src={myImage} width={100} height={120} />
  

<Grid item md={2} xs={6} className={classes.about}>

  <p>Email  vaibhavvermaonline@gmail.com</p>

  <p>Tel +918223914227</p>

  
</Grid>



  </Grid>





                                             <Grid item md={2} xs={6} style={{textAlign: 'left' , marginTop: '4%'}}>
                                                    <p className={classes.about}>
I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are</p>          




                                              



                                             </Grid>



    


                                             <Grid item md={1}>

                                    
                                           
                                         
                                             </Grid>




                              </Grid>
                                 
                                     




                              <Footer/>
                              </>
               )

}
