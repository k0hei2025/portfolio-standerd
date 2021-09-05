import React, { useRef, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Grid } from '@material-ui/core'
import Image from 'next/image'
import  emailJs from 'emailjs-com'

import classes from '../styles/contact.module.css'
import myImage from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import { textAlign } from '@material-ui/system'

export default function Contact() {

  const [err , setErr] = useState(false);
  const [form , setForm]  = useState(false);
  const nameRef =    useRef <HTMLInputElement> (null);
  const emailRef =   useRef <HTMLInputElement> (null);
  const messageRef = useRef <HTMLInputElement> (null);

 const submitHandler = async(e : any) => {
       e.preventDefault()

       console.log(nameRef.current.value)

       if ( nameRef.current.value !=='' && emailRef.current.value!=='' ){

        
     const data = await emailJs.sendForm('service_wjlk3cj' , 'template_f2tn10s' , e.target , 'user_IUMCNnwwltTydfJ2ttBAv');
     console.log(data)
     const resData  = await data;
     console.log(resData);

     setForm(true)



       }

       else {
                 setErr(true)

       }

 }



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
               
                  
          {err ? <h2 className={classes.popup} style={{color:"red"}}>Invalid Parameters Make sure you fill form Correctly</h2> : <p></p> }

           {form ? <h2 className={classes.popup} style={{color:"green"}}> Email sent Successfully </h2> : <p></p> }

               <form className={classes.form}  onSubmit={submitHandler}>
               <h2> About You</h2>

 <p> Your Name</p>
 <input name='username' type="text" className={classes.input} ref={nameRef} ></input>
               
               <p> Email</p>
 <input name='email' type="text" className={classes.input} ref={emailRef} ></input>
               
               <p> General Message</p>
 <textarea name='message' className={classes.area} type="textarea" rows="4" col="50"  ref={messageRef} ></textarea>

  <button type='submit' className={classes.buttonTwo} > <span> Send </span> </button>  
        

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
