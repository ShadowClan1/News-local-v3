import React from 'react';
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Sports(props) {
    const sports = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"NDTV News"},"author":"Abhimanyu Bose","title":"Watch: Batter Bamboozled, Gets Bowled Leaving Delivery Outside Off-Stump In County Match - NDTV Sports","description":"South African spinner Simon Harmer produced a brilliant delivery to castle Will Young in a County match.","url":"https://sports.ndtv.com/cricket/watch-batter-bamboozled-gets-bowled-leaving-delivery-outside-off-stump-in-county-match-3394502","urlToImage":"https://c.ndtvimg.com/2022-10/9re72ai8_simon-harmer-wicket-county-twitter_625x300_01_October_22.jpg","publishedAt":"2022-10-01T07:33:00Z","content":"While English pitches are known for the seam and swing movement, County matches often produce some mind-blowing deliveries from spinners. While English leg-spinner Matt Parkinson is often the artist,… [+1389 chars]"},{"source":{"id":null,"name":"DAWN.com"},"author":"Reuters, Dawn.com","title":"Antonio Inoki, Japanese pro-wrestler politician, dies aged 79 - DAWN.com","description":"The wrestler became one of the biggest names on Japan’s pro-wrestling circuit in the 1960s; he visited Pakistan several times.","url":"https://www.dawn.com","urlToImage":"https://i.dawn.com/large/2022/10/011127039486833.jpg?r=112730","publishedAt":"2022-10-01T07:05:38Z","content":"Antonio Inoki, a Japanese professional wrestling star turned politician, widely known for his match with Muhammad Ali and ties to North Korea, has died aged 79, after years of battling a rare disease… [+3680 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"One to One with Graham Potter - Chelsea Football Club","description":null,"url":"https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgkQWWeDOAOE","urlToImage":null,"publishedAt":"2022-10-01T07:00:16Z","content":null},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":"Madushka Balasuriya","title":"After Asia Cup glory, Sri Lanka leave for T20 World Cup brimming with confidence - ESPNcricinfo","description":"After a camp in Kandy, Shanaka's team is reaching Australia well in advance to work on skills and plans specific to the conditions on offer","url":"https://www.espncricinfo.com/story/t20-world-cup-2022-boosted-by-asia-cup-glory-sri-lanka-leave-for-australia-brimming-with-confidence-1337515","urlToImage":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/345500/345516.6.jpg","publishedAt":"2022-10-01T06:35:05Z","content":"NewsAfter a camp in Kandy, Shanaka's team is reaching Australia well in advance to work on skills and plans specific to the conditions on offer"},{"source":{"id":null,"name":"Greatandhra.com"},"author":"IANS","title":"ICC bets on five players to excel in T20 World Cup.. - Greatandhra","description":"The International Cricket Council (ICC) has named charismatic India middle-order batter Suryakumar Yadav among five shortlisted players who it feels will shine during the T20 World Cup in Australia beginning on October 16.","url":"https://www.greatandhra.com/articles/special-articles/icc-bets-on-five-players-to-excel-in-t20-world-cup-124175","urlToImage":"https://www.greatandhra.com/newphotos10/sky21664602963.jpg","publishedAt":"2022-10-01T05:42:43Z","content":"The International Cricket Council (ICC) has named charismatic India middle-order batter Suryakumar Yadav among five shortlisted players who it feels will shine during the T20 World Cup in Australia b… [+1956 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Sports Desk","title":"Watch: Tait's epic reaction to Pakistan's embarrassing defeat floors reporters - Hindustan Times","description":"During a media interaction, Pakistan's fast bowling coach Shaun Tait stunned reporters with his unique sense of humour. England crushed Pakistan by 8 wickets in the 6th T20I to level the series 2-2 on Friday. | Cricket","url":"https://www.hindustantimes.com/cricket/they-send-me-when-shaun-tait-s-epic-reaction-to-pakistan-s-embarrassing-defeat-floors-reporters-in-press-conference-watch-101664599567804.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/shaun_tait_1664602671276_1664602676415_1664602676415.png","publishedAt":"2022-10-01T05:39:24Z","content":"Pakistan's fast bowling coach Shaun Tait was asked to face the music after Moeen Ali-led England crushed Babar Azam and Co. in the recently concluded T20I match between the two former world champions… [+1875 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":"Matt Roller","title":"Phil Salt attacks opener brief to produce timely return to form - ESPNcricinfo","description":"Likely to be a World Cup back-up, his approach is nevertheless exactly what his side needs","url":"https://www.espncricinfo.com/story/pak-vs-eng-6th-t20i-lahore-phil-salt-attacks-opener-brief-to-produce-timely-return-to-form-1337487","urlToImage":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/346800/346805.6.jpg","publishedAt":"2022-10-01T05:16:36Z","content":"Match AnalysisLikely to be a World Cup back-up, his approach is nevertheless exactly what his side needs\r\nPhil Salt powered to a 19-ball fifty  •  AFP/Getty Images\r\nThere is a fine line between selfl… [+4551 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":"Vedant Yadav","title":"\"Think India Have Found Their New Zaheer Khan\": Former Pakistan Star On Pacer - NDTV Sports","description":"India vs South Africa: Former Pakistan player Kamran Akmal was all praise for Arshdeep Singh and compared him to the iconic Zaheer Khan.","url":"https://sports.ndtv.com/india-vs-south-africa-2022-23/think-india-have-found-their-new-zaheer-khan-former-pakistan-star-on-pacer-3394150","urlToImage":"https://c.ndtvimg.com/2022-10/j0l52nio_india-celebration-arshdeep-singh-bcci_625x300_01_October_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675","publishedAt":"2022-10-01T05:10:23Z","content":"Since making his debut in the Indian Premier League in 2019, Arshdeep Singh's stocks have been on the rise. The pacer had an excellent IPL 2022 season and went on to make his international debut duri… [+1615 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"LIVE! | T5 | GER vs IND | WT Groups | 2022 World Team Championships Finals Chengdu - World Table Tennis","description":"Watch the live streaming of GER vs IND in the WT Group stage at the 2022 World Team Table Tennis Championships Finals Chengdu presented by China Telecom!Find...","url":"https://www.youtube.com/watch?v=-AZsdGyeUZo","urlToImage":"https://i.ytimg.com/vi/-AZsdGyeUZo/maxresdefault_live.jpg","publishedAt":"2022-10-01T04:56:33Z","content":null},{"source":{"id":null,"name":"NDTV News"},"author":"Abhimanyu Bose","title":"Video: Umpire Aleem Dar Hurt As Pakistan Batter Smashes A Shot Into Him - NDTV Sports","description":"Pakistan vs England: Haider Ali played a pull shot off Richard Gleeson and it hit umpire Aleem Dar on the thigh as he tried desperately to get out of the way.","url":"https://sports.ndtv.com/cricket/pakistan-vs-england-umpire-aleem-dar-hurt-as-haider-ali-smashes-a-shot-into-him-3394128","urlToImage":"https://c.ndtvimg.com/2022-10/lb4r9vvo_haider-ali-aleem-dar-twitter_625x300_01_October_22.jpg","publishedAt":"2022-10-01T03:49:42Z","content":"Umpire Aleem Dar suffered an unfortunate injury during the sixth T20I between Pakistan and England in Lahore on Friday as Haider Ali rammed a pull shot straight into him. Dar was the leg umpire in th… [+1320 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Sandeep Dwivedi","title":"Jasprit Bumrah has Sushil Kumar like intimidating aura, without him India lacks fire power and fear factor - The Indian Express","description":"Weekly Sports Newsletter: Australia, under Ricky Ponting, looked like Ocean's XI or Tarantino's Reservoir Dogs - a bunch with varied skills equipped to pull off the most difficult of heists. With India, minus Bumrah, you have question: Who has the gas lighter…","url":"https://indianexpress.com/article/sports/cricket/jasprit-bumrah-has-sushil-kumar-like-intimidating-aura-without-him-india-lacks-fire-power-and-fear-factor-8183725/","urlToImage":"https://images.indianexpress.com/2022/06/Bumrah.jpg","publishedAt":"2022-10-01T03:32:18Z","content":"Should Jasprit Bumrah get ruled out of the T20 World Cup in Australia this month, India will look weak on paper and, more importantly, the frame of Rohit Sharma and his boys taking the field for thei… [+7707 chars]"},{"source":{"id":null,"name":"Cricbuzz"},"author":null,"title":"Bangladesh Women vs Thailand Women, 1st Match, Womens Asia Cup T20 2022 - Cricbuzz","description":"Follow Bangladesh Women vs Thailand Women, 1st Match, Oct 01, Womens Asia Cup T20 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz","url":"https://www.cricbuzz.com/cricket-commentary/53224/banw-vs-thaiw-1st-match-womens-asia-cup-t20-2022","urlToImage":null,"publishedAt":"2022-10-01T03:26:38Z","content":"11:16 Local Time, 05:16 GMT, 10:46 IST: Shamima Sultana made an absolute mockery of the total. Scored boundary after boundary to deflate Thailand very early and when the opening stand reached fifty, … [+325 chars]"},{"source":{"id":null,"name":"Cricketaddictor.com"},"author":"More by Vicky Singh","title":"IN-W vs SL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Women's Asia Cup 2022 - Cricket Addictor","description":"IN-W vs SL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Women’s Asia Cup 2022","url":"https://cricketaddictor.com/fantasy-cricket/in-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-womens-asia-cup-2022/","urlToImage":"https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/08/FZeun-FaIAAe3Fm-scaled.jpg","publishedAt":"2022-10-01T03:15:15Z","content":"IN-W vs SL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Womens Asia Cup 2022 match between India Women and Sri Lanka Women.\r\nIN-W vs SL-W Women… [+4637 chars]"},{"source":{"id":null,"name":"Tennis World USA"},"author":"Jovica Ilic","title":"Rafael Nadal passes Novak Djokovic on ranking milestone - Tennis World USA","description":"Tennis - Nadal will join Carlos Alcaraz at the top of the standings","url":"https://www.tennisworldusa.org/tennis/news/Rafael_Nadal/121558/rafael-nadal-passes-novak-djokovic-on-ranking-milestone/","urlToImage":"https://www.tennisworldusa.org/imgb/125762/rafael-nadal-passes-novak-djokovic-on-ranking-milestone.webp","publishedAt":"2022-10-01T02:45:08Z","content":"The 22-time Major champion Rafael Nadal will return to top-2 on Monday, starting his 580th week in the mentioned group and extending the record. Nadal will replace Casper Ruud in the elite group and … [+2295 chars]"},{"source":{"id":null,"name":"International Cricket Council"},"author":"Jonathan Healy","title":"Five players tipped to shine during the T20 World Cup - ICC Cricket","description":"We take a look at five players that are expected to perform well during the upcoming ICC Men's T20 World Cup in Australia.","url":"https://www.icc-cricket.com/news/2809042","urlToImage":"https://resources.pulse.icc-cricket.com/ICC/photo/2022/09/29/27056e2f-209f-4d49-b282-9a2dcd74e6bb/Warner-Rizwan.jpg","publishedAt":"2022-10-01T02:17:34Z","content":"We take a look at five players that are expected to perform well during the upcoming ICC Men's T20 World Cup in Australia.1. David Warner (Australia)\r\nOnly Pakistan captain Babar Azam scored more run… [+3324 chars]"},{"source":{"id":null,"name":"India Today"},"author":null,"title":"Jasprit Bumrah not ruled out of T20 World Cup 2022 yet: BCCI president Sourav Ganguly - India Today","description":"Jasprit Bumrah was recently ruled out of the three-match T20I series against South Africa due to a back injury. He is currently under the supervision of the medical staff at the NCA in Bangalore.","url":"https://www.indiatoday.in/sports/cricket/story/jasprit-bumrah-not-ruled-out-of-t20-world-cup-2022-yet-bcci-president-sourav-ganguly-2007001-2022-10-01","urlToImage":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/AP22266597856950-647x363.jpeg?Ua86QGC8wCqNJQ.Liov9FmUOaCCnuW.K","publishedAt":"2022-10-01T02:15:38Z","content":"Sourav Ganguly, the President of the Board of Control for Cricket in India (BCCI) said that Jasprit Bumrah hasnt been ruled out of the T20 World Cup 2022 just yet. Recently, Bumrah sustained a back i… [+1403 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Aritra Mukherjee","title":"DK or Pant? DK and Pant both? No, it's DK-Pant - Hindustan Times","description":"Dinesh Karthik and Rishabh Pant are now busy in their world. If there can be a batters' club, a fast bowlers' gang, a spinners' group, why can't there be one for the keepers? | Cricket","url":"https://www.hindustantimes.com/cricket/dinesh-karthik-or-rishabh-pant-dk-and-pant-both-no-it-s-dk-pant-in-india-vs-south-africa-t20is-101664589079903.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/India-Cricket-4_1664589546079_1664589546079_1664589583643_1664589583643.jpg","publishedAt":"2022-10-01T02:00:19Z","content":"The giggles slowly become audible. For they often turn into laughter accompanied by loud claps. DK and Pant are busy with their own classroom even as the rest of the Indian cricketers do the boring s… [+3287 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":"Deivarayan Muthu","title":"Recent Match Report - Royals vs Tallawahs Final 2022 - ESPNcricinfo","description":"Favourites Royals tripped at the final hurdle despite solid knocks from Azam Khan and Rahkeem Cornwall","url":"https://www.espncricinfo.com/series/caribbean-premier-league-2022-1320379/barbados-royals-vs-jamaica-tallawahs-final-1323177/match-report","urlToImage":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/346800/346820.6.jpg","publishedAt":"2022-10-01T01:30:07Z","content":"Jamaica Tallawahs won their third CPL trophy with a dominant performance in the final  •  CPL T20 via Getty Images"},{"source":{"id":null,"name":"Icccricketschedule.com"},"author":"https://www.facebook.com/TechnologyBlogs","title":"WORLD CUP 2022: All The Squads For ICC Men's T20 World Cup 2022 - ICC CRICKET SCHEDULE","description":"Ahead of the much-awaited ICC Men's T20 World Cup 2022, starting next month in Australia, all 16 teams have sent their squads for the tournament. Check it out Right now","url":"https://www.icccricketschedule.com/world-cup-2022-all-the-squads-for-icc-mens-t20-world-cup-2022/","urlToImage":"https://www.icccricketschedule.com/wp-content/uploads/2022/09/ICC-groups-wise.jpg","publishedAt":"2022-10-01T00:55:55Z","content":"All the squads for ICC Men’s T20 World Cup 2022: Ahead of the much-awaited ICC Men’s T20 World Cup 2022, starting next month in Australia, all 16 teams have sent their squads for the tournament. The … [+5726 chars]"},{"source":{"id":null,"name":"SB Nation"},"author":"David Pasztor","title":"Crystal Palace vs. Chelsea, Premier League: Preview, team news, how to watch - We Ain't Got No History","description":"Football is back!","url":"https://weaintgotnohistory.sbnation.com/2022/9/30/23381049/crystal-palace-chelsea-live-stream-time-tv-channels-how-to-watch-premier-league-online","urlToImage":"https://cdn.vox-cdn.com/thumbor/78d3HzBxYLBd2jOh1bFBFmAkwwI=/0x0:1449x759/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24070223/1423897342.jpg","publishedAt":"2022-09-30T22:38:13Z","content":"September turns to October and in a way, it feels like were starting the season anew, after two weeks of international break following two weekends of royal mourning. Theres even a new head coach in … [+3469 chars]"}]}
 
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
    
  
      // let sports = await data.json();
      props.progress(80);
  
  
      props.progress(90);
      setloading(true);
      setarticles(sports.articles);
      settotalResults(sports.totalResults);
  
      // this.setState({
      //   articles: sports.articles,
      //   totalArticles: sports.totalResults,
      //   loading: false,
      // });
      props.progress(100);
    };
    useEffect(() => {
      updatenews();
    }, []);
  
    
    // const fetchMoreData = async () => {
     
   
  
      
    //   setarticles(articles.concat(sports.articles));
    //   settotalResults(sports.totalResults);
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
        <div className="container center">
         <button className="navbar-toggler btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Back to top
    </button></div>
    <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div>
      </div>
    );
  };
  Sports.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  Sports.defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };
   
    
