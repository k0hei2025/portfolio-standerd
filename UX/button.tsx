import { Grid } from '@material-ui/core'
import React from 'react'
import classes from '../UX/button.module.css'
import Link from 'next/link'

export default function button() {
               return (
                              <Grid style={{textAlign: 'center' , marginTop: '4%' , marginBottom: '4%'}} >  
                             <Link href="/Contact"><button className={classes.button}>Get in Touch</button></Link>               
                    </Grid>
               )
}
