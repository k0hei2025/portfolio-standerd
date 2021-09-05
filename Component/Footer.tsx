import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import myImg from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import Image from 'next/image'
import classes from '../Component/CSS/footer.module.css'
import Link from 'next/link'


import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons'

export default function Footer() {

    const [ mobile , setMobile] = useState(false);
    const [contentStruct , setContentStruct] = useState({});
    const [webStruct , setWebStruct] = useState({});
    useEffect(()=>{
   

     if (window.innerWidth <= 900){
          setMobile(true);

          setContentStruct({
               val :                            
               <>
<Grid item md={2} xs={6} className={classes.imagePosition}>
     <Image src={myImg} width={100} height={120} alt="myImage" />
     <p className={classes.p}>Front-end Developer</p>
</Grid> 
<Grid item md={4} xs={6} className={classes.info2}>
   <p className={classes.info}>I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.</p>
</Grid>

<Grid   item md={3} xs={12}>
     <p className={classes.info}>  <GitHubIcon className={classes.icon} /> Github</p>
    
 <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>

   <p className={classes.info}>  <LinkedInIcon className={classes.icon} /> LINKEDIN</p>
    
 <p className={classes.info}>Lets connect on LinkedIn</p>



  
</Grid>
        
        </>



          })

     }
        
     if (window.innerWidth >= 900){
          setMobile(false);

          setWebStruct({
               val  :                            
               <>
<Grid item md={2} xs={6} className={classes.imagePosition}>
     <Image src={myImg} width={100} height={120} alt="myImage" />
     <p className={classes.p}>Front-end Developer</p>
</Grid> 
<Grid item md={4} xs={6} className={classes.info2}>
   <p className={classes.info}>I am a Front-end Developer with 3 years experience, Trilingual , undergradutate Student . I create successful websites that are fast, easy to use, and built with best practices.</p>
</Grid>

<Grid   item md={3} xs={12}>
     <Link href="https://github.com/k0hei2025"><p className={classes.info}> <GitHubIcon className={classes.icon}/>  Github</p></Link>
    
 <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>

   <Link href="https://www.linkedin.com/in/vaibhav-verma-2a21141a4/"><p className={classes.info}> <LinkedInIcon className={classes.icon}/> Linkedin</p></Link>
    
 <p className={classes.info}>Lets connect on LinkedIn</p>



  
</Grid>

<Grid   item md={3}>
     <p className={classes.info}>ABOUT</p>
    
 <p className={classes.info}>Learn about my skills and workflow</p>

   <p className={classes.info}>Projects</p>
    
 <p className={classes.info}>View My previous work</p>

   <p className={classes.info}>TESTIMONIALS</p>
    
 <p className={classes.info}>Read client recommendations</p>

 

   <p className={classes.info}>GET IN TOUCH</p>
    
 <p className={classes.info}>Send a general message</p>



  
</Grid>
</>
          })
     }

    },[])
    

               return (
                             <Grid container spacing={2} className={classes.container}>
                                  


 {mobile ? contentStruct.val :   webStruct.val }
                             </Grid>
               )
}
