import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import myImg from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import Image from 'next/image'
import classes from '../Component/CSS/footer.module.css'

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
     <p className={classes.info}>Github</p>
    
 <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>

   <p className={classes.info}>LINKEDIN</p>
    
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
   <p className={classes.info}>I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.</p>
</Grid>

<Grid   item md={3} xs={12}>
     <p className={classes.info}>Github</p>
    
 <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>

   <p className={classes.info}>LINKEDIN</p>
    
 <p className={classes.info}>Lets connect on LinkedIn</p>



  
</Grid>

<Grid   item md={3}>
     <p className={classes.info}>ABOUT</p>
    
 <p className={classes.info}>Learn about Ian's skills and workflow</p>

   <p className={classes.info}>PORTFOLIO</p>
    
 <p className={classes.info}>View Ian's previous work</p>

   <p className={classes.info}>TESTIMONIALS</p>
    
 <p className={classes.info}>Read client recommendations</p>
   <p className={classes.info}>ARTICLES</p>
    
 <p className={classes.info}>Read web related articles, opinions & tutorials</p>
   <p className={classes.info}>STORE</p>
    
 <p className={classes.info}>Simple & stylish UI to add to your front-end development toolbox</p>

   <p className={classes.info}>GET IN TOUCH</p>
    
 <p className={classes.info}>Send a general message</p>

   <p className={classes.info}>HIRE IAN</p>
    
 <p className={classes.info}>Enquire about hiring Ian</p>


  
</Grid>
</>
          })
     }

    },[])
    

               return (
                             <Grid container spacing={2} className={classes.container}>
                                  
{/* 
<Grid item md={2} xs={6} className={classes.imagePosition}>
     <Image src={myImg} width={100} height={120} alt="myImage" />
     <p className={classes.p}>Front-end Developer</p>
</Grid> 
<Grid item md={4} xs={6} className={classes.info2}>
   <p className={classes.info}>I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.</p>
</Grid>

<Grid   item md={12}>
     <p className={classes.info}>Github</p>
    
 <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>

   <p className={classes.info}>LINKEDIN</p>
    
 <p className={classes.info}>Lets connect on LinkedIn</p>



  
</Grid>

<Grid   item md={3}>
     <p className={classes.info}>ABOUT</p>
    
 <p className={classes.info}>Learn about Ian's skills and workflow</p>

   <p className={classes.info}>PORTFOLIO</p>
    
 <p className={classes.info}>View Ian's previous work</p>

   <p className={classes.info}>TESTIMONIALS</p>
    
 <p className={classes.info}>Read client recommendations</p>
   <p className={classes.info}>ARTICLES</p>
    
 <p className={classes.info}>Read web related articles, opinions & tutorials</p>
   <p className={classes.info}>STORE</p>
    
 <p className={classes.info}>Simple & stylish UI to add to your front-end development toolbox</p>

   <p className={classes.info}>GET IN TOUCH</p>
    
 <p className={classes.info}>Send a general message</p>

   <p className={classes.info}>HIRE IAN</p>
    
 <p className={classes.info}>Enquire about hiring Ian</p>


  
</Grid>

 */}

 {mobile ? contentStruct.val :   webStruct.val }
                             </Grid>
               )
}
