import { Grid } from '@material-ui/core'
import React from 'react'
import classes from '../UX/button.module.css'
import Link from 'next/link'
import {RootState} from '../store/store'

import  {useSelector} from 'react-redux'

export default function Button() {

     const language = useSelector((state : RootState) => state.japanese);


               return (
                              <Grid style={{textAlign: 'center' , marginTop: '4%' , marginBottom: '4%'}} >  

                          <Link href="/Contact">
                         {language ?  <button  className={classes.jbutton}>お問い合わせ</button>
                               :   <button className={classes.button}>Get in Touch</button> }  
                                </Link>               
                    </Grid>
               )
}
