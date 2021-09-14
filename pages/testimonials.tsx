import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import classes from '../Component/CSS/homepage.module.css'
import { Grid } from '@material-ui/core'
import Image from 'next/image'

import Button from '../UX/button'
import {img} from '../image/company'
import {useSelector} from 'react-redux';
import {RootState} from '../store/store'


export default function Testimonials() {


       const japanese = useSelector((state : RootState)=>state.japanese)


               return (
                              <Grid container className={classes.bx}>
                              <Navbar />
                              <Grid container>
                         <Grid  item md={12} xs={12}>
 {japanese ? <h1 className={classes.jSize}>お客様の声 </h1> :  <h1 className={classes.size}>  Testimonials  </h1> }


                                        </Grid>
                                        <Grid item md={2}></Grid>
                                        <Grid item md={8}>
                                   {japanese ? <p className={classes.Jsize1}> 私は、新興企業、中小企業、代理店が成功するWebサイトを作成するのを支援した3年の経験があります。 </p> : <p className={classes.size1}> I have 3 years  experience helping start-ups, small businesses, and agencies create successful websites.</p>  }
                                     
                                    </Grid>
                                    <Grid item md={2}></Grid>




                                   <Grid item md={2}></Grid>
                                    <Grid item md={6} xs={12} className={classes.testinomialsDescription}>
                                      
                                      {japanese ? <p className={classes.jaboutDescription}> 私は多くの明るく若い専門家と仕事をしてきましたが、バルマン。バイバブの才能と問題解決能力は彼の仲間の中で際立っています。 私は、彼の意欲的な労働倫理と、Sttabot会社でのプレッシャーの下で創造的に働く能力に感銘を受け続けています。 彼は自分の仕事をしましたが、時とき難しい問題もありましたでも諦めずにこの問題も全力で頑張りましたそして完全しました 一週間以内に、彼と彼のチームがその状況下で締め切りに間に合わせるために一生懸命働いたことに感謝しています。 </p> :   <p className={classes.aboutTDescription}>I have worked with many bright, young professionals, but Vaibhav verma talent and problem-solving skills stand out among his peers. I remain impressed with his driven work ethic and ability to work creatively under pressure at Sttabot Technology. He has done his task but some of the task were outside of Vaibhav’s normal role, but he accepted the responsibility without hesitation. Within the week, Im grateful for Him & his team’s hard work in meeting the deadline under the circumstances.</p>  }
                                        
                                    </Grid>
                                    <Grid item md={2} xs={12} className={classes.testimonialsDescriptionTitle}> <Image src={img} height="100" width="300" /></Grid>
                                         <Grid item md={2}></Grid>
                              </Grid>
                                        
<Grid md={12} xs={12}>
<Button />
</Grid>
                                     <Footer />  
                              </Grid>
               )
}
