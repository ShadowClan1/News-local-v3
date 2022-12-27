import React from 'react'

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";


export default function Business(props) {
const business = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"Indiacarnews.com"},"author":"Amit Sharma","title":"MG ZS EV Excite Base Variant Launched At Rs 22.58 Lakh – Nexon EV MAX Rival - India Car News","description":"MG Motor India had launched the new ZS EV facelift in the country in early 2022. The electric SUV was introduced in two variants – Excite and Exclusive; however, only the top-spec Exclusive variant was on sale. The company has now announced the prices of the …","url":"https://www.indiacarnews.com/news/mg-zs-ev-excite-base-variant-launched-at-rs-22-58-lakh-nexon-ev-max-rival-54112/","urlToImage":"https://www.indiacarnews.com/wp-content/uploads/2022/02/New-MG-ZS-EV-2022-1000x600.jpg","publishedAt":"2022-10-01T05:55:04Z","content":"MG Motor India had launched the new ZS EV facelift in the country in early 2022. The electric SUV was introduced in two variants – Excite and Exclusive; however, only the top-spec Exclusive variant w… [+1314 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"India's first Electric Car Under 10 lakhs! - MotorOctane","description":"Tata launches the Tiago EV, the cheapest EV in India, today!We check it out in detail! #tatatiagoev #tiagoev #tiagoelectricCar Consultancy Form: https://moto...","url":"https://www.youtube.com/watch?v=i0RbcA5omeM","urlToImage":"https://i.ytimg.com/vi/i0RbcA5omeM/hqdefault.jpg","publishedAt":"2022-10-01T05:30:13Z","content":null},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Commercial Cooking Gas Cylinder Prices Slashed. Check Rates For Your City - NDTV","description":"This revision comes exactly a month after the last slashing in price. On September 1, the per-unit cost of a 19 kg commercial cylinder was reduced by Rs 91.50 taking the cost from Rs 1,885 to Rs 1,976 in Delhi.","url":"https://www.ndtv.com/india-news/commercial-cooking-gas-cylinder-price-cut-by-rs-25-50-in-delhi-3394178","urlToImage":"https://c.ndtvimg.com/2019-07/gtnk7rno_lpg_650x400_01_July_19.jpg","publishedAt":"2022-10-01T04:43:58Z","content":"Prices of domestic cylinders will, however, may remain steady.\r\nNew Delhi: A day after prices of natural gas shot up by a record 40 percent in step with a global escalation in energy prices, Indian o… [+1056 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Oracle Fined $23 Million For Bribing Officials In India, Turkey And UAE - NDTV Profit","description":"Oracle's employees at its India unit used an excessive discount scheme linked to a transaction with a transportation company owned by the ministry of railways, US Securities and Exchange Commission (SEC) said.","url":"https://www.ndtv.com/business/oracle-fined-23-million-for-bribing-officials-in-india-turkey-and-uae-3389473","urlToImage":"https://cdn.ndtv.com/tech/images/gadgets/oracle_building_ap.jpg","publishedAt":"2022-10-01T04:43:14Z","content":"Oracle used slush funds to bribe officials in India, United Arab Emirates and Turkey.\r\nOracle's employees at its India unit used an excessive discount scheme linked to a transaction with a transporta… [+2455 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"Sharmistha Mukherjee","title":"FAME-II scheme: Govt to digitally monitor EV parts localisation - Economic Times","description":"Ministry of heavy industries secretary Arun Goel said the move would not only help establish an ecosystem for EV manufacturing in India but also further ease of doing business.","url":"https://economictimes.indiatimes.com/industry/renewables/fame-ii-scheme-govt-to-digitally-monitor-ev-parts-localisation/articleshow/94571785.cms","urlToImage":"https://img.etimg.com/thumb/msid-94571813,width-1070,height-580,imgsize-59054,overlay-economictimes/photo.jpg","publishedAt":"2022-10-01T04:06:00Z","content":"The government is in the process of making live an automated data transfer system to monitor localisation content of electric vehicles availing subsidies under the Rs 10,000 crore FAME-II policy to p… [+3303 chars]"},{"source":{"id":null,"name":"Mobilityoutlook.com"},"author":"Mukul Yudhveer Singh","title":"Honda Overtakes Hero MotoCorp In 2W Registrations in Sep 2022 - Mobility Outlook","description":"Hero MotoCorp continues to lead the sales charts in overall two-wheeler sales for the year by a significant margin.","url":"https://www.mobilityoutlook.com/analysis/honda-overtakes-hero-motocorp-in-2w-registrations-in-sep-2022/","urlToImage":"https://imgd.aeplcdn.com/642x336/n/cw/ec/132009/infographics0.jpeg?isig=1&art=8&q=75","publishedAt":"2022-10-01T03:44:35Z","content":"For the first time ever, Honda Motorcycle &amp; Scooter India (HMSI) has overtaken Hero MotoCorp in terms of monthly two-wheeler (2W) registrations for both motorcycles and scooters. Hero MotoCorp, n… [+4367 chars]"},{"source":{"id":null,"name":"India Today"},"author":null,"title":"Even I can't afford your car: Gadkari urges Mercedes-Benz to increase production - India Today","description":"Union Minister Nitin Gadkari urged Mercedes-Benz to produce more cars locally. He was speaking at the rollout of Mercedes-Benz India's first locally assembled EQS 580 4MATIC EV.","url":"https://www.indiatoday.in/india/story/nitin-gadakri-mercedes-benz-urge-produce-more-cars-locally-2007014-2022-10-01","urlToImage":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/nitin-647x363.png?HCGUMZNa.n1oCCsJfpgPlUaBr5XyhAtK","publishedAt":"2022-10-01T03:26:34Z","content":"Union Minister Nitin Gadkari on Friday asked German premium car maker Mercedes-Benz to produce more cars locally and emphasised that such a move reduces the cost besides increasing affordability.\r\nSp… [+2689 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Elon Musk reveals a humanoid robot at Tesla AI Day 2022 - The Verge","description":"At annual Tesla AI Day event , Tesla CEO Elon Musk revealed the company's prototype robot meant to revolutionize their assembly line. The robot was only able...","url":"https://www.youtube.com/watch?v=UXHoWNfjJYM","urlToImage":"https://i.ytimg.com/vi/UXHoWNfjJYM/hqdefault.jpg","publishedAt":"2022-10-01T03:03:38Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"Mallika Soni","title":"You're free to tweet: Messages reveal Elon Musk- Parag Agrawal fall out - Hindustan Times","description":"Elon Musk-Twitter Trial: Elon Musk and Twitter are due for a trial in court In mid-October which will decide on the former's $44 billion acquisition of the social media platform. | World News","url":"https://www.hindustantimes.com/world-news/elon-musk-news-elon-musk-parag-agrawal-fight-elon-musk-twitter-deal-you-re-free-to-tweet-messages-reveal-elon-musk-parag-agrawal-fall-out-101664590071200.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/Musk-Twitter-CEO-Text-Messages-0_1664590625173_1664590625173_1664590667832_1664590667832.jpg","publishedAt":"2022-10-01T02:20:25Z","content":"Messages between Tesla chief Elon Musk and important place holders at Twitter- Jack Dorsey, board chair Bret Taylor and current head Parag Agrawal were released during an ongoing documentation ahead … [+1506 chars]"},{"source":{"id":null,"name":"GaadiWaadi.com"},"author":"Team GaadiWaadi","title":"Tata Harrier Facelift Spied For The First Time – Gets ADAS - GaadiWaadi.com","description":"The upcoming Tata Harrier facelift is expected to be offered with a redesigned front fascia, new cabin and better safety tech","url":"https://gaadiwaadi.com/tata-harrier-facelift-spied-for-the-first-time-gets-adas/","urlToImage":"https://gaadiwaadi.com/wp-content/uploads/2022/07/2023-Tata-Harrier-Facelift.jpg","publishedAt":"2022-10-01T01:43:55Z","content":"Tata is working on the new Harrier facelift for a long time now and has now started testing the new version of the SUV ahead of the debut next year. For those wondering, the Tata Harrier facelift is … [+1803 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":"Priyanka Iyer","title":"CRED launches UPI scan and pay, move may help increase in-app transaction volumes - Moneycontrol","description":"CRED said that users will be allowed to create an alias UPI ID, helping them mask personal details like mobile numbers, ensuring enhanced privacy during payments. It is also offering 2x rewards for payments made to partner merchants.","url":"https://www.moneycontrol.com/news/business/announcements/cred-launches-upi-scan-and-pay-move-may-help-increase-in-app-transaction-volumes-9259261.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2021/09/Kunal-shah-cred-770x433.jpg","publishedAt":"2022-10-01T01:10:13Z","content":"Credit card payments platform CRED said on October 1 that it will now allow users to make scan and pay Unified Payments Interface (UPI) transactions, an extension to the current offering of allowing … [+4860 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Aanchal Magazine","title":"Off the mark RBI projections prompt govt to plan forecasting alternatives - The Indian Express","description":"Though at initial stages, the ministries are learnt to have held internal consultations for developing a system for projecting price trends and growth forecasts, distinct from the actual data collection and estimates currently done by departments such as the …","url":"https://indianexpress.com/article/business/economy/off-the-mark-rbi-projections-prompt-govt-to-plan-forecasting-alternatives-8183506/","urlToImage":"https://images.indianexpress.com/2022/09/RBI-Reserve-Bank-Reuters-1200-1-1.jpg","publishedAt":"2022-09-30T22:34:33Z","content":"Multiple revisions by the Reserve Bank of India in its projections for growth and inflation have caused concern within the government about these being off the mark from actual numbers. At least two … [+3973 chars]"},{"source":{"id":null,"name":"Investing.com"},"author":"Reuters","title":"Inflation punches Wall Street again, ending knock-down quarter By Reuters - Investing.com","description":"Inflation punches Wall Street again, ending knock-down quarter","url":"https://www.investing.com/news/stock-market-news/asian-shares-head-for-worst-month-since-pandemic-started-2902365","urlToImage":"https://i-invdn-com.investing.com/news/LYNXMPEA601E0_L.jpg","publishedAt":"2022-09-30T20:36:00Z","content":"By Lawrence Delevingne\r\n(Reuters) - Wall Street and global stocks slumped further on Friday, with government bond yields and the dollar holding near recent peaks, as higher-than-expected inflation ca… [+4198 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"How India's Gautam Adani Became The World's Fourth Richest Person - CNBC","description":"The Indian billionaire briefly surpassed Amazon founder Jeff Bezos to become the second-richest person in the world in September, according to Bloomberg. He’...","url":"https://www.youtube.com/watch?v=oWig0BW848o","urlToImage":"https://i.ytimg.com/vi/oWig0BW848o/hqdefault.jpg","publishedAt":"2022-09-30T19:11:34Z","content":null},{"source":{"id":null,"name":"Livemint"},"author":"Vipul Das","title":"This penny stock of ₹1 announces record date for 2:1 bonus shares | Mint - Mint","description":"Pro Fin Capital Services Ltd is a small cap company in the financial services industry with a market valuation of  ₹42.19 crore.","url":"https://www.livemint.com/market/stock-market-news/this-penny-stock-of-rs-1-announces-record-date-for-2-1-bonus-shares-11664559217538.html","urlToImage":"https://images.livemint.com/img/2022/09/30/600x338/TAIWAN-MAICOIN-8_1663256785336_1663256785336_1664559288930_1664559288930.jpg","publishedAt":"2022-09-30T17:37:06Z","content":"Pro Fin Capital Services Ltd is a small cap company in the financial services industry with a market valuation of 42.19 crore. The company offers its clients financial services such NSE/BSE trading, … [+1991 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":"PTI","title":"Unitech Case: Sebi levies Rs 27 lakh penalty on 5 entities for violating regulatory norms - Moneycontrol","description":"The order came after a Sebi probe in the scrip of Unitech during the period October 2008 to March 2009.","url":"https://www.moneycontrol.com/news/business/unitech-case-sebi-levies-rs-27-lakh-penalty-on-5-entities-for-violating-regulatory-norms-9259681.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2021/06/SEBI-770x433.jpg","publishedAt":"2022-09-30T17:17:33Z","content":"Sebi on Friday levied fines totalling Rs 27 lakh on five entities for violating regulatory norms in the matter of Unitech Ltd. The regulator slapped a fine of Rs 10 lakh on Sanjay Bahadur, Rs 6 lakh … [+2943 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"Livemint","title":"Forex reserves shrink by $8.13 bn to $537.51 bn | Mint - Mint","description":"The reserves, which have been dipping as the central bank deploys the kitty to defend the rupee amid global volatility, had declined by over $5.2 bn to $545.54 bn","url":"https://www.livemint.com/economy/forex-reserves-shrink-by-8-13-bn-to-537-51-bn-11664557406750.html","urlToImage":"https://images.livemint.com/img/2022/09/30/600x338/dollars2--621x414_1664558074800_1664558074800.JPG","publishedAt":"2022-09-30T17:14:44Z","content":"The country's forex reserve continue to shrink, with the overall reserves declining by $8.134 billion to $537.518 billion for the week ended September 23, RBI data showed on Friday. The forex reserve… [+1120 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"PTI","title":"Gas prices hiked 40%; CNG, PNG to cost more - Hindustan Times","description":"The rate paid for gas produced from old fields, which make up for about two-thirds of all gas produced in the country, was hiked to USD 8.57 per million British thermal units from the current USD 6.1, according to an order from the oil ministry's Petroleum Pl…","url":"https://www.hindustantimes.com/india-news/gas-prices-hiked-40-cng-png-to-cost-more-101664555564800.html","urlToImage":"https://images.hindustantimes.com/img/2022/09/30/1600x900/economy-power-plant-industry-industrialisation-env_1664556097317_1664556097593_1664556097593.jpg","publishedAt":"2022-09-30T16:42:09Z","content":"Prices of natural gas, which is used to generate electricity, make fertiliser and is converted into CNG to run automobiles, were on Friday hiked by a steep 40 per cent to record levels, in step with … [+4021 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Long-Haul Expansion: Air India Plans 20 New Flights To The UK And US - Simple Flying","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiS2h0dHBzOi8vc2ltcGxlZmx5aW5nLmNvbS9haXItaW5kaWEtbmV3LXJvdXRlcy11bml0ZWQta2luZ2RvbS11bml0ZWQtc3RhdGVzL9IBAA?oc=5","urlToImage":null,"publishedAt":"2022-09-30T16:35:00Z","content":null},{"source":{"id":null,"name":"Carwale.com"},"author":"Jay Shah","title":"Mahindra XUV300 Sportz to be revealed on 7 October - CarWale","description":"Mahindra XUV300 Sportz to be revealed on 7 October","url":"https://www.carwale.com/news/mahindra-xuv300-sportz-to-be-revealed-on-7-october/","urlToImage":"https://imgd.aeplcdn.com/642x336/n/cw/ec/131983/mahindra-xuv300-sportz-left-front-three-quarter0.jpeg?isig=0&art=1&q=75","publishedAt":"2022-09-30T16:30:18Z","content":"- 1.2-litre petrol to have increased power output of 128bhp \r\n- To be offered only with a six-speed manual gearbox\r\nMahindra is all set to take the wraps off a more powerful version of the XUV300comp… [+778 chars]"}]}
 
    
      const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [pgno, setpgno] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capital = (word) => {
    let a = word.toLowerCase();
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  const [progress, setprogress] = useState(0)
 
  const setlload=()=>{
    props.progress(10);
    props.progress(20);
    props.progress(30);
    props.progress(40);
    props.progress(50);
    props.progress(60);
    props.progress(70);
    props.progress(80);
    props.progress(90);
    props.progress(100);
   
  } 
  // 
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
    setarticles(business.articles);
    settotalResults(business.totalResults);

    // this.setState({
    //   articles: business.articles,
    //   totalArticles: business.totalResults,
    //   loading: false,
    // });
    props.progress(100);
  };
  useEffect(() => {
    setloading(true)
    setlload();
    updatenews();
  }, []);

  
  // const fetchMoreData = async () => {
   
   

    
  //   setarticles(articles.concat(business.articles));
  //   settotalResults(business.totalResults);
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
     {loading && setlload}
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
                  {loading && <NewsItem
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
                  />}
                </div>
              );
            })}
          </div>
        {/* </InfiniteScroll> */}
      </div>{loading && <Spinner />}
      <div className="container center">
      <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div></div>
    
    </div>
  );
};
Business.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
Business.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
};
 
  