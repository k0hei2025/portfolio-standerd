import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import classes from './CSS/homepage.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AndroidImg from '../image/feature__web.webp';
import Tools from '../image/feature__tools.webp'
import Lock from '../image/images.png'
import Button from '../UX/button'
import {useSelector , useDispatch} from 'react-redux'
import {RootState , actionStore}  from '../store/store'
import {imageBoxMob , imageBoxWeb} from '../Component/imageContainer'
import {img} from '../image/company'
import classNames from 'classnames'

import {SiJavascript , SiFirebase , SiWebrtc , SiSocketDotIo , SiPeertube , SiNextDotJs , SiJira , SiMongodb} from 'react-icons/si'
import {FaCss3Alt , FaReact , FaFigma , FaTrello} from 'react-icons/fa'
import {AiFillHtml5 , AiFillGithub} from 'react-icons/ai'
import {FaDocker , FaNodeJs} from 'react-icons/fa'


export default function Homepage() {

     
    
    const mobState = useSelector((state : RootState)=>state.mobState);
    const dispatch = useDispatch();
          console.log(mobState)

                const japaneseLanguage = useSelector((state : RootState)=> state.japanese)
         
          useEffect(() =>{
            
             dispatch(actionStore.setMobileState())

          },[])

          

               return (
                            <>
                            <Grid  container className={classes.pad} > 
                                
                                <Grid item md={12} xs={12}>
                                 
                                   {japaneseLanguage ?  <h1 className={classes.jSize}> 成功フロントエンド開発  </h1>:  <h1 className={classes.size}> Successful Front-end Development</h1>} 
                                </Grid>
                               
                               <Grid md={2}>

                                </Grid>

                                <Grid item md={8} xs={12}>
                                                 
                                              {japaneseLanguage ? <h1 className={classes.Jsize1}> こんにちは。バイバブと申しますフロントエンドについて三年の経験がありますよろしく </h1> :  <h1 className={classes.size1}> Hi. I’m Vaibhav, a freelance Front-end Developer with 3 years of Front-end Development Experiences  </h1>  } 
                                              

                                </Grid>

                                <Grid md={2} ></Grid>

                                </Grid>


<Grid container spacing={2} style={ { marginTop: '4%'} }>

<Grid item md={3} xs={2}></Grid>

                            <Grid item md={2} xs={3} className={classes.card}>
                                           
                                           <Image src={AndroidImg} width={150} height={200} />

                                         {japaneseLanguage? <p className={classes.jcardHeading}>フロントエンド開発</p> :  <p className={classes.cardHeading}>Front-end development</p>
                                          } 

                                         {japaneseLanguage? <p className={classes.jcardDescription}>ビジネス目標を達成する最適なユーザーエクスペリエンスのために構築されたレスポンシブウェブサイト </p>  :  <p className={classes.cardDescription}>Responsive websites built for an optimal user experience that achieves your business goals.</p> } 
                                </Grid> 

                            <Grid item md={2} xs={3} className={classes.card}>
                                           <Image src={Tools}  width={150} height={200} />

                                        {japaneseLanguage? <p className={classes.jcardHeading}> 性能やらSEOなど便利テスト</p> :   <p className={classes.cardHeading}> Performance, SEO, & accessibility testing</p> }    
                          {japaneseLanguage ? <p className={classes.jcardDescription}>君のウェブサイトの効率は早いくて探す安い観客に色々方法で戻ります</p>  : <p className={classes.cardDescription}>Make your website fast, easy to find, and reach the widest audience possible.</p>}  
                                </Grid>

                                 <Grid item md={2} xs={3} className={classes.card}>
                                     
                                           <Image src={Lock}  width={180} height={200} />

                               {japaneseLanguage ? <p className={classes.jcardHeading}> 強安全 </p>  :  <p className={classes.cardHeading}>  Fully Secured    </p>
 }                              
 
  {japaneseLanguage ?  <p className={classes.jcardDescription}> 君のアプリケーションのデータとかデータベスは安全です </p>   :  <p className={classes.cardDescription}> Secure Your Application Database and Data like Personal information </p>
}

                                </Grid>
                                
                            
<Grid item md={3} xs={2}></Grid>
                            
</Grid>



<Grid container  spacing={2} style={ { marginTop: '4%'} }>

<Grid item md={12} xs={12} className={classes.border}></Grid>

  <Grid item md={12} xs={12}>

  {japaneseLanguage ? <h1 className={classes.jSize}>作品 </h1>  : <h1 className={classes.size}>  Featured Work</h1>}
 

  </Grid>
                           
                   <Grid className={classes.projectWork} container spacing={2}>
                     
                     <Grid  item md={1} xs={1}></Grid>

                     <Grid  item md={2} xs={10}>

                     {japaneseLanguage ? <h1 className={classes.jalign}> ストリーム </h1> :   <h1 className={classes.align}>Stream</h1> } 
                            
                               
      
               {japaneseLanguage ? <p  className={ classes.jalign}> 私はこのアプリケーションは１５日間以内に完全しましたこの少し時間に大きいなアプリケーション作ることがとっても難しいですが負けるずに一生懸命に頑張りました結局完全しました。このアプリケーションのアイジアは教師は学生達にオンライン事業は便利くて色々たくさん機能性おかげで開催します </p> :    <p  className={ classNames( classes.align) } > I create that Application within a 15 days It really a big task for me But I do my best to Complete that Application this application concept is based on video conferencing like professors can held class with more functionality and  in Secure Way  </p> }  

                  {japaneseLanguage ? <h2 className={classes.jaboutDescription}> 言語 </h2> :  <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2> } 
                     <p className={classes.icons} >   <SiJavascript />    <FaCss3Alt/> <AiFillHtml5/>  <FaNodeJs/> </p>
                      
                      {japaneseLanguage ? <h2 className={classes.jaboutDescription}> ツールとかライブラリ </h2> :  <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>}
                      
                    <p className={classes.icons}> <FaDocker/> <AiFillGithub/>  <SiWebrtc/> <SiSocketDotIo/> <SiPeertube /> <SiJira/>  <FaTrello/>  <FaFigma /> </p>
                    
                     {japaneseLanguage ? <h2 className={classes.jaboutDescription}>  データベース </h2> : <h2 className={classes.aboutDescription}>
                      Database  
                    </h2> }
                      
                     <p className={classes.icons}>  <SiFirebase/>  </p>

                     </Grid>
                     {mobState ? <p></p> :    <Grid  item md={5} xs={12}>                      
                            <Link href="https://stream-321403.el.r.appspot.com/"><Image src={imageBoxWeb.stream} height={500} width={700}  /></Link>
                     </Grid>}
                  

                     <Grid  item md={4} xs={12} >
                                   <Link href="https://stream-321403.el.r.appspot.com/"><Image src={imageBoxMob.stream} height={500} width={300} /></Link>
                     </Grid>

                  </Grid>
    
                     <Grid style={{marginTop: "7%"}} className={classes.projectWork} container spacing={2}>

      <Grid  item xs={1}></Grid>

                     <Grid  item md={2} xs={12}>

                     {japaneseLanguage ? <h1 className={classes.jalign}> コードマップ</h1> : <h1 className={classes.align}>Code Map</h1>}
     


      {japaneseLanguage ? <p className={classes.jalign}> このアプリケーションについてアイジアは開発者達は相手やチムの問題は一緒に治すことができます問題治すばかりではなくコッドのデザインとか新しいアイジアでプロジェクトの効率は上がりことができます </p> :  <p className={classes.align}>  The concept of this website is Collabaration and Sort out the Problems of Developers In this application a developers can collabarate there problematic code and other Developers helps him to correct the code or improve the codes  </p>}  
                     

                        {japaneseLanguage ? <h2 className={classes.jaboutDescription}> 言語 </h2> :  <h2 className={classes.aboutDescription}>
                      Languages  
                    </h2> } 



                     <p className={classes.icons}>   <SiJavascript />    <FaCss3Alt/>   <SiNextDotJs/> </p>
                     
                     {japaneseLanguage ? <h2 className={classes.jaboutDescription}> ツールとかライブラリ </h2> :  <h2 className={classes.aboutDescription}>
                      Tools And Libraries  
                    </h2>}
                      
                    <p className={classes.icons}>  <AiFillGithub/>  <FaFigma />  </p>
                    
                       {japaneseLanguage ? <h2 className={classes.jaboutDescription}>  データベース </h2> : <h2 className={classes.aboutDescription}>
                      Database  
                    </h2> }
                     <p className={classes.icons}>  <SiFirebase/>  </p>

                     </Grid>

                   {mobState ? <p></p> :  <Grid  item md={5} xs={12}>
                              <Image src={imageBoxWeb.codeMap} height={500} width={700} />
                     </Grid>} 


                     <Grid  item md={4} xs={12} >
                                            <Image src={imageBoxMob.codeMap} height={500} width={300} />
                     </Grid>

</Grid>
  <Grid  item xs={1}></Grid>

 <Grid style={{textAlign: 'center'}}  item md={12} xs={12}>
                    <Link href="/projects">{japaneseLanguage ? <p className={classes.jtext}>全作品見てください </p> : <p>  View all Projects </p>}</Link>
</Grid>

                            <Grid className={classes.projectWork} md={12} xs={12}>
                              <Button />
                            </Grid>



  <Grid item md={12} xs={12}>
    <Grid item md={12} xs={12} className={classes.border}></Grid>

 <h1 className={classes.size}> {japaneseLanguage ? <p className={classes.jtext}>お客様の声 </p> : <p> Testimonials</p>}</h1>

  </Grid>

      <Grid item md={2} xs={1}></Grid>
                                      
                                    <Grid item md={6} xs={10} className={classes.testinomialsDescription}>
                                         
                                         {japaneseLanguage ? <p className={ classNames( classes.jaboutDescription   ) }> 私は多くの明るく若い専門家と仕事をしてきましたが、バルマン。バイバブの才能と問題解決能力は彼の仲間の中で際立っています。 私は、彼の意欲的な労働倫理と、Sttabot会社でのプレッシャーの下で創造的に働く能力に感銘を受け続けています。 彼は自分の仕事をしましたが、時とき難しい問題もありましたでも諦めずにこの問題も全力で頑張りましたそして完全しました 一週間以内に、彼と彼のチームがその状況下で締め切りに間に合わせるために一生懸命働いたことに感謝しています。 </p> :
                                           <p className={classes.aboutDescription}>I have worked with many bright, young professionals, but Vaibhav verma talent and problem-solving skills stand out among his peers. I remain impressed with his driven work ethic and ability to work creatively under pressure at Sttabot Technology. He has done his task but some of the task were outside of Vaibhav’s normal role, but he accepted the responsibility without hesitation. Within the week, Im grateful for Him & his team’s hard work in meeting the deadline under the circumstances.</p>
}
                                    </Grid>

                                    
                                    <Grid item md={2} xs={12} className={classes.testimonialsDescriptionTitle}> <Image src={img} height="100" width="300" /></Grid>
                                         <Grid item md={2}></Grid>

                                         <Grid style={{textAlign: 'center'}} item md={12} xs={12}>
                                       <Link href="/testimonials">{japaneseLanguage ? <p className={classes.jtext}>全作品見てください </p> : <p>  View all Projects </p>}</Link>
                                    </Grid>


                            <Grid style={{marginBottom: '3%'}} className={classes.projectWork} md={12} xs={12}>
                              <Button />
                            </Grid>



</Grid>


                               


</>                            
               )
}
