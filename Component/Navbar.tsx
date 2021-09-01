import React, { useState , useEffect } from 'react'
import { FC } from 'react'
import {Grid, Link, } from '@material-ui/core'
import IconImg from '../image/v-icon-22.jpg'
import Image from 'next/image'
import classNames from 'classnames'

import classes from './CSS/navbar.module.css'
import burgerClass from './CSS/hamburger.module.css'
import button from '../UX/button'

export default function  Navbar() {
                
const [hamburger , setHamburger] = useState(false); 
const [hamburgerDesignState , setHamburgerDesignState ] = useState({})
const [webDesignState , setWebDesignState ] = useState({})



    const buttonClass = classNames(classes.navHead , classes.eff)

useEffect(() =>{

        if (window.innerWidth <= 900){
        setHamburger(true);

        setHamburgerDesignState({
                val : 
                <div className={classes.body}>
                <nav role="navigation">
  <div className={burgerClass.menuToggle} >
  
    <input type="checkbox" />
    
 
    <span></span>
    <span></span>
    <span></span>
    
  
    <ul className={burgerClass.menu} >
      <Link href="#"><li>Home</li></Link>
      <Link href="#"><li>About</li></Link>
      <Link href="#"><li>Info</li></Link>
      <Link href="#"><li>Contact</li></Link>
  
    </ul>
  </div>
</nav>
</div>
        
        })
}

if (window.innerWidth >= 900){
        setHamburger(false);



            setWebDesignState (
                    {val : 
                        <>
                    <Grid item md={1} xs={2} className={buttonClass} >
         <Link href='/'> <p  className={classes.linkColor}>  Home </p></Link>
</Grid>

<Grid item md={1} xs={2} className={buttonClass} >
         <Link href='/'> <p className={classes.linkColor}>  Portfolio </p> </Link>
</Grid>
<Grid item md={1} xs={2} className={buttonClass} >
         <Link href='/'>  <p className={classes.linkColor}>Testimonials</p></Link>
</Grid>
<Grid  item md={1} xs={2}  className={buttonClass}>
         <Link href='/'>  <p className={classes.linkColor}>  About </p></Link>
</Grid>
<Grid item md={1} xs={2} className={ classNames(buttonClass , classes.get , classes.getTouch)} >
         <Link href='/'> <p className={classNames( classes.linkColor , classes.getCol )}>  Get in Touch</p></Link>
</Grid>
</>
}
            );
      

   
        
}





    


},[])




    

               return(
                       <Grid container   >

<Grid md={6} xs={2} className={classes.navImg}>
             <Image src={IconImg}  width={50} height={50}/>
</Grid>

 
 {hamburger ? hamburgerDesignState.val : webDesignState.val}





                       </Grid>
               )


}
