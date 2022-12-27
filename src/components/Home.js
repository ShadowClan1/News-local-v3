import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Caursel from "./caursel";
export default function Home(props) {
  const home = {"status":"ok","totalResults":38,"articles":[{"source":{"id":null,"name":"News18"},"author":"News Desk","title":"Congress Prez Poll Updates: Kharge Resigns as Rajya Sabha LoP Ahead of Election, Tharoor Seeks 'Change' - News18","description":"Madhusudan Mistry, the chairman of the Congress's Central Election Authority, said that all three forms would be scrutinised and candidates announced on Saturday","url":"https://www.news18.com/news/politics/congress-prez-poll-updates-mallikarjun-kharge-shashi-tharoor-kn-tripathi-rajasthan-cm-crisis-sonia-gandhi-gehlot-6076093.html","urlToImage":"https://images.news18.com/ibnlive/uploads/2022/09/mallikarjun-kharge-1-166452879416x9.jpg","publishedAt":"2022-10-01T08:24:00Z","content":"The race for the Congress presidents post is on as senior Congress leaders Shashi Tharoor and Mallikarjun Kharge both filed their nomination papers at the AICC headquarters on Friday with the Karnata… [+5330 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"PM Modi Launches 5G In India, Rollout After Diwali: 10 Points - NDTV","description":"Prime Minister Narendra Modi launched 5G services in India today at a telecom event in Delhi. The service is expected to progressively cover the entire country over the next couple of years, potentially transforming India's digital landscape.","url":"https://www.ndtv.com/india-news/pm-modi-5g-services-launch-at-a-telecom-event-today-3392481","urlToImage":"https://c.ndtvimg.com/2022-10/564kfl7g_pm-modi-5g-event_650x400_01_October_22.jpg","publishedAt":"2022-10-01T08:10:00Z","content":"<li>The PM launched the much-awaited service at the 6th Edition of India Mobile Congress 2022, being held from October 1-4, at Pragati Maidan in New Delhi. 5G services will be available in 13 Indian … [+3374 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Tech Desk","title":"5G in India: How Airtel, Jio and Vodafone Idea plan to rollout services - The Indian Express","description":"IMC 2022: Here is everything we know about Jio, Airtel and Vodafone Idea's 5G rollout plan so far.","url":"https://indianexpress.com/article/technology/techook/5g-in-india-airtel-jio-and-vodafone-idea-rollout-8184240/","urlToImage":"https://images.indianexpress.com/2022/10/Airtel-JIO-VI.jpg","publishedAt":"2022-10-01T08:09:46Z","content":"5G networks in India were officially inaugurated earlier today at IMC 2022. Following an in-depth look into how the technology will change India across various industries and sectors, telecom players… [+1202 chars]"},{"source":{"id":null,"name":"Free Press Journal"},"author":"FPJ Web Desk","title":"A gift to Stargazer; NASAs flying telescope shares images of celestial objects - Free Press Journal","description":"","url":"https://www.freepressjournal.in/world/a-gift-to-stargazer-nasas-flying-telescope-shares-images-of-celestial-objects","urlToImage":"https://gumlet.assettype.com/freepressjournal/2022-10/d5b10a29-56d6-4c88-b11e-f2cf0e13073b/Untitled_design__17_.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true","publishedAt":"2022-10-01T07:38:38Z","content":"NASA's Stratospheric Observatory for Infrared Astronomy (SOFIA) embarking on its final flight, on Thursday, US space agency shared some breathtaking cosmos images that were assembled using SOFIA's da… [+1602 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Mallikarjun Kharge, Congress President Contender, Quits Rajya Sabha Post - NDTV","description":"As the Congress picks its first non-Gandhi president in 25 years, Mr Kharge, 80, is the candidate backed by the Gandhis and is almost certain to be elected.","url":"https://www.ndtv.com/india-news/mallikarjun-kharge-resigns-as-leader-of-opposition-in-rajya-sabha-to-abide-by-congresss-one-person-one-post-rule-3394464","urlToImage":"https://c.ndtvimg.com/2022-09/2vbdk4cg_mallikarjun-kharge-pti_625x300_30_September_22.jpg","publishedAt":"2022-10-01T07:36:00Z","content":"Mallikarjun Kharge sent a letter to Sonia Gandhi last night.\r\nNew Delhi: Soon after filing his nomination for the Congress President poll to be held on October 17, Mallikarjun Kharge resigned as the … [+1417 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"PCOS And Other Related Lifestyle Disorders: How Holistic Living Can Provide A Better Lifestyle? | TheHealt - TheHealthSite","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMinAFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL3Bjb3MvcGNvcy1hbmQtb3RoZXItcmVsYXRlZC1saWZlc3R5bGUtZGlzb3JkZXJzLWhvdy1ob2xpc3RpYy1saXZpbmctY2FuLXByb3ZpZGUtYS1iZXR0ZXItbGlmZXN0eWxlLTkxMjYzNS_SAaABaHR0cHM6Ly93d3cudGhlaGVhbHRoc2l0ZS5jb20vZGlzZWFzZXMtY29uZGl0aW9ucy9wY29zL3Bjb3MtYW5kLW90aGVyLXJlbGF0ZWQtbGlmZXN0eWxlLWRpc29yZGVycy1ob3ctaG9saXN0aWMtbGl2aW5nLWNhbi1wcm92aWRlLWEtYmV0dGVyLWxpZmVzdHlsZS05MTI2MzUvYW1wLw?oc=5","urlToImage":null,"publishedAt":"2022-10-01T06:08:00Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Sports Desk","title":"Watch: Tait's epic reaction to Pakistan's embarrassing defeat floors reporters - Hindustan Times","description":"During a media interaction, Pakistan's fast bowling coach Shaun Tait stunned reporters with his unique sense of humour. England crushed Pakistan by 8 wickets in the 6th T20I to level the series 2-2 on Friday. | Cricket","url":"https://www.hindustantimes.com/cricket/they-send-me-when-shaun-tait-s-epic-reaction-to-pakistan-s-embarrassing-defeat-floors-reporters-in-press-conference-watch-101664599567804.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/shaun_tait_1664602671276_1664602676415_1664602676415.png","publishedAt":"2022-10-01T05:39:24Z","content":"Pakistan's fast bowling coach Shaun Tait was asked to face the music after Moeen Ali-led England crushed Babar Azam and Co. in the recently concluded T20I match between the two former world champions… [+1875 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Twitter takes down Pakistan govt's account in India - The Indian Express","description":"Earlier this year, it was revealed that India was second in asking the platform users’ information and was among the top five countries to issue content-blocking orders to Twitter in the reporting timeframe for all kinds of users.","url":"https://indianexpress.com/article/india/pakistan-twitter-account-withheld-india-8183944/","urlToImage":"https://images.indianexpress.com/2022/10/pakistan.jpg","publishedAt":"2022-10-01T05:37:42Z","content":"The Twitter account of the Pakistan Government was withheld in India on Saturday with the social media company saying that the move came in response to a legal demand by the Centre.Earlier this year,… [+945 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Tech","title":"iPhone 14 Pro Max, iPhone 14 Pro users face severe bugs, glitches! See what users say - HT Tech","description":"iPhone 14 Pro Max users report facing several bugs and glitches. This is what users have to say.","url":"https://tech.hindustantimes.com/mobile/news/iphone-14-pro-max-iphone-14-pro-users-face-severe-bugs-glitches-see-what-users-say-71664602153092.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/10/01/1600x900/iPhone_14_Pro_Max_AOD_1663424222157_1664602219315_1664602219315.jpg","publishedAt":"2022-10-01T05:31:20Z","content":"The iPhone 14 Pro Max is currently the best iPhone money can buy and yet, those who have spent that much complain of severe issues. Ever since its launch, the iPhone 14 Pro Max and iPhone 14 Pro user… [+2024 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":"Vedant Yadav","title":"\"Think India Have Found Their New Zaheer Khan\": Former Pakistan Star On Pacer - NDTV Sports","description":"India vs South Africa: Former Pakistan player Kamran Akmal was all praise for Arshdeep Singh and compared him to the iconic Zaheer Khan.","url":"https://sports.ndtv.com/india-vs-south-africa-2022-23/think-india-have-found-their-new-zaheer-khan-former-pakistan-star-on-pacer-3394150","urlToImage":"https://c.ndtvimg.com/2022-10/j0l52nio_india-celebration-arshdeep-singh-bcci_625x300_01_October_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675","publishedAt":"2022-10-01T05:10:23Z","content":"Since making his debut in the Indian Premier League in 2019, Arshdeep Singh's stocks have been on the rise. The pacer had an excellent IPL 2022 season and went on to make his international debut duri… [+1615 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Commercial Cooking Gas Cylinder Prices Slashed. Check Rates For Your City - NDTV","description":"This revision comes exactly a month after the last slashing in price. On September 1, the per-unit cost of a 19 kg commercial cylinder was reduced by Rs 91.50 taking the cost from Rs 1,885 to Rs 1,976 in Delhi.","url":"https://www.ndtv.com/india-news/commercial-cooking-gas-cylinder-price-cut-by-rs-25-50-in-delhi-3394178","urlToImage":"https://c.ndtvimg.com/2019-07/gtnk7rno_lpg_650x400_01_July_19.jpg","publishedAt":"2022-10-01T04:43:58Z","content":"Prices of domestic cylinders will, however, may remain steady.\r\nNew Delhi: A day after prices of natural gas shot up by a record 40 percent in step with a global escalation in energy prices, Indian o… [+1056 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":null,"title":"Expresso Health Updates Of The Week - The Indian Express","description":"In this Expresso Health Updates Of The Week bulletin, we look at Bollywood Actor Ananya Panday’s fitness goals as she shared a selfie after acing 108 Surya Namaskars or Sun Salutations. We discuss why having a skincare routine for men is important and how str…","url":"https://indianexpress.com/audio/expresso-entertainment-update/expresso-health-updates-of-the-week-12-8156155-8169292-8179156-8183307/8183307/","urlToImage":"https://images.indianexpress.com/2022/04/Expresso-health-1200x630-1.jpg","publishedAt":"2022-10-01T04:00:05Z","content":"You are listening to the Expresso Health Update. Here is the latest news from the world of Health brought to you by The Indian Express.\"Let us begin todays bulletin with news on Anshula Kapoor who li… [+5572 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Entertainment Desk","title":"Ponniyin Selvan I box office collection Day 1: Mani Ratnam's film delivers third-best opening in Tamil Nadu; outperforms RRR and Vikram, breaks records overseas - The Indian Express","description":"Ponniyin Selvan box office collection day 1: Mani Ratnam's magnum opus has not only opened to smashing numbers in India but overseas as well.","url":"https://indianexpress.com/article/entertainment/tamil/ponniyin-selvan-box-office-collection-day-1-mani-ratnam-third-best-opening-in-tamil-nadu-breaks-record-overseas-8183802/","urlToImage":"https://images.indianexpress.com/2022/09/karthi-1.jpg","publishedAt":"2022-10-01T03:47:42Z","content":"Mani Ratnam’s historical epic Ponniyin Selvan: 1 received a positive response from the audience and film critics after its release in theaters on Friday. The positive reviews and years of anticipatio… [+1835 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Poulomi Ghosh","title":"'Rattled' BJP gives front page ad distorting history in Kannada paper: Congress - Hindustan Times","description":"\"BJP has a front page ad in a Kannada newspaper that as usual mischievously distorts history,\" Jairam Ramesh tweeted. | Latest News India","url":"https://www.hindustantimes.com/india-news/rattled-bjp-gives-front-page-ad-distorting-history-in-kannada-paper-jairam-ramesh-101664594698844.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/ba666db6-3b2c-11ed-8b5b-641320d18bc4_1664594967092_1664594967092_1664594994726_1664594994726.jpg","publishedAt":"2022-10-01T03:33:19Z","content":"Congress leader Jairam Ramesh on Saturday said the BJP has given a front page advertisement in a Kannada newspaper as Rahul Gandhi's Bharat Jodo Yatra has entered the BJP-rules state. The advertiseme… [+1581 chars]"},{"source":{"id":null,"name":"CNBCTV18"},"author":"Anand Singha","title":"15 Of Nasa'S Coolest Inventions That Make Our Lives Easier - CNBCTV18","description":"The National Aeronautics and Space Administration does more than build grandiose telescopes capable of witnessing the dawn of time and launching humans to the moon and back. It's also responsible for Michael Phelps' swimsuit, LASIK surgery, and the selfie. 15…","url":"https://www.cnbctv18.com/photos/science/15-coolest-nasa-inventions-make-our-lives-easier-mattress-swimsuits-14845861.htm","urlToImage":"https://images.cnbctv18.com/wp-content/uploads/2022/09/Untitled-design-2022-09-30T224008.332-1019x573.jpg","publishedAt":"2022-10-01T03:26:00Z","content":"Memory foam | You can thank NASA for the memory foam in your mattress, pillow, couch, work chair, or bike seat. Charles Yost, a NASA-funded aeronautical engineer, designed the material, which was emp… [+4901 chars]"},{"source":{"id":null,"name":"Odishatv.in"},"author":"Odishatv Bureau","title":"Scientists have just discovered a 6th ocean and it's not on earth's surface - OTV News","description":"This brings us one step closer to Jules Verne's idea of an ocean inside the Earth. The difference is that there is no ocean down there, but hydrous rock which, would neither feel wet nor drip water.","url":"https://odishatv.in/news/science/scientists-have-just-discovered-a-6th-ocean-and-it-s-not-on-earth-s-surface-186802","urlToImage":"https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1664594103.webp","publishedAt":"2022-10-01T03:19:49Z","content":"It seems we are closer to Jules Verne’s idea of an ocean inside the Earth. Yes, you heard that right. While you know that 70% of the entire earth's surface is overlaid with water, most of which prese… [+1321 chars]"},{"source":{"id":null,"name":"Tellybest.com"},"author":null,"title":"Ghum Hai Kisi Ke Pyaar Mein (GHKKPM) 3rd October 2022 Written Update - Tellybest.com","description":"Ghum Hai Kisi Ke Pyaar Mein 3rd October 2022 Written Update: GHKKPM written update Today's Ghum Hai Kisi Ke Pyar Mein 3rd October 2022 episode starts with Patralekha selecting jewellery at the shop when Sai walks into the shop as well. Seeing Virat","url":"https://www.tellybest.com/written-update/ghum-hai-kisi-ke-pyaar-mein-ghkkpm-3rd-october-2022-written-update","urlToImage":null,"publishedAt":"2022-10-01T03:10:22Z","content":"Ghum Hai Kisi Ke Pyaar Mein 3rd October 2022 Written Update: GHKKPM written update\r\nToday's Ghum Hai Kisi Ke Pyar Mein 3rd October 2022 episode starts with Patralekha selecting jewellery at the shop … [+852 chars]"},{"source":{"id":null,"name":"GSMArena.com"},"author":"Enrique","title":"Apple iPhone 14 Pro achieves top DxOMark scores for selfie camera and video performance - GSMArena.com news - GSMArena.com","description":"The new iPhone 14 flagship ranks second in overall score and ranks #1 in selfie camera performance.","url":"https://www.gsmarena.com/apple_iphone_14_pro_achieves_top_dxomark_scores_for_selfie_camera_and_video_performance-news-56014.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/22/09/iphone-14-pro-gets-dxomark-top-selfie/-952x498w6/gsmarena_000.jpg","publishedAt":"2022-10-01T03:02:01Z","content":"In DxOMarks camera testing of the iPhone 14 Pro, Apples flagship model achieves outstanding scores. With an overall camera score of 146, it earned second place in DxOMarks global camera ranking (just… [+2201 chars]"},{"source":{"id":null,"name":"ThePrint"},"author":"Ishadrita Lahiri","title":"Ashok Gehlot: 'Jaadugar' who worked magic for Congress over decades now faces uncertain road - ThePrint","description":"Handpicked by Indira Gandhi and made Rajasthan PCC chief by Rajiv Gandhi, Gehlot is known as a long-time loyalist, with party insiders considering his 'revolt' last week 'unusual'.","url":"https://theprint.in/politics/ashok-gehlot-jaadugar-who-worked-magic-for-congress-over-decades-now-faces-uncertain-road/1149054/","urlToImage":"https://static.theprint.in/wp-content/uploads/2022/09/Ashok-Gehlot-PC.jpg","publishedAt":"2022-10-01T03:00:54Z","content":"New Delhi: On Thursday, deep in the throes of a full-blown controversy, Ashok Gehlot faced a frenzied media after his meeting with Sonia Gandhi. The Rajasthan chief minister looked around, smiled at … [+7942 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Mallika Soni","title":"You're free to tweet: Messages reveal Elon Musk- Parag Agrawal fall out - Hindustan Times","description":"Elon Musk-Twitter Trial: Elon Musk and Twitter are due for a trial in court In mid-October which will decide on the former's $44 billion acquisition of the social media platform. | World News","url":"https://www.hindustantimes.com/world-news/elon-musk-news-elon-musk-parag-agrawal-fight-elon-musk-twitter-deal-you-re-free-to-tweet-messages-reveal-elon-musk-parag-agrawal-fall-out-101664590071200.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/Musk-Twitter-CEO-Text-Messages-0_1664590625173_1664590625173_1664590667832_1664590667832.jpg","publishedAt":"2022-10-01T02:20:25Z","content":"Messages between Tesla chief Elon Musk and important place holders at Twitter- Jack Dorsey, board chair Bret Taylor and current head Parag Agrawal were released during an ongoing documentation ahead … [+1506 chars]"}]}
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

    // let business = await data.json();
    props.progress(80);


    props.progress(90);
    setloading(true);
    setarticles(home.articles);
    settotalResults(home.totalResults);

    // this.setState({
    //   articles: home.articles,
    //   totalArticles: home.totalResults,
    //   loading: false,
    // });
    props.progress(100);
  };
  const click1=()=>{
    document.getElementById('clicker2').click()
  }
  useEffect(() => {
    setloading(true);
    setTimeout(updatenews,500);
    
    document.getElementById('clicker').click();
    setTimeout(click1, 2000)
 
    
  }, []);
  
  

  // const fetchMoreData = async () => {
 

  //   setarticles(articles.concat(home.articles));
  //   settotalResults(home.totalResults);
  //   setloading(false);
  //   setpage(page + 1);
  // };
const date=(date)=>{
  let date1 = new Date(date)
  return date1.toGMTString()
}
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

   

    
      <div style={{ overflow: "hidden" }} className="respo1">
     

        <div  
          id="carouselExampleControls"
          className="carousel slide coursel-div"
          data-bs-ride="carousel"
          
        >
          <div className="carousel-inner ">
            <div className="carousel-item active" >
              <img
                src={home.articles[0].urlToImage}
                className="d-block w-100 coursel-img"
                alt="..."
                />
              <div className="carousel-caption  d-md-block">
                <h5 className="coursel-text">{home.articles[0].title}</h5>
              </div>
            </div>
            {home.articles.map((element) => { if(element.urlToImage === null || element.urlToImage === home.articles[0].urlToImage) {return null}
                
 
 else{
  return (
    <div key={element.title}>
      <div className="carousel-item" >
      
        <img
          src={element.urlToImage}
          className="d-block w-100 coursel-img"
          alt="..."
        />
        <div className="carousel-caption  d-md-block">
          <h5 className="coursel-text">{element.title}</h5>
        </div>
      </div>
    </div>
  );
}
 })}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            id="clicker2"
            
            >
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            id="clicker"
            >
            <span className="carousel-control-next-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
            </div>
        </div>
      </div>
     
    <div className="cont"><div style={{fontSize:34, textAlign:"center"}}>--Breaking News--  </div>
      {articles.map((element)=>{
        return ( 
          <div className="card mb-3" style={{maxWidth:540}}  key={element.title}>
            <a href={element.url} style={{textDecoration:"none", color:"black"}}>
  <div className="row g-0">
    <div className="col-md-4"> <div style={{position: "relative"}}>
      <img src={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="img-fluid rounded-start hover-blur-pic" alt="..."/>
      <div className="inside-img-text" ></div></div>
    </div>
    <div className="">
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.description}</p>
        <p className="card-text"><small className="text-muted">Last updated at {date(element.publishedAt)}</small></p>
      </div>
    </div>
  </div>
  </a>
</div>

        )
      })}
      <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div>
    </div>
<div className="d-flex justify-content-center"></div>


    
    </div>
  );
}
Home.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
Home.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
};
