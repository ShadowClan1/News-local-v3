import React from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Science(props) {
const science = {"status":"ok","totalResults":52,"articles":[{"source":{"id":null,"name":"Tech Explorist"},"author":"Pranjal Mehar","title":"Moon asteroid impacts mirrored on Earth, study - Tech Explorist","description":"Major impact events on Earth were not stand-alone events.","url":"https://www.techexplorist.com/moon-asteroid-impacts-mirrored-earth-study/54062/","urlToImage":"https://www.techexplorist.com/wp-content/uploads/2022/10/Change-5-return-capsule.jpg","publishedAt":"2022-10-01T07:43:13Z","content":"Impact glasses found in lunar soils provide a possible window into the impact history of the inner solar system. However, their use for precise reconstruction of this history is limited by an incompl… [+2798 chars]"},{"source":{"id":null,"name":"Free Press Journal"},"author":"FPJ Web Desk","title":"A gift to Stargazer; NASAs flying telescope shares images of celestial objects - Free Press Journal","description":"","url":"https://www.freepressjournal.in/world/a-gift-to-stargazer-nasas-flying-telescope-shares-images-of-celestial-objects","urlToImage":"https://gumlet.assettype.com/freepressjournal/2022-10/d5b10a29-56d6-4c88-b11e-f2cf0e13073b/Untitled_design__17_.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true","publishedAt":"2022-10-01T07:38:38Z","content":"NASA's Stratospheric Observatory for Infrared Astronomy (SOFIA) embarking on its final flight, on Thursday, US space agency shared some breathtaking cosmos images that were assembled using SOFIA's da… [+1602 chars]"},{"source":{"id":null,"name":"India.com"},"author":"India.com News Desk","title":"NASA's Artemis 1 Moon Mission Looks At New Launch Window | Details Inside - India.com","description":"Now that the hurricane Ian has passed over the Kennedy Space Centre, Artemis 1 rocket team is focusing on new launch window for the much awaited moon mission.","url":"https://www.india.com/science/nasas-artemis-1-moon-mission-looks-at-new-launch-date-window-details-inside-artemis-launch-updates-hurricane-ian-5662548/","urlToImage":"https://static.india.com/wp-content/uploads/2022/09/artemis-twiter.jpg","publishedAt":"2022-10-01T07:35:56Z","content":"NASA Artemis 1 Launch: The much awaited launch of NASAs Artemis 1 moon rocket has left everyone at cliffhanger. With every new launch dat there is anew hope that is ready to lift  off but unavoidable… [+2657 chars]"},{"source":{"id":null,"name":"ThePrint"},"author":"Mohana Basu","title":"Scientists create soft robots that grow like plants - ThePrint","description":"ScientiFix, our weekly feature, offers you a summary of the top global science stories of the week, with links to their sources.","url":"https://theprint.in/scientifix/scientists-create-soft-robots-that-grow-like-plants/1150648/","urlToImage":"https://static.theprint.in/wp-content/uploads/2022/10/A-soft-robot-builds-its-own-solid-body-from-liquid-in-order-to-navigate-a-winding-path..jpg","publishedAt":"2022-10-01T07:12:42Z","content":"Scientists from the University of Minnesota have developed a first-of-its-kind soft robot that can grow like a plant. The study was published in the journal Proceedings of the National Academy of Sci… [+5791 chars]"},{"source":{"id":null,"name":"Tech Explorist"},"author":"Amit Malewar","title":"Astronomers identified the most distant globular clusters ever discovered - Tech Explorist","description":"Researchers help reveal a galaxy sparkling with the universe’s oldest star clusters.","url":"https://www.techexplorist.com/astronomers-identified-distant-globular-clusters-ever-discovered/54056/","urlToImage":"https://www.techexplorist.com/wp-content/uploads/2022/10/first-deep-field.jpg","publishedAt":"2022-10-01T06:49:51Z","content":"The Canadian NIRISS Unbiased Cluster Survey (CANUCS) team discovered the most distant globular clusters ever found using the James Webb Space Telescope (JWST). These dense groups of millions of stars… [+4699 chars]"},{"source":{"id":null,"name":"Devdiscourse"},"author":"Devdiscourse News Desk","title":"Debris ends up on NASA's Ingenuity Mars Helicopter's foot during latest flight | Watch - Devdiscourse","description":"Read more about Debris ends up on NASA's Ingenuity Mars Helicopter's foot during latest flight | Watch on Devdiscourse","url":"https://www.devdiscourse.com/article/science-environment/2198315-debris-ends-up-on-nasas-ingenuity-mars-helicopters-foot-during-latest-flight-watch","urlToImage":"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/13_09_2022_14_01_30_1667593.jpg?width=920&format=jpeg","publishedAt":"2022-10-01T03:38:49Z","content":"NASA's Ingenuity Mars Helicopter and Perseverance Mars 2020 teams are looking into a small piece of foreign object debris (FOD) that ended up on the tiny rotorcraft's foot during its 33rd flight on t… [+2393 chars]"},{"source":{"id":null,"name":"CNBCTV18"},"author":"Anand Singha","title":"15 Of Nasa'S Coolest Inventions That Make Our Lives Easier - CNBCTV18","description":"The National Aeronautics and Space Administration does more than build grandiose telescopes capable of witnessing the dawn of time and launching humans to the moon and back. It's also responsible for Michael Phelps' swimsuit, LASIK surgery, and the selfie. 15…","url":"https://www.cnbctv18.com/photos/science/15-coolest-nasa-inventions-make-our-lives-easier-mattress-swimsuits-14845861.htm","urlToImage":"https://images.cnbctv18.com/wp-content/uploads/2022/09/Untitled-design-2022-09-30T224008.332-1019x573.jpg","publishedAt":"2022-10-01T03:26:00Z","content":"Memory foam | You can thank NASA for the memory foam in your mattress, pillow, couch, work chair, or bike seat. Charles Yost, a NASA-funded aeronautical engineer, designed the material, which was emp… [+4901 chars]"},{"source":{"id":null,"name":"Odishatv.in"},"author":"Odishatv Bureau","title":"Scientists have just discovered a 6th ocean and it's not on earth's surface - OTV News","description":"This brings us one step closer to Jules Verne's idea of an ocean inside the Earth. The difference is that there is no ocean down there, but hydrous rock which, would neither feel wet nor drip water.","url":"https://odishatv.in/news/science/scientists-have-just-discovered-a-6th-ocean-and-it-s-not-on-earth-s-surface-186802","urlToImage":"https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1664594103.webp","publishedAt":"2022-10-01T03:19:49Z","content":"It seems we are closer to Jules Verne’s idea of an ocean inside the Earth. Yes, you heard that right. While you know that 70% of the entire earth's surface is overlaid with water, most of which prese… [+1321 chars]"},{"source":{"id":null,"name":"DailyO"},"author":"Shaurya Thapa","title":"Science Wrap: Artemis delayed, Germany loses a glacier, Juno gets clearest pics of Jupiter's moon - DailyO","description":"This week in science was marked by an expected delay of the Mars mission Artemis 1 given how Hurricane Ian is wreaking havoc in Florida, US. Meanwhile, in outer space, NASA's Juno has captured the clearest photos of Jupiter's moon Europa revealing a smooth, i…","url":"https://www.dailyo.in/news/science-wrap-artemis-delayed-germany-loses-a-glacier-juno-gets-clearest-pics-of-jupiter-moon-37480","urlToImage":"https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202209/while-space-discoveries-continue-to-foster-the-situation-on-planet-earth-worsens-with-climate-change-photo-dailyo300922040749.jpeg","publishedAt":"2022-10-01T02:30:00Z","content":"This week in science was marked by an expected delay of the Mars mission Artemis 1 given how Hurricane Ian is wreaking havoc in Florida, US. Meanwhile, in outer space, NASA's Juno has captured the cl… [+4397 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"SpaceX To Boost Hubble // NASA Smashes Asteroid // Exciting Enceladus Discoveries - Fraser Cain","description":"Humanity moved an asteroid on purpose for the first time in history. Juno flies past Jupiter. A possible mission to boost Hubble, and a mysterious blob is or...","url":"https://www.youtube.com/watch?v=TASLAfXhP18","urlToImage":"https://i.ytimg.com/vi/TASLAfXhP18/maxresdefault.jpg","publishedAt":"2022-10-01T00:23:23Z","content":null},{"source":{"id":null,"name":"NASA"},"author":null,"title":"Coverage Set for NASA's SpaceX Crew-5 Events, Broadcast, Launch - NASA","description":"NASA will provide coverage of the upcoming prelaunch and launch activities for the agency’s SpaceX Crew-5 mission with astronauts to the International Space Station.","url":"https://www.nasa.gov/press-release/coverage-set-for-nasa-s-spacex-crew-5-events-broadcast-launch/","urlToImage":"http://www.nasa.gov/sites/default/files/thumbnails/image/spacex_falcon_9_rocket.jpg","publishedAt":"2022-09-30T22:09:35Z","content":null},{"source":{"id":null,"name":"Bollyinside.com"},"author":"Lisa Jennings","title":"The melting ponds of western Greenland as seen from space - BollyInside","description":"As snow and ice melt on glaciers, water flows through channels and streams and collects in depressions on the surface. These melt pools can significantly","url":"https://www.bollyinside.com/news/the-melting-ponds-of-western-greenland-as-seen-from-space","urlToImage":"https://www.bollyinside.com/wp-content/uploads/2020/08/default-bollyinside.png","publishedAt":"2022-09-30T20:32:33Z","content":"As snow and ice melt on glaciers, water flows through channels and streams and collects in depressions on the surface. These melt pools can significantly reduce the ices ability to reflect sunlight, … [+2170 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"What's Up: October 2022 Skywatching Tips from NASA - NASA Jet Propulsion Laboratory","description":"What are some skywatching highlights in October 2022? Enjoy giant planets Jupiter and Saturn all night throughout the month. Then watch as Mars begins its re...","url":"https://www.youtube.com/watch?v=93IHYbvv7NM","urlToImage":"https://i.ytimg.com/vi/93IHYbvv7NM/maxresdefault.jpg","publishedAt":"2022-09-30T19:57:49Z","content":null},{"source":{"id":null,"name":"News9live.com"},"author":"News9 Staff","title":"New evidence points to liquid water beneath Martian south polar ice cap - News9 LIVE","description":"The findings are in agreement with previous ice-penetrating radar measurements","url":"https://www.news9live.com/science/new-evidence-points-to-liquid-water-beneath-martian-south-polar-ice-cap-199409","urlToImage":"https://media.news9live.com/h-upload/2022/09/30/565005-mars-south-pole-885x432-cropped.jpg","publishedAt":"2022-09-30T19:00:31Z","content":"Precise laser-altimeter observations of the subtle patterns in the topography of the ice cap at the Martian south pole were found to match predictions by computer models on how bodies of subsurface l… [+3200 chars]"},{"source":{"id":null,"name":"Thetechoutlook.com"},"author":"Kaushiki Ghosh","title":"Researchers discovered about 7000 Kgs of human waste on the red planet - The Tech Outlook","description":"Mars always fascinates us, be it in the case of Indian mythology or Hollywood sci-fi movies. Humans first started investigating Mars about 50 years ago, and by the 2030s, NASA plans to send a mission with people to explore the planet for the first ti","url":"https://www.thetechoutlook.com/news/science/researchers-discovered-about-7000-kgs-of-human-waste-on-the-red-planet/","urlToImage":"https://www.thetechoutlook.com/wp-content/uploads/2022/09/Researchers-discovered-about-7000-Kgs-of-human-waste-in-the-red-planet-1.jpg","publishedAt":"2022-09-30T18:16:14Z","content":"Mars always fascinates us, be it in the case of Indian mythology or Hollywood sci-fi movies. Humans first started investigating Mars about 50 years ago, and by the 2030s, NASA plans to send a mission… [+823 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"AFP","title":"NASA, SpaceX study boosting Hubble to extend its lifespan - HT Tech","description":"NASA and SpaceX have agreed to study the feasibility of boosting the Hubble Space Telescope to a higher orbit","url":"https://tech.hindustantimes.com/tech/news/nasa-spacex-study-boosting-hubble-to-extend-its-lifespan-71664529539608.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/09/30/1600x900/James_Webb_Telescope_vs_Hubble_Telescope_GSFC_1639326677178_1664560092700_1664560092700.jpg","publishedAt":"2022-09-30T17:52:42Z","content":"NASA and SpaceX have agreed to study the feasibility of awarding Elon Musk's company a contract to boost the Hubble Space Telescope to a higher orbit, with a goal of extending its lifespan, the US sp… [+2177 chars]"},{"source":{"id":null,"name":"Universe Today"},"author":"Nancy Atkinson","title":"A Computer Algorithm is 88% Accurate in Finding Gravitational Lenses - Universe Today","description":"Astronomers have been assessing a new machine learning algorithm to determine how reliable it is for finding gravitational lenses hidden in images from all sky surveys. This type of AI was used to find about 5,000 potential gravitational lenses, which needed …","url":"https://www.universetoday.com/157870/a-computer-algorithm-is-88-accurate-in-finding-gravitational-lenses/","urlToImage":"https://www.universetoday.com/wp-content/uploads/2022/09/Grav-lenses-Wordpress-image-sm.jpg","publishedAt":"2022-09-30T17:33:37Z","content":"Astronomers have been assessing a new machine learning algorithm to determine how reliable it is for finding gravitational lenses hidden in images from all sky surveys. This type of AI was used to fi… [+3454 chars]"},{"source":{"id":null,"name":"Space.com"},"author":"Robert Lea","title":"Hubble Space Telescope spots protective shield against greedy Milky Way - Space.com","description":"The Milky Way is trying to rip its neighbors apart.","url":"https://www.space.com/hubble-space-telescope-magellanic-corona","urlToImage":"https://cdn.mos.cms.futurecdn.net/AAv6S59LGzKu5o5kWgSYMG-1200-80.png","publishedAt":"2022-09-30T17:00:17Z","content":"An odd shield of supercharged gas protects dwarf galaxies from being ripped apart by the gravitational pull of the Milky Way, 30 years' worth of observations by the Hubble Space Telescope reveal.\r\nFo… [+4938 chars]"},{"source":{"id":null,"name":"Devdiscourse"},"author":"Devdiscourse News Desk","title":"Hubble captures a gorgeous galaxy 130 million light-years from Earth - Devdiscourse","description":"Read more about Hubble captures a gorgeous galaxy 130 million light-years from Earth on Devdiscourse","url":"https://www.devdiscourse.com/article/science-environment/2197914-hubble-captures-a-gorgeous-galaxy-130-million-light-years-from-earth","urlToImage":"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/30_09_2022_21_30_06_3613385.jpg?width=920&format=jpeg","publishedAt":"2022-09-30T16:00:56Z","content":"This latest image from the Hubble Space Telescope shows a lonely spiral galaxy called UGC 9391. The gorgeous spiral galaxy is located a whopping 130 million light-years from Earth in the constellatio… [+1398 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Explore our Home Planet and the Universe With NASA Podcasts - NASA","description":null,"url":"https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Alao9m3E-U","urlToImage":null,"publishedAt":"2022-09-30T15:56:00Z","content":"Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"}]}
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
    
  
      // let science = await data.json();
      props.progress(80);
  
  
      props.progress(90);
      setloading(true);
      setarticles(science.articles);
      settotalResults(science.totalResults);
  
      // this.setState({
      //   articles: science.articles,
      //   totalArticles: science.totalResults,
      //   loading: false,
      // });
      props.progress(100);
    };
    useEffect(() => {
      updatenews();
    }, []);
  
    
    const fetchMoreData = async () => {
    
  
      
      setarticles(articles.concat(science.articles));
      settotalResults(science.totalResults);
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
  Science.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  Science.defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };