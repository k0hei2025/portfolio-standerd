import React, { useRef, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Grid, LinearProgress } from '@material-ui/core'
import Image from 'next/image'
import  emailJs from 'emailjs-com'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import classes from '../styles/contact.module.css'
import myImage from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import LinnerBuffer from '../Component/spinner'
import { textAlign } from '@material-ui/system'
import {useSelector} from 'react-redux'
import { RootState } from '../store/store'
import classNames from 'classnames'

export default function Contact() {

  const [err , setErr] = useState(false);
  const [form , setForm]  = useState(false);
  const [loading , setLoading] = useState(false);
  const nameRef =    useRef <HTMLInputElement> (null);
  const emailRef =   useRef <HTMLInputElement> (null);
  const messageRef = useRef <HTMLInputElement> (null);

  const language = useSelector((state : RootState) => state.japanese)

 const submitHandler = async(e : any) => {
         setLoading(true);
       e.preventDefault()

       console.log(nameRef.current.value)

       if ( nameRef.current.value !=='' && emailRef.current.value!=='' ){

        
     const data = await emailJs.sendForm('service_wjlk3cj' , 'template_f2tn10s' , e.target , 'user_IUMCNnwwltTydfJ2ttBAv');
     console.log(data)
     const resData  = await data;
     console.log(resData);

      setLoading(false)
      setErr(false);
     setForm(true)



       }

       else {
                 setErr(true)
                 setForm(false)
                 setLoading(false)

       }

 }



               return (
                              <Grid container style={{marginRight:"5px"}}>
                              <Navbar/>
                              <Grid container style={{marginBottom:'5%'}} >
                                             <Grid item md={1}></Grid>
                                             <Grid className={classes.getTouch} item md={5} xs={12}>
                                           
                                         {language ? <h1 className={ classNames(classes.jtext , classes.heading) }>お問い合わせ </h1> :  <h1 className={classes.heading}> Get in Touch</h1>} 

                                       {language ? <p className={ classNames(classes.jtext , classes.description) }>  メセージ送ってください私は早く返事します </p>
  :  <p className={classes.description}>Send a general message  I reply to you as soon as possible.</p>
 }   
                              <Grid container>

<Grid item md={1}></Grid>

<Grid className={classes.formContainer} item md={12} xs={12}>
               
                  
          {err ? <h2 className={classes.popup} style={{color:"#FF0000"}}> {language ? "エーラがありましたもう一度チェックしてください" : ' Invalid Parameters Make sure you fill form Correctly'  }</h2> : <p></p> }

           {form ? <h2 className={classes.popup} style={{color:"green"}}> {language ? 'メール送りました' : '  Email sent Successfully '}</h2> : <p></p> }
             {loading ? <LinnerBuffer /> : <p></p> }  

               <form className={classes.form}  onSubmit={submitHandler}>
            {language ? <h2 className={classes.jtext}> あなたについて </h2> :  <h2> About You</h2>}  

   {language ? <p className={classes.jtext}> 名前 </p> :    <p> Your Name</p> }
 
 <input name='username' type="text" className={classes.input} ref={nameRef} ></input>
               
             {language ? <p className={classes.jtext}> メール </p> : <p> Email</p> }  
 <input name='email' type="text" className={classes.input} ref={emailRef} ></input>
               
          {language ? <p className={classes.jtext}>  メセージ  </p>:  <p> General Message</p> }    
 <textarea name='message' className={classes.area} type="textarea" rows="4" col="50"  ref={messageRef} ></textarea>

  <button type='submit' className={classes.buttonTwo} > <span> Send </span> </button>  
        

</form>

      


</Grid>




</Grid>


                                             </Grid>
                              
                                             <Grid md={1} ></Grid>


                                             <Grid item md={1} xs={6} className={classes.aboutHeading}>
                          {language ? <h2 className={classes.jtext}>私について</h2> :  <h2>About Me </h2> }  
<Image src={myImage} width={100} height={120} />
  

<Grid item md={2} xs={6} className={classes.about}>

  <p> <EmailIcon />    vaibhavvermaonline@gmail.com</p>

  <p> <PhoneIcon />+918223914227</p>

  
</Grid>



  </Grid>





                                             <Grid item md={2} xs={6} style={{textAlign: 'left' , marginTop: '4%'}}>
                                             
                                             {language ? <p className={classNames(classes.about , classes.jtext)}> 私は3年の経験を持つてフロントエンド開発者です、3か国語で話すことができます大学生です。 性能早いくて使う安いようなアプリケーション使います  </p> :                                                   <p className={classes.about}>
I am a Front-end Developer with 3 years  experience, Trilingual, Undergraduate Student. I create successful websites that are Fast More Secure Well Designed.</p>          
 }

  



                                              



                                             </Grid>



    


                                             <Grid item md={1}>

                                    
                                           
                                         
                                             </Grid>




                              </Grid>
                                 
                                     




                              <Footer/>
                              </Grid>
               )

}
