import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import myImg from '../image/WhatsApp Image 2021-01-15 at 12.58.23 AM.jpg'
import Image from 'next/image'
import classes from '../Component/CSS/footer.module.css'
import Link from 'next/link'


import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import {RootState} from '../store/store'
import classNames from 'classnames'

export default function Footer() {

     type obn = {
          val : any
     }


    const [ mobile , setMobile] = useState(false);
    let [contentStruct , setContentStruct] = useState({val : null}) ;
    let [webStruct  , setWebStruct ]  = useState({val : null});

    const japaneseLanguage = useSelector((state : RootState)=>state.japanese)


    useEffect(()=>{
   

     if (window.innerWidth <= 900){
          setMobile(true);

          setContentStruct(  { 
               val :                            
               <>
<Grid item md={2} xs={6} className={classes.imagePosition}>
     <Image src={myImg} width={100} height={120} alt="myImage" />
     {japaneseLanguage ? <p className={classNames(classes.p , classes.jtext)}> フロントエンド開発人  </p> :  <p className={classes.p}>Front-end Developer</p> }
    
</Grid> 
<Grid item md={4} xs={6} className={classes.info2}>
   {japaneseLanguage ? <p className={classNames(classes.jinfo)}> 私は3年の経験を持つてフロントエンド開発者です、3か国語で話すことができます大学生です。 性能早いくて使う安いようなアプリケーション使います  </p> :   <p className={classes.info}>I am a Front-end Developer with 3 years experience, Trilingual , undergradutate Student . I create successful websites that are fast, easy to use, and built with best practices.</p> }

</Grid>

<Grid style={{textAlign:'center'}}  item md={3} xs={12}>
    <Link href="https://github.com/k0hei2025"><p className={classes.info}> <GitHubIcon className={classes.icon}/>  Github</p></Link>
 { japaneseLanguage ? <p className={classes.jinfo}> Hover.css、Sequence.js、jQueryParallaxなどのオープンソースプロジェクトをフォローしてください </p> : <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>
 } 

   <Link href="https://www.linkedin.com/in/vaibhav-verma-2a21141a4/"><p className={classes.info}> <LinkedInIcon className={classes.icon}/> Linkedin</p></Link>
    
  { japaneseLanguage ? <p className={classes.jinfo}> linkedinに接続しましょう</p> :  <p className={classes.info}>Lets connect on LinkedIn</p> }




  
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
     {japaneseLanguage ? <p className={classNames(classes.p , classes.jtext)}> フロントエンド開発者  </p> :  <p className={classes.p}>Front-end Developer</p> }
</Grid> 
<Grid item md={4} xs={6} className={classes.info2}>
   {japaneseLanguage ? <p className={classNames(classes.jinfo)}> 私は3年の経験を持つてフロントエンド開発者です、3か国語で話すことができます大学生です。 性能早いくて使う安いようなアプリケーション使います  </p> :   <p className={classes.info}>I am a Front-end Developer with 3 years experience, Trilingual , undergradutate Student . I create successful websites that are fast, easy to use, and built with best practices.</p> }

</Grid>

<Grid   item md={3} xs={12}>
     <Link href="https://github.com/k0hei2025"><p className={classes.info}> <GitHubIcon className={classes.icon}/>  Github</p></Link>
 { japaneseLanguage ? <p className={classes.jinfo}> Hover.css、Sequence.js、jQueryParallaxなどのオープンソースプロジェクトをフォローしてください </p> : <p className={classes.info}>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</p>
 } 

   <Link href="https://www.linkedin.com/in/vaibhav-verma-2a21141a4/"><p className={classes.info}> <LinkedInIcon className={classes.icon}/> Linkedin</p></Link>
    
  { japaneseLanguage ? <p className={classes.jinfo}> linkedinに接続しましょう</p> :  <p className={classes.info}>Lets connect on LinkedIn</p> }



  
</Grid>

<Grid   item md={3}>
     
     {japaneseLanguage ? <p className={classes.jinfo}> 私について </p>:   <p className={classes.info}>ABOUT</p>}
     
    
    
    {japaneseLanguage ?<p className={classes.jinfo}> 私の紹介とか学歴について情報 </p> : <p className={classes.info}>Learn about my skills and workflow</p>}

    { japaneseLanguage ? <p className={classes.jinfo }> 事業 </p> : <p className={classes.info}>Projects</p>
    }

    {japaneseLanguage ?  <p className={classes.jinfo}> 最近の作った作品見てください </p>  : <p className={classes.info}>View My previous work</p> }
 

   {japaneseLanguage ? <p className={classes.jinfo}> お客様の声 </p> :  <p className={classes.info}>TESTIMONIALS</p>} 
    
    { japaneseLanguage ?  <p className={classes.jinfo}> お客様の声読んでください </p> :  <p className={classes.info}>Read client recommendations</p>
}

 
 {japaneseLanguage ? <p className={classes.jinfo}> お問い合わせ</p> :   <p className={classes.info}>GET IN TOUCH</p> }


{japaneseLanguage ? <p className={classes.jinfo}> メーセージ送ってください </p> :  <p className={classes.info}>Send a general message</p>}
    




  
</Grid>
</>
          })
     }

    },[japaneseLanguage])
    

               return (
                             <Grid container spacing={2} className={classes.container}>
                                  


 {mobile ? contentStruct.val  :   webStruct.val  }
                             </Grid>
               )
}
