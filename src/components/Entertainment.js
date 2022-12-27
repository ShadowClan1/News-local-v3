import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Entertainment(props) {
  const entertainment = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"Bollywood Hungama"},"author":"Bollywood Hungama","title":"Richa Chadha and Ali Fazal look regal in custom Kresha Bajaj and Abu Jani and Sandeep Khosla attire as they host their Delhi cocktail and reception - Bollywood Hungama","description":"Richa Chadha and Ali Fazal look regal in custom Kresha Bajaj and Abu Jani and Sandeep Khosla attire as they host their Delhi cocktail and reception Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb New…","url":"https://www.bollywoodhungama.com/news/features/richa-chadha-ali-fazal-look-regal-custom-kresha-bajaj-abu-jani-sandeep-khosla-attire-host-delhi-cocktail-reception/","urlToImage":"https://stat2.bollywoodhungama.in/wp-content/uploads/2022/10/Richa-Chadha-and-Ali-Fazal-look-regal-in-custom-Kresha-Bajaj-and-Abu-Jani-and-Sandeep-Khosla-attire-as-they-host-their-Delhi-cocktail-and-reception-3.jpg","publishedAt":"2022-10-01T09:49:00Z","content":"Another Bollywood pair has tied the knot. After several years of courtship, Richa Chadha and Ali Fazal got married in an intimate ceremony but are hosting their festivities this week. Their Delhi coc… [+2352 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Viral Video: Woman Touches Feet Of Reel Life Ram Arun Govil - NDTV","description":"The TV series Ramayan, written, produced and directed by Ramanand Sagar, first aired on Doordarshan in 1987 and acquired a cult status over the years.","url":"https://www.ndtv.com/india-news/viral-video-woman-touches-feet-of-reel-life-ram-arun-govil-3394578","urlToImage":"https://c.ndtvimg.com/2022-10/qd2ovn_the-video-is-trending-big-time-on-social-media_625x300_01_October_22.jpg","publishedAt":"2022-10-01T07:56:51Z","content":"The actor had a brief conversation with the woman, despite his discomfort.\r\nDuring the 1990s, Ramanand Sagar's Ramayan experienced tremendous success. The actors who played Lord Ram, Laxman, and Sita… [+1747 chars]"},{"source":{"id":null,"name":"123telugu.com"},"author":null,"title":"RRR US Imax screening- Crazy response - 123telugu","description":"Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets","url":"https://www.123telugu.com/mnews/rrr-us-imax-screening-crazy-response.html","urlToImage":"https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif","publishedAt":"2022-10-01T07:32:00Z","content":"The global blockbuster, RRR, starring Ram Charan and Jr NTR, was screened at the biggest IMAX theater in the world. As we reported earlier, the 10th edition of Beyond Fest kickstarted on Friday. \r\nTh… [+427 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Ajay Devgn Has A Special Message For His \"Fellow Best Actor Award Winner\" Suriya - NDTV","description":"Ajay Devgn and Suriya have shared the Best Actor award at the 68th National Film Awards","url":"https://www.ndtv.com/entertainment/ajay-devgn-has-a-special-message-for-his-3394252","urlToImage":"https://c.ndtvimg.com/2022-10/db8knje_ajay-devgn_625x300_01_October_22.jpg","publishedAt":"2022-10-01T07:28:39Z","content":"Ajay Devgn shared this image. (courtesy: Netflix)\r\nAjay Devgn has shared a special post for his fellow best actor award winner Suriya. Yes, the picture is from the 68th National Film Awards ceremony,… [+1659 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Aishwarya Rai Bachchan Shares Heartwarming Pictures With Mani Ratnam - NDTV","description":"Mani Ratnam's Ponniyin Selvan: I  marks Aishwarya Rai Bachchan's return to the big screen","url":"https://www.ndtv.com/entertainment/nothing-just-aishwarya-rai-bachchan-and-mani-ratnam-striking-a-pose-for-the-lens-3394463","urlToImage":"https://c.ndtvimg.com/2022-10/r2n56tbo_aishwarya_625x300_01_October_22.jpg","publishedAt":"2022-10-01T07:24:23Z","content":"Aishwarya Rai Bachchan shared this image. (courtesy: aishwaryaraibachchan_arb)\r\nNew Delhi: Mani Ratnam's much-awaited magnum opus Ponniyin Selvan: I was released on September 30. The film is based on… [+2043 chars]"},{"source":{"id":null,"name":"Koimoi"},"author":"Koimoi.com Team","title":"Vikram Vedha Box Office Day 2 Advance Booking: Hrithik Roshan & Saif Ali Khan Starrer Witnesses A Much-Needed Growth! - Koimoi","description":"Vikram Vedha closed its day 1 advance booking at 3 crores gross (without blocked tickets) & now is showing growth for day 2. Read on!","url":"https://www.koimoi.com/?p=929071","urlToImage":"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/vikram-vedha-box-office-day-2-advance-booking-update-0001.jpg","publishedAt":"2022-10-01T07:13:42Z","content":"Vikram Vedha Box Office Day 2 Advance Booking(Pic Credit: Poster)\r\nAfter not going up to the mark in advance booking on opening day, Vikram Vedha has picked up on day 2. Starring Hrithik Roshan and S… [+1792 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Entertainment Desk","title":"Ponniyin Selvan I BO: Film earns ₹80 crore, is best opening Tamil movie of 2022 - Hindustan Times","description":"Ponniyin Selvan I box office: Mani Ratnam's period drama starring Karthi, Vikram, Aishwarya Rai, Trisha Krishnan, and Jayam Ravi, has registered the best opening day by a Tamil film this year.","url":"https://www.hindustantimes.com/entertainment/tamil-cinema/ponniyin-selvan-i-bo-film-earns-40-crore-is-best-opening-tamil-movie-of-2022-101664592920462.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/Aishwarya_Rai-Vikram-Ponniyin_Selvan_I-Mani_Ratnam_1646226749035_1664605860851_1664605860851.jpg","publishedAt":"2022-10-01T06:46:43Z","content":"Mani Ratnam's epic period drama, Ponniyin Selvan I, finally opened in theatres on Friday to a thunderous welcome. As per the makers, the film has made around 80 crore gross worldwide on its opening d… [+1618 chars]"},{"source":{"id":null,"name":"Telugu360.com"},"author":null,"title":"Exclusive: Pawan Kalyan’s next Launch News - Telugu360","description":"Pawan Kalyan's next Launch News, Pawan Kalyan Theri movie updates","url":"https://www.telugu360.com/exclusive-pawan-kalyans-next-launch-news/","urlToImage":"https://www.telugu360.com/wp-content/uploads/2022/06/Pawan-Kalyan.jpg","publishedAt":"2022-10-01T06:06:23Z","content":"Powerstar Pawan Kalyan has given his nod for Saaho fame Sujeeth for a mass entertainer. Though he was asked to direct the remake of Theri first, the plans got changed. Sujeeth worked on a script and … [+1019 chars]"},{"source":{"id":null,"name":"India TV News"},"author":"Reported by Chirag Bejan Daruwalla","title":"October Horoscope 2022: With Dussehra & Diwali, Know monthly prediction of all zodiac signs - India TV News","description":"October Horoscope 2022: Read below to know the astrological prediction for Leo, Virgo, Libra, Scorpio, Pisces, Gemini, Sagittarius, and other zodiac signs.","url":"https://www.indiatvnews.com/astrology/october-horoscope-2022-with-dussehra-diwali-know-monthly-astology-of-all-zodiac-signs-2022-10-01-812834","urlToImage":"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/10/october-horoscope-2022-1664604350.jpg","publishedAt":"2022-10-01T05:50:20Z","content":"October Horoscope 2022: Wondering what the planets are planning for your love, financial and career life this month? With Dussehra and Diwali festivities and the retrograde of Mercury, Mars, Saturn a… [+7241 chars]"},{"source":{"id":null,"name":"Greatandhra.com"},"author":"Venkat","title":"Pics: Raghavendra Rao's Discovery Slims Down.. - Greatandhra","description":"With a pleasant navel show and sensuous South Indian style in exposing the feminine glory, Sree Leela turned the heads of all age groups with Pelli SandaD.","url":"https://www.greatandhra.com/movies/news/pics-raghavendra-raos-discovery-slims-down-124174","urlToImage":"https://www.greatandhra.com/newphotos10/mrnal_new111664602664.jpeg","publishedAt":"2022-10-01T05:37:44Z","content":"Sree Leela is the new age Raghavendra Rao's heroine. With a pleasant navel show and sensuous South Indian style in exposing the feminine glory, Sree Leela turned the heads of all age groups with Pell… [+610 chars]"},{"source":{"id":null,"name":"Greatandhra.com"},"author":"Vamsi","title":"Pic Talk: Nani's Deadly Rugged Look From Dasara.. - Greatandhra","description":"Nani aced guy next door characters in numerous films. However, he came out of his comfort zone and is playing a rustic role for the first time in Dasara.","url":"https://www.greatandhra.com/movies/news/pic-talk-nanis-deadly-rugged-look-from-dasara-124173","urlToImage":"https://www.greatandhra.com/newphotos10/dasaraa11664602075.jpeg","publishedAt":"2022-10-01T05:27:55Z","content":"Nani aced guy next door characters in numerous films. However, he came out of his comfort zone and is playing a rustic role for the first time in Dasara.\r\nThis character is not just about uttering hi… [+889 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Entertainment Desk","title":"Alia Bhatt shares glimpse from photoshoot for her maternity clothes brand. Watch - Hindustan Times","description":"Alia Bhatt has shared a glimpse of the maternity clothes from her soon-to-be-launched clothing brand for pregnant women. She shared it in a video on Instagram. | Bollywood","url":"https://www.hindustantimes.com/entertainment/bollywood/alia-bhatt-shares-glimpse-from-photoshoot-for-her-maternity-clothes-brand-watch-101664599231194.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/alia_bhatt_1664600064151_1664600064305_1664600064305.jpg","publishedAt":"2022-10-01T05:19:32Z","content":"Alia Bhatt has given a sneak-peek into the photoshoot she did for her soon-to-be launched maternity wear brand. The actor shared a video, which shows her posing in various pregnancy outfits. The acto… [+1589 chars]"},{"source":{"id":null,"name":"India Today"},"author":null,"title":"Salman Khan's body double Sagar Pandey passes away while working out at the gym. Actor posts heartfelt condolence - India Today","description":"Salman Khan's body double Sagar Pandey breathed his last while working out at the gym. He was a part of over 50 films of the superstar.","url":"https://www.indiatoday.in/movies/celebrities/story/salman-khan-s-body-double-sagar-pandey-passes-away-while-working-out-at-the-gym-actor-posts-heartfelt-condolence-2007038-2022-10-01","urlToImage":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/Untitled_design_-_2022-10-01T1-647x363.png?yPfrffPWJ0piK.yUoMsJBVnnMgY6u1hf","publishedAt":"2022-10-01T05:04:12Z","content":"Salman Khans body double Sagar Pandey passed away while working out at the gym on September 30. He had worked with the superstar in over 50 of his films. Salman posted a photo with Sagar from his 201… [+1452 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Abhimanyu Mathur","title":"Ayan Mukerji reacts to those casting doubts on Brahmastra's box office success - Hindustan Times","description":"Brahmastra director Ayan Mukerji talks about the success of the film, learnings from criticism of the film’s dialogue and his reaction to those doubting the film’s box office success. | Bollywood","url":"https://www.hindustantimes.com/entertainment/bollywood/ayan-mukerji-reacts-to-those-casting-doubts-on-brahmastra-s-box-office-success-101664598972919.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/Ayan_Mukerji_Brahmastra_1664599253177_1664599284987_1664599284987.jpg","publishedAt":"2022-10-01T04:44:47Z","content":"Brahmastra Part One- Shiva has grossed over 400 crore globally. Thats a fact verified by multiple sources. No Hindi film has made as much money in the last three years. And yet, there are many that s… [+3659 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Krishna Priya Pallavi","title":"Bella Hadid gets dress spray-painted on her body in real-time during Coperni show at Paris Fashion Week: All video, pics - Hindustan Times","description":"Bella Hadid walked for Coperni's Spring 2023 show at the Paris Fashion Week in a dress spray-painted on her in real-time on the runway. The iconic moment left the internet stunned. Check out the full video of creating Bella Hadid's off-the-shoulder dress and …","url":"https://www.hindustantimes.com/lifestyle/fashion/bella-hadid-gets-dress-spray-painted-on-her-body-in-real-time-during-coperni-show-at-paris-fashion-week-all-video-pics-101664597528570.html","urlToImage":"https://images.hindustantimes.com/img/2022/10/01/1600x900/bella_hadid_AFP_1664598037511_1664598042402_1664598042402.jpg","publishedAt":"2022-10-01T04:24:14Z","content":"The Paris-based French womenswear label Coperni had one of the most memorable fashion moments last night as they displayed their Spring 2023 collection at the ongoing Paris Fashion Week. Supermodel B… [+2319 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Queen Elizabeth Died Of \"Old Age\", But What Does That Really Mean? - NDTV","description":"Queen Elizabeths newly released death certificate contains just two curious words under her cause of death  old age.","url":"https://www.ndtv.com/world-news/queen-elizabeths-death-certificate-says-died-of-old-age-but-what-does-that-really-mean-3394154","urlToImage":"https://c.ndtvimg.com/2022-09/34h9ktcg_queen-elizabeth-funeral-afp_625x300_19_September_22.jpg","publishedAt":"2022-10-01T04:08:22Z","content":"Queen Elizabeth's death certificate lists 'old age' as the cause of death.\r\nMelbourne, Australia: Queen Elizabeth's newly released death certificate contains just two curious words under her cause of… [+3684 chars]"},{"source":{"id":null,"name":"Tellybest.com"},"author":null,"title":"Ghum Hai Kisi Ke Pyaar Mein (GHKKPM) 3rd October 2022 Written Update - Tellybest.com","description":"Ghum Hai Kisi Ke Pyaar Mein 3rd October 2022 Written Update: GHKKPM written update Today's Ghum Hai Kisi Ke Pyar Mein 3rd October 2022 episode starts with Patralekha selecting jewellery at the shop when Sai walks into the shop as well. Seeing Virat","url":"https://www.tellybest.com/written-update/ghum-hai-kisi-ke-pyaar-mein-ghkkpm-3rd-october-2022-written-update","urlToImage":null,"publishedAt":"2022-10-01T03:10:22Z","content":"Ghum Hai Kisi Ke Pyaar Mein 3rd October 2022 Written Update: GHKKPM written update\r\nToday's Ghum Hai Kisi Ke Pyar Mein 3rd October 2022 episode starts with Patralekha selecting jewellery at the shop … [+852 chars]"},{"source":{"id":null,"name":"News18"},"author":"Entertainment Bureau","title":"Deepika Padukone, Ranveer Singh Squash Separation Rumours With Their Flirty Chat On Instagram - News18","description":"Deepika Padukone and Ranveer Singh seemingly shut down separation rumours with their recent interaction on Instagram.","url":"https://www.news18.com/news/movies/deepika-padukone-ranveer-singh-squash-separation-rumours-with-their-flirty-chat-on-instagram-6076237.html","urlToImage":"https://images.news18.com/ibnlive/uploads/2022/10/deepika-ranveer-divorce-separation--166459245316x9.jpg","publishedAt":"2022-10-01T02:50:00Z","content":"Deepika Padukone and Ranveer Singh seem to have put the separation rumours to an end with their recent Instagram interaction. For the unversed, a tweet and reports went viral claiming that there was … [+1692 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Best of September on Raw and SmackDown: WWE Top 10, Sept. 30, 2022 - WWE","description":"WWE Top 10 looks back at the most jaw-dropping moments from September on Raw and SmackDown featuring Braun Strowman's return, the dominance of Roman Reigns a...","url":"https://www.youtube.com/watch?v=llEJn7rRO4I","urlToImage":"https://i.ytimg.com/vi/llEJn7rRO4I/maxresdefault.jpg","publishedAt":"2022-10-01T02:46:48Z","content":null},{"source":{"id":null,"name":"Sportskeeda"},"author":"Jojo","title":"WWE SmackDown Results: Top star attacks Ronda Rousey with baseball bat; multiple White Rabbit hints dropped - Winners, Recap, Grades, and Highlights (September 30, 2022) - Sportskeeda","description":"Sami Zayn and Solo Sikoa kicked off SmackDown as we headed for the match between them and the team of Madcap Moss & Ricochet.","url":"https://www.sportskeeda.com/wwe/wwe-friday-night-smackdown-results-september-30th-2022-winners-recap-grades-highlights","urlToImage":"https://staticg.sportskeeda.com/editor/2022/10/33ddd-16645911159417-1920.jpg","publishedAt":"2022-10-01T02:37:00Z","content":"Sami Zayn and Solo Sikoa kicked off SmackDown as we headed for the match between them and the team of Madcap Moss &amp; Ricochet.\r\nWWE SmackDown Results (September 30th, 2022): The Bloodline vs. Madc… [+6577 chars]"}]}
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

    // let entertainment = await data.json();
    props.progress(80);


    props.progress(90);
    setloading(true);
    setarticles(entertainment.articles);
    settotalResults(entertainment.totalResults);

    // this.setState({
    //   articles: entertainment.articles,
    //   totalArticles: entertainment.totalResults,
    //   loading: false,
    // });
    props.progress(100);
  };
  useEffect(() => {
    updatenews();
  }, []);

  const fetchMoreData = async () => {


    setarticles(articles.concat(entertainment.articles));
    settotalResults(entertainment.totalResults);
    setloading(false);
    setpage(page + 1);
  };

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
      <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div></div>
    </div>
  );
}
Entertainment.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
Entertainment.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
};
