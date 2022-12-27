import React from 'react';
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Technology(props) {
    const technology = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"The Indian Express"},"author":"Tech Desk","title":"5G in India: How Airtel, Jio and Vodafone Idea plan to rollout services - The Indian Express","description":"IMC 2022: Here is everything we know about Jio, Airtel and Vodafone Idea's 5G rollout plan so far.","url":"https://indianexpress.com/article/technology/techook/5g-in-india-airtel-jio-and-vodafone-idea-rollout-8184240/","urlToImage":"https://images.indianexpress.com/2022/10/Airtel-JIO-VI.jpg","publishedAt":"2022-10-01T08:09:46Z","content":"5G networks in India were officially inaugurated earlier today at IMC 2022. Following an in-depth look into how the technology will change India across various industries and sectors, telecom players… [+1202 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Tech Desk","title":"Jabra announces Engage 50 II and Engage 40 headphones: Check price and features - The Indian Express","description":"The Jabra Engage 40 and Engage 50 II are available in mono and stereo variants.","url":"https://indianexpress.com/article/technology/gadgets/jabra-engage-50-ii-engage-40-price-features-8184079/","urlToImage":"https://images.indianexpress.com/2022/10/Jabra-Engage-50-II-Engage-40-headphones.jpg","publishedAt":"2022-10-01T07:43:29Z","content":"Jabra recently announced that it would be adding two new products to its existing Engage headphone lineup – Engage 50 II and Engage 40. Here’s a quick look at what these new headphones have to offer.… [+1312 chars]"},{"source":{"id":null,"name":"Sportskeeda"},"author":"Jacob Burkett","title":"5 best Minecraft mods for new boss battles in 2022 - Sportskeeda","description":"If there is any area in which Minecraft is lacking, it is in the boss fight department. There are only two true bosses in the game: the Ender Dragon and the Wither.","url":"https://www.sportskeeda.com/minecraft/5-best-minecraft-mods-new-boss-battles-2022","urlToImage":"https://staticc.sportskeeda.com/editor/2022/10/7afc7-16645957514923-1920.jpg","publishedAt":"2022-10-01T07:40:21Z","content":"If there is any area in which Minecraft is lacking, it is in the boss fight department. There are only two true bosses in the game: the Ender Dragon and the Wither. \r\nMinecraft has a couple of mobs t… [+3731 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Google to end Stadia game streaming service in January 2023 - ANI News","description":"American tech giant Google has announced that it will be ending its game streaming service Stadia. It will be finally shut down on January 18, 2023.According...","url":"https://www.youtube.com/watch?v=H72ZLLSwaU4","urlToImage":"https://i.ytimg.com/vi/H72ZLLSwaU4/hqdefault.jpg","publishedAt":"2022-10-01T07:28:22Z","content":null},{"source":{"id":null,"name":"Babushahi.com"},"author":null,"title":"Babushahi.com - Babushahi.com","description":"","url":"https://www.babushahi.com/full-news.php?id=152856&headline=Twitter-experimenting-with-vertically-scrolling-video","urlToImage":"https://www.babushahi.com/upload/image/Twitter-1664607615020.jpg","publishedAt":"2022-10-01T07:00:00Z","content":"Washington [US], October 1, 2022 (ANI): Microblogging platform Twitter has announced on its official Blog that it will begin rolling out a new way to experience videos on TikTok.\r\nAccording to GSM Ar… [+1440 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Tech Desk","title":"Samsung launches 'The Frame' TV in India: Check features and other details - The Indian Express","description":"The Frame TV is available in five screen sizes and can be purchased from Amazon, Flipkart and major offline retail stores.","url":"https://indianexpress.com/article/technology/tech-news-technology/samsung-the-frame-tv-launched-in-india-8183993/","urlToImage":"https://images.indianexpress.com/2022/10/Samsung-The-Frame-TV.jpg","publishedAt":"2022-10-01T06:35:38Z","content":"Samsung has officially launched updated models of ‘The Frame’ TV in India. The new QLED TV lineup comes with Samsung’s Quantum Processor 4K that offers 4K AI upscaling capability. Designed to look li… [+1324 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Tech","title":"iPhone 14 Pro Max, iPhone 14 Pro users face severe bugs, glitches! See what users say - HT Tech","description":"iPhone 14 Pro Max users report facing several bugs and glitches. This is what users have to say.","url":"https://tech.hindustantimes.com/mobile/news/iphone-14-pro-max-iphone-14-pro-users-face-severe-bugs-glitches-see-what-users-say-71664602153092.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/10/01/1600x900/iPhone_14_Pro_Max_AOD_1663424222157_1664602219315_1664602219315.jpg","publishedAt":"2022-10-01T05:31:20Z","content":"The iPhone 14 Pro Max is currently the best iPhone money can buy and yet, those who have spent that much complain of severe issues. Ever since its launch, the iPhone 14 Pro Max and iPhone 14 Pro user… [+2024 chars]"},{"source":{"id":null,"name":"GSMArena.com"},"author":"Enrique","title":"Apple responds to why junkyard crash tests don’t always trigger iPhones’ Crash Detection - GSMArena.com news - GSMArena.com","description":"Yes, some folks have crashed actual vehicles to test Apple’s new safety feature.","url":"https://www.gsmarena.com/apple_responds_to_why_junkyard_crash_tests_dont_always_trigger_iphones_crash_detection-news-56015.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/22/10/apple-responds-to-iphone-crash-detection-tests/-952x498w6/gsmarena_000.jpg","publishedAt":"2022-10-01T05:30:01Z","content":"With the announcement of the iPhone 14 lineup, Apple announced that its new devices are outfitted with sensors and tech that can detect when a user has been in a car crash. The iPhone will then promp… [+2093 chars]"},{"source":{"id":null,"name":"Thehansindia.com"},"author":"The Hans India","title":"Hackers exploiting 2 new zero-day bugs in Exchange Server: Microsoft - The Hans India","description":"Microsoft has revealed it is investigating two new zero-day vulnerabilities affectingAthe company's...","url":"https://www.thehansindia.com/technology/tech-news/hackers-exploiting-2-new-zero-day-bugs-in-exchange-server-microsoft-763849","urlToImage":"https://assets.thehansindia.com/h-upload/2022/09/01/1310386-microsoft.jpg","publishedAt":"2022-10-01T05:20:34Z","content":"New Delhi: Microsoft has revealed it is investigating two new zero-day vulnerabilities affectingAthe company's Exchange Server which is actively being exploited by hackers. \r\nMicrosoft said it is awa… [+1447 chars]"},{"source":{"id":null,"name":"NewsBytes"},"author":"Akash Pandey","title":"Redmi Pad revealed in YouTube video ahead of launch - NewsBytes","description":"Xiaomi is all set to debut its first-ever tablet under the Redmi branding on October 4","url":"https://www.newsbytesapp.com/news/science/youtube-video-reveals-redmi-pad-ahead-of-launch/story","urlToImage":"https://i.cdn.newsbytesapp.com/images/l21020220930183533.png","publishedAt":"2022-10-01T05:02:51Z","content":"Redmi Pad revealed in YouTube video ahead of launch\r\nOct 01, 2022, 10:32 am2 min read\r\nXiaomi is all set to launch its first-ever tablet under the Redmi branding on October 4.\r\nAs of now, we are quit… [+1874 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT News Desk","title":"How will Twitter's Edit button work? Twitter Blue shows 'how it goes' - Hindustan Times","description":"With this option, users can edit their tweets after publishing. They will have a total of 30 minutes to edit their posts.","url":"https://www.hindustantimes.com/technology/how-will-twitter-s-edit-button-works-twitter-blue-shows-how-it-works-101664597591541.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/Blue_1664597648197_1664597655559_1664597655559.png","publishedAt":"2022-10-01T04:59:28Z","content":"On September 1, Twitter announced test launch of a new feature, called the Edit Button, which, as the name suggests, will allow users to edit their tweets (after being published). Now, the social med… [+1314 chars]"},{"source":{"id":null,"name":"India.com"},"author":"Video Desk","title":"Are you Planning to Buy a Smartphone? Xiaomi 12S Ultra To Vivo V25e Upcoming Phones in October; Price, Specif - India.com","description":"Phones Launching in October: We’re expecting launches from several different brands, including Xiaomi, Realme, Samsung, and more. So, what can we expect from the upcoming crop of smartphones? Here’s a look at some of the most anticipated launches scheduled fo…","url":"https://www.india.com/video-gallery/are-you-planning-to-buy-a-smartphone-xiaomi-12s-ultra-to-vivo-v25e-upcoming-phones-in-october-price-specifications-watch-video-5657515/","urlToImage":"https://static.india.com/wp-content/uploads/2022/09/Phones_launching_in_october.jpeg","publishedAt":"2022-10-01T03:30:44Z","content":"Upcoming Phones List: Its that time of year again when smartphone brands are getting ready to launch their new flagship devices. October is always an exciting month for tech lovers as we get to see t… [+1360 chars]"},{"source":{"id":null,"name":"Mysmartprice.com"},"author":"https://www.facebook.com/chinnu.1125","title":"Moto G72 Leaked Press Renders Reveal Design Ahead of October 3 Launch - MySmartPrice","description":"Moto G72 will launch in India on October 3. The phone will come with a new design compared to its outgoing predecessor, the Moto G71 5G.","url":"https://www.mysmartprice.com/gear/moto-g72-leaked-press-renders-reveal-design-october-3-launch/","urlToImage":"https://assets.mspimages.in/wp-content/uploads/2022/09/Motorola-G72-5G.jpg","publishedAt":"2022-10-01T03:21:55Z","content":null},{"source":{"id":null,"name":"GSMArena.com"},"author":"Enrique","title":"Apple iPhone 14 Pro achieves top DxOMark scores for selfie camera and video performance - GSMArena.com news - GSMArena.com","description":"The new iPhone 14 flagship ranks second in overall score and ranks #1 in selfie camera performance.","url":"https://www.gsmarena.com/apple_iphone_14_pro_achieves_top_dxomark_scores_for_selfie_camera_and_video_performance-news-56014.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/22/09/iphone-14-pro-gets-dxomark-top-selfie/-952x498w6/gsmarena_000.jpg","publishedAt":"2022-10-01T03:02:01Z","content":"In DxOMarks camera testing of the iPhone 14 Pro, Apples flagship model achieves outstanding scores. With an overall camera score of 146, it earned second place in DxOMarks global camera ranking (just… [+2201 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"Livemint","title":"Garena Free Fire Max redeem codes for October 1, 2022: Check details | Mint - Mint","description":"Garena Free Fire Max redeem codes have 12 characters, consisting of capital letters and digits- that can be used to obtain rewards like weapons, outfits and more without any cost.","url":"https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-for-october-1-2022-check-details-11664592393396.html","urlToImage":"https://images.livemint.com/img/2022/10/01/600x338/Garena_Free_Fire_Max_1660531820245_1664592451431_1664592451431.jpg","publishedAt":"2022-10-01T02:48:57Z","content":"The Justu Elemental Elite Pass is now available in the Garena Free Fire Max online game. The company tweeted via its official handle to share the update. The multiplayer battle royale game that offer… [+2067 chars]"},{"source":{"id":null,"name":"Nintendo Life"},"author":"Liam Doolan","title":"Video: 9 Exciting New Games Coming To Nintendo Switch In October 2022 - Nintendo Life","description":"Mario + Rabbids, Bayonetta 3, Persona 5 and more!","url":"https://www.nintendolife.com/news/2022/10/video-9-exciting-new-games-coming-to-nintendo-switch-in-october-2022","urlToImage":"https://images.nintendolife.com/0d23e95db1410/1280x720.jpg","publishedAt":"2022-10-01T02:05:00Z","content":null},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Google Chrome learns how to count tabs correctly on Android - Android Police","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiUGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2dvb2dsZS1jaHJvbWUtY291bnRzLXRhYi1ncm91cHMtY29ycmVjdGx5LWFuZHJvaWQv0gEA?oc=5","urlToImage":null,"publishedAt":"2022-09-30T21:56:00Z","content":null},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":null,"title":"Microsoft rolling out Android App support on Windows 11 - Times of India","description":"American multinational technology corporation Microsoft has confirmed that it is now rolling out Android app support to Windows 11 users in 21 more countries.According to GSM Arena, WSA, i.e. Windows Subsystem for Android, became available to download for all…","url":"https://timesofindia.indiatimes.com/videos/news/microsoft-rolling-out-android-app-support-on-windows-11/videoshow/94572216.cms","urlToImage":"https://timesofindia.indiatimes.com/photo/msid-94572216,imgsize-1003687.cms","publishedAt":"2022-09-30T19:41:01Z","content":"Oct 01, 2022, 01:11AM ISTSource: ANIAmerican multinational technology corporation Microsoft has confirmed that it is now rolling out Android app support to Windows 11 users in 21 more countries.Accor… [+492 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Redmi Note 11 vs Redmi Note 11R: Specs Comparison - gizmochina","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiV2h0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMDkvMzAvcmVkbWktbm90ZS0xMS12cy1yZWRtaS1ub3RlLTExci1zcGVjcy1jb21wYXJpc29uL9IBAA?oc=5","urlToImage":null,"publishedAt":"2022-09-30T18:11:42Z","content":null},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Dynamic Island clone for Android already has over 1 million installs - Android Police","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiRmh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2R5bmFtaWMtaXNsYW5kLWNsb25lLTEtbWlsbGlvbi1pbnN0YWxscy_SAQA?oc=5","urlToImage":null,"publishedAt":"2022-09-30T18:04:00Z","content":null}]}
 
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [pgno, setpgno] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    const capital = (word) => {
      let a = word.toLowerCase();
      return a.charAt(0).toUpperCase() + a.slice(1);
    };
   
    
    const updatenews = async () => {
      props.progress(10);
     
      setloading(true);
      props.progress(20);
  
     
  
      
      props.progress(30);
      props.progress(40);
      props.progress(50);
      props.progress(60);
      props.progress(70);
    
  
      // let technology = await data.json();
      props.progress(80);
  
    
      props.progress(90);
      setloading(true);
      setarticles(technology.articles);
      settotalResults(technology.totalResults);
  
      // this.setState({
      //   articles: technology.articles,
      //   totalArticles: technology.totalResults,
      //   loading: false,
      // });
      props.progress(100);
    };
    useEffect(() => {
      updatenews();
    }, []);
  
    
    // const fetchMoreData = async () => {
     
    
  
      
    //   setarticles(articles.concat(technology.articles));
    //   settotalResults(technology.totalResults);
    //   setloading(false);
    //   setpage(page + 1);
    // };
  
    return (
      <div className="container">
        <Navbar
          link=""
          linkk={props.nav}
          linkk1={props.nav1}
          linkk2={props.nav2}
          linkk3={props.nav3}
          linkk4={props.nav4}
          linkk5={props.nav5}
          linkk6={props.nav6}
          linkk7={props.nav7}
          linkk8={props.nav8}
          linkk9={props.nav9}
        />
       
       <h2 className=" text-center" style={{ marginTop: 63 }}>
          haNuMAAN - Top Headlines
        </h2>
  
        <div style={{ overflow: "none" }}>
          {/* <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={loading && <Spinner />}
          > */}
            <div className="row container">
              {articles.map((element) => {
                return (
                  <div className="col-md-10 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 70)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          {/* </InfiniteScroll> */}
        </div>
        <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div></div>
      
    );
  };
  Technology.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  Technology.defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };
   
    
