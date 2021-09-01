import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar  from '../Component/Navbar'
import React, { Fragment } from 'react'
import Homepage from '../Component/Homepage'
import Footer from '../Component/Footer'

const Home: NextPage = () => {
  return (
    <Fragment>
       <Navbar />
     <Homepage />
     <Footer/>
    {/* <div className={styles.container}>
      
       <h1> Start Portfolio </h1>

    </div> */}
    </Fragment>
  )
}

export default Home
