import React, { useState , useEffect } from 'react'
import { FC } from 'react'
import {Button, ButtonGroup, Grid } from '@material-ui/core'
import IconImg from '../image/ClipartKey_2483016.png'
import Image from 'next/image'
import classNames from 'classnames'
import Link from 'next/link'


import classes from './CSS/navbar.module.css'
import burgerClass from './CSS/hamburger.module.css'
import Buttons from '../UX/button'

import {useSelector , useDispatch} from 'react-redux'
import {actionStore , RootState} from '../store/store'


export default function  Navbar() {
                
const [hamburger , setHamburger] = useState(false); 
const [hamburgerDesignState , setHamburgerDesignState ] = useState({val : null})
const [webDesignState , setWebDesignState ] = useState({val : null})
const [lang , setLang] = useState(false);


const languageChange = useSelector((state : RootState )=>state.japanese)

   const dispatch = useDispatch();

    const buttonClass = classNames(classes.navHead , classes.eff)


    // useEffect(() =>{

    //    if (lang){
    //      console.log(lang)
    //      console.log(languageChange);
    //    }
      


    // },[])


useEffect(() =>{

        if (window.innerWidth <= 900){
        setHamburger(true);

        setHamburgerDesignState({
                val : 
                  <>
                <Grid md={6} xs={2} className={classes.navImg}>
           <Link href='/'><Image src={IconImg}  width={50} height={50}/></Link>
</Grid>          
<Grid item md={6} xs={6} ></Grid>
                <Grid md={6} xs={1} className={classes.body}>
                <nav role="navigation">
  <div className={burgerClass.menuToggle} >
  
    <input type="checkbox" />
    
 
    <span></span>
    <span></span>
    <span></span>
    
  
    <ul className={burgerClass.menu} >
      <div className={burgerClass.menuDiv}>  
      <Link href="/" passHref><li>{languageChange ? <p className={classes.jtext}> ホーム </p> : <p> Home </p> }</li></Link>
      <Link href="/about" passHref><li> {languageChange ? <p className={classes.jtext}> 私について </p>   : <p> About </p> }</li></Link>
      <Link href="/projects" passHref><li> {languageChange ? <p className={classes.jtext}> 事業 </p> : <p> Projects </p> }</li></Link>
     <Link href="/testimonials" passHref><li> {languageChange ? <p className={classes.jtext}> お客様の声 </p> : <p> Testimonials </p> }</li></Link>
     {languageChange ?  <a href="履歴書.pdf" download="履歴書.pdf"><p  style={{color: 'black'}} className={classNames(classes.linkColor , classes.jgetCol) } > 履歴書 </p></a>  :   

      <a href="profile.pdf" download="resume.pdf"><p style={{color: 'black'}} className={classNames( classes.linkColor , classes.getCol )}> Resume</p></a> }
    
  <Link href="/" passHref><li  style={{fontSize:"18px"}} className={burgerClass.languageBtn} onClick={englishHandler}> Eng</li></Link>
  <Link  href="/" passHref><li style={{fontSize:"18px"}} className={burgerClass.jlanguageBtn} onClick={japaneseHandler}>JP</li></Link>

      <Link href="/Contact" passHref><li><Buttons/></li></Link>
   
    </div>
    </ul>
  </div>
</nav>
</Grid>
      </>  
        })
}

if (window.innerWidth >= 900){
        setHamburger(false);



            setWebDesignState (
                    {val : 
                        <>
    

  <Grid md={4} xs={2} className={classes.navImg}>
           <Link href='/'><Image src={IconImg}  width={50} height={50} alt="Icon"/></Link> 
</Grid>          
                        
                    <Grid item md={1} xs={2} className={buttonClass} >
         <Link  href="/" passHref>{languageChange ? <p className={ classNames(classes.linkColor ,classes.jtext ) }> ホーム</p> :<p className={classes.linkColor}>Home</p> }</Link>
</Grid>

<Grid item md={1} xs={2} className={buttonClass} >
         <Link  href="/projects" passHref>{languageChange ? <p className={ classNames(classes.linkColor ,classes.jtext ) }> 事業</p> :<p className={classes.linkColor}>Projects</p> }</Link>
</Grid>
<Grid item md={1} xs={2} className={buttonClass} >
         <Link  href="/testimonials" passHref>{languageChange ? <p className={ classNames(classes.linkColor ,classes.jtext ) }> お客様の声
</p> :<p className={classes.linkColor}>testimonials</p> }</Link>
</Grid>
<Grid  item md={1} xs={2}  className={buttonClass}>
         <Link  href="/about" passHref>{languageChange ? <p className={ classNames(classes.linkColor ,classes.jtext ) }> 私について
</p> :<p className={classes.linkColor}>About</p> }</Link>
</Grid>

<Grid  item md={1} xs={2}  className={buttonClass}>
   
            {languageChange ?  <a href="履歴書.pdf" download="履歴書.pdf"><p  style={{color: 'black'}} className={classNames(classes.linkColor , classes.jgetCol) } > 履歴書 </p></a>  :   

      <a href="resume.pdf" download="resume.pdf"><p style={{color: 'black'}} className={classNames( classes.linkColor , classes.getCol )}> Resume</p></a> }
</Grid>

<Grid item md={1} xs={2} className={ classNames(buttonClass , classes.get , classes.getTouch)} >
          <Link href="/Contact" passHref>{languageChange ? <p className={classNames(classes.linkColor , classes.jgetCol) }> お問い合わせ </p> :   
         <p className={classNames( classes.linkColor , classes.getCol )}> Get in Touch</p> }</Link>
                    
</Grid>




</>
}
            );

        
}





    


},[languageChange])





    const englishHandler =()=>{
        setLang(false);
      dispatch(actionStore.setJapanese(false))
        console.log('englishHandler' , lang)
        console.log(languageChange)
    }

    const japaneseHandler=()=>{
          setLang(true);
          dispatch(actionStore.setJapanese(true))
          console.log('japanese handler' , lang)
          console.log(languageChange)
    }

    

               return(
                       <Grid container  style={{marginTop:'1%' , marginLeft:'2%'}}  >


 
 {hamburger ? hamburgerDesignState.val : webDesignState.val } {!hamburger ?  <Grid item md={1} xs={2} style={{marginLeft: "1%" , marginTop: "10px" }}>
<ButtonGroup className={classes.btnGroupT} aria-label="outlined primary button group">
  <Button onClick={englishHandler} className={classes.btnGroupButton}>Eng</Button>
  <Button onClick={japaneseHandler} className={classes.btnbtnGroupButton}>JP</Button>

</ButtonGroup>
</Grid> : null }






                       </Grid>
               )


}
