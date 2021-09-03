import { Grid } from '@material-ui/core'
import React from 'react'
import classes from '../UX/button.module.css'

export default function button() {
               return (
                              <Grid style={{textAlign: 'center'}} >  
                              <button className={classes.button} >Get in Touch</button>               
                    </Grid>
               )
}
