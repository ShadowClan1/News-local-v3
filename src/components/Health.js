import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
export default function Health(props) {
  const health = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"Women's Health"},"author":"Emma Gritt","title":"A nutritional therapist reveals how menopause affects the skin and hair - Women's Health UK","description":"Alice Mackintosh tackles the most common beauty issues that spring up as women enter peri-menopause and onwards.","url":"https://www.womenshealthmag.com/uk/beauty/a41468334/menopause-affects-skin-hair/","urlToImage":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/menopause-equii-london-alice-mackintosh-1664567830.png?crop=1xw:0.9558232931726908xh;center,top&resize=1200:*","publishedAt":"2022-10-01T07:39:36Z","content":"October is World Menopause Month, so we have called upon Alice Mackintosh, co-founder and nutritionist at Equi London, to answer some of the most common beauty questions associated with 'the change'.… [+11396 chars]"},{"source":{"id":null,"name":"Herzindagi.com"},"author":"Bhavishya Bir","title":"IVF Diet: Role Of Diet And How Nutrients Play An Important Role - HerZindagi English","description":"Diet plays an important role in a healthy IVF process.","url":"https://www.herzindagi.com/diet-nutrition/ivf-diet-what-to-consume-article-209602","urlToImage":"https://images.herzindagi.info/image/2022/Oct/ivf-diet-social.jpg","publishedAt":"2022-10-01T07:14:35Z","content":"Besides a number of gynaecological and systemic diseases affecting a woman's fertility, lifestyle factors and environmental conditions such as stressful jobs, unbalanced nutrition and unhealthy diet … [+4313 chars]"},{"source":{"id":null,"name":"Newswaali.com"},"author":null,"title":"Dewas District Program Officer Raylam Baghel's son died of dengueNews WAALI - News Waali","description":"","url":"https://newswaali.com/dewas-district-program-officer-raylam-baghels-son-died-of-dengue-news-waali/","urlToImage":"https://www.naidunia.com/Resources/naidunia/images/naidunia.jpg","publishedAt":"2022-10-01T06:41:06Z","content":"Devas. 18-year-old Prateek Baghel, son of District Program Officer of Women and Child Development Department Relam Baghel, died on Friday night while being treated for dengue at Bombay Hospital in In… [+909 chars]"},{"source":{"id":null,"name":"Medical Dialogues"},"author":"Dr. Kamal Kant Kohli","title":"Understanding the Scope of Levofloxacin in Lower Respiratory Tract Infections - Medical Dialogues","description":"Lower respiratory tract infections  (LRTIs) are infections of the trachea, bronchi, and lung...","url":"https://medicaldialogues.in/pulmonology/perspective/understanding-the-scope-of-levofloxacin-in-lower-respiratory-tract-infections-99966","urlToImage":"https://medicaldialogues.in/h-upload/2022/10/01/186772-levofloxacin-in-lower-respiratory-tract-infections.jpg","publishedAt":"2022-10-01T06:39:27Z","content":"Lower respiratory tract infections (LRTIs) are infections of the trachea, bronchi, and lung parenchyma. They are the leading cause of mortality and morbidity throughout the world. They are the fifth … [+13968 chars]"},{"source":{"id":null,"name":"Forbes"},"author":"Bruce Y. Lee","title":"Ultra-Processed Foods Associated With Colorectal Cancer, Premature Death, 2 New Studies Show - Forbes","description":"This ain't ultra-good news considering that ultra-processed food and beverages now consist of over half of the calories that Americans consume.","url":"https://www.forbes.com/sites/brucelee/2022/10/01/ultra-processed-foods-associated-with-colorectal-cancer-premature-death-2-new-studies-show/","urlToImage":"https://imageio.forbes.com/specials-images/imageserve/6337e2a82cfe9dd0aa57e042/0x0.jpg?format=jpg&width=1200","publishedAt":"2022-10-01T06:19:20Z","content":"A study found that from 2001-2002 to 2017-2018 ultra-processed food and beverage consumption grew ... [+] from 53.5 percent of calories in Americans' diets to 57 percent. (Photo: Getty)\r\ngetty\r\nUltra… [+6514 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"PCOS And Other Related Lifestyle Disorders: How Holistic Living Can Provide A Better Lifestyle? | TheHealt - TheHealthSite","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMinAFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL3Bjb3MvcGNvcy1hbmQtb3RoZXItcmVsYXRlZC1saWZlc3R5bGUtZGlzb3JkZXJzLWhvdy1ob2xpc3RpYy1saXZpbmctY2FuLXByb3ZpZGUtYS1iZXR0ZXItbGlmZXN0eWxlLTkxMjYzNS_SAaABaHR0cHM6Ly93d3cudGhlaGVhbHRoc2l0ZS5jb20vZGlzZWFzZXMtY29uZGl0aW9ucy9wY29zL3Bjb3MtYW5kLW90aGVyLXJlbGF0ZWQtbGlmZXN0eWxlLWRpc29yZGVycy1ob3ctaG9saXN0aWMtbGl2aW5nLWNhbi1wcm92aWRlLWEtYmV0dGVyLWxpZmVzdHlsZS05MTI2MzUvYW1wLw?oc=5","urlToImage":null,"publishedAt":"2022-10-01T06:08:00Z","content":null},{"source":{"id":null,"name":"The Indian Express"},"author":"Lifestyle Desk","title":"'Workout whenever possible': Khushbu Sundar shares fitness mantra - The Indian Express","description":"\"Goal accomplished does not mean you stop giving your best. 21 kgs lesser only means work harder not to gain all back,\" she wrote","url":"https://indianexpress.com/article/lifestyle/fitness/khushbu-sundar-fitness-mantra-workout-walking-weightloss-benefits-7937285/","urlToImage":"https://images.indianexpress.com/2022/05/khushbu-sundar_200_insta.jpg","publishedAt":"2022-10-01T05:55:45Z","content":"Once you have achieved your desired fitness goal, you need to maintain the momentum and be dedicated to your routine. This helps ensure you continue to reap benefits. Actor and politician Khushbu Sun… [+2509 chars]"},{"source":{"id":null,"name":"The Tribune India"},"author":"The Tribune India","title":"[INNOVATION] Quantum Keto Gummies Reviews: SCAM ALERT, Get Rid of Belly Fat! - The Tribune India","description":"How often have you wished there was a way to get into ketosis that didn't require you to stick to a ketogenic diet like a religious zealot if you lived in the UK, Canada, US, or Australia? If you answered \"yes,\" you've probably kept a food journal and counted…","url":"https://www.tribuneindia.com/news/brand-connect/innovation-quantum-keto-gummies-reviews-scam-alert-get-rid-of-belly-fat-437163","urlToImage":"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/10/2022_10$largeimg_926023233.jpg","publishedAt":"2022-10-01T05:51:00Z","content":"Quantum Keto Gummies Review:\r\nHow often have you wished there was a way to get into ketosis that didn't require you to stick to a ketogenic diet like a religious zealot if you lived in the UK, Canada… [+7699 chars]"},{"source":{"id":null,"name":"India.com"},"author":"Tanya Trivedi","title":"Another monkey virus may be on verge of infecting humans: Researchers - Zee News","description":"The global health community might potentially avoid another pandemic by monitoring for arteriviruses in both animals and humans now, scientists suggested.","url":"https://zeenews.india.com/health/another-monkey-virus-may-be-on-verge-of-infecting-humans-researchers-2516526","urlToImage":"https://english.cdn.zeenews.com/sites/default/files/2022/10/01/1097231-untitled-design-61.png","publishedAt":"2022-10-01T05:03:49Z","content":"According to new University of Colorado Boulder research published online Sept. 30 in the journal Cell, an unknown family of viruses that is currently prevalent in wild African primates and known to … [+4275 chars]"},{"source":{"id":null,"name":"EastMojo"},"author":"Press Trust of India","title":"New drug may turn Covid virus against itself, fight variants - EastMojo","description":"New Delhi: Scientists in the US have developed a new drug that can turn SARS-CoV-2 against itself, and prevent the deadly virus from infecting humans. The","url":"http://www.eastmojo.com/coronavirus-updates/2022/10/01/new-drug-may-turn-covid-virus-against-itself-fight-variants/","urlToImage":"https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2020/05/vaccination_1215279_1920.jpg?fit=1920%2C1280&ssl=1","publishedAt":"2022-10-01T04:50:00Z","content":"New Delhi: Scientists in the US have developed a new drug that can turn SARS-CoV-2 against itself, and prevent the deadly virus from infecting humans.\r\nThe researchers from The Scripps Research Insti… [+3318 chars]"},{"source":{"id":null,"name":"Firstpost"},"author":"Akhileshwar Sahay","title":"Book Review: 'CROCHET - The Gordian World of Tahir Khan' and children are NOT all right - Firstpost","description":"Raman Agarwal's 'CROCHET - The Gordian World of Tahir Khan' lifts the veil from the societally entrenched unscientific and false belief that children are naturally insulated against mental illnesses just because of their young age through his protagonist Tahir","url":"https://www.firstpost.com/art-and-culture/book-review-crochet-the-gordian-world-of-tahir-khan-and-children-are-not-all-right-11367291.html","urlToImage":"https://images.firstpost.com/wp-content/uploads/2022/10/crochet-alternate-image.jpg","publishedAt":"2022-10-01T04:47:56Z","content":"CROCHET – The Gordian World of Tahir Khan  the debut novel by 32-year-old Raman Agarwal deserves accolades for its very topical theme. One that is shrouded in ignorance and all-pervasive stigma of th… [+21681 chars]"},{"source":{"id":null,"name":"Newswaali.com"},"author":null,"title":"Dengue: Antibiotics will not be available without prescription, strict measures by the state to prevent children playing with dengue fever. Antibiotics and other medications are not available without a prescriptionNews WAALI - News Waali","description":"","url":"https://newswaali.com/dengue-antibiotics-will-not-be-available-without-prescription-strict-measures-by-the-state-to-prevent-children-playing-with-dengue-fever-antibiotics-and-other-medications-are-not-available-without/","urlToImage":"https://images.tv9bangla.com/wp-content/uploads/2022/10/Antibiotic-and-other-medicine-are-not-available-without-prescription.jpg","publishedAt":"2022-10-01T04:41:29Z","content":"Despite the initiation of the puja, no one has been cured of dengue. He stopped the sale of over-the-counter antibiotics. Pharmacists will no longer be able to sell antibiotics and fever medicines wi… [+2041 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":null,"title":"Expresso Health Updates Of The Week - The Indian Express","description":"In this Expresso Health Updates Of The Week bulletin, we look at Bollywood Actor Ananya Panday’s fitness goals as she shared a selfie after acing 108 Surya Namaskars or Sun Salutations. We discuss why having a skincare routine for men is important and how str…","url":"https://indianexpress.com/audio/expresso-entertainment-update/expresso-health-updates-of-the-week-12-8156155-8169292-8179156-8183307/8183307/","urlToImage":"https://images.indianexpress.com/2022/04/Expresso-health-1200x630-1.jpg","publishedAt":"2022-10-01T04:00:05Z","content":"You are listening to the Expresso Health Update. Here is the latest news from the world of Health brought to you by The Indian Express.\"Let us begin todays bulletin with news on Anshula Kapoor who li… [+5572 chars]"},{"source":{"id":null,"name":"Healthshots.com"},"author":"Aayushi Gupta","title":"High sugar levels can be dangerous for the gut! Know the link between diabetes and digestion - Health shots","description":"There's a strong link between diabetes and digestion. According to an expert, high blood sugar can lead to gut issues including gastroparesis and acid reflux.","url":"https://www.healthshots.com/preventive-care/self-care/diabetes-and-digestion-can-diabetes-lead-to-gut-issues/","urlToImage":"https://images.healthshots.com/healthshots/en/uploads/2022/09/26151313/diabetes-and-digestion1.jpg","publishedAt":"2022-10-01T03:29:00Z","content":"Diabetes is no joke! This is the most prevalent condition in the world. In fact, according to estimates by the World Health Organization (WHO) estimates that more than 420 million people worldwide su… [+5198 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Cucumber For Diabetes: | TheHealthSite.com - TheHealthSite","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL3ZpZGVvcy9jdWN1bWJlci1mb3ItZGlhYmV0ZXMta25vdy1ob3ctY3VjdW1iZXItY29udHJvbC1ibG9vZC1zdWdhci1sZXZlbHMtd2F0Y2gtdmlkZW8tOTEyNTY2L9IBf2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL3ZpZGVvcy9jdWN1bWJlci1mb3ItZGlhYmV0ZXMta25vdy1ob3ctY3VjdW1iZXItY29udHJvbC1ibG9vZC1zdWdhci1sZXZlbHMtd2F0Y2gtdmlkZW8tOTEyNTY2L2FtcC8?oc=5","urlToImage":null,"publishedAt":"2022-10-01T02:31:00Z","content":null},{"source":{"id":null,"name":"IWMBuzz"},"author":"Aarti Tiwari","title":"Cholesterol Can Lead To Heart Attack: Here are Some Tips By Experts To Take Care Of Your Health - IWMBuzz","description":"Check out tips to keep yourself healthy and fit by maintaining your Hypercholesterolemia","url":"https://www.iwmbuzz.com/lifestyle/health-fitness/cholesterol-can-lead-to-heart-attack-here-are-some-tips-by-experts-to-take-care-of-your-health/2022/10/01","urlToImage":"https://www.iwmbuzz.com/wp-content/uploads/2022/09/cholesterol-can-lead-to-heart-attack-here-are-some-tips-by-experts-to-take-care-of-your-health.jpg","publishedAt":"2022-10-01T02:04:59Z","content":"Hypercholesterolemia causes fatness in the arteries of the heart, which results in heart blockage, causing a heart attack. However, this severe problem can be managed through proper intake of food an… [+1638 chars]"},{"source":{"id":null,"name":"News18"},"author":"Lifestyle Desk","title":"International Coffee Day 2022: Coffee Linked to Living Longer, Lower Heart Disease Risk; 7 Reasons Why Coff - News18","description":"International Coffee Day 2022: It is an opportunity for coffee lovers to share their love of the beverage and support farmers whose livelihood depends on the aromatic crop","url":"https://www.news18.com/news/lifestyle/international-coffee-day-2022-coffee-linked-to-living-longer-lower-heart-disease-risk-7-reasons-why-coffee-is-good-for-you-6056611.html","urlToImage":"https://images.news18.com/ibnlive/uploads/2022/09/untitled-design-2022-09-14t124426.023-166313970816x9.png","publishedAt":"2022-10-01T01:40:55Z","content":"INTERNATIONAL COFFEE DAY 2022: Every year 77 Member States of the International Coffee Organization (ICO), dozens of coffee associates, and millions of coffee lovers come together to celebrate their … [+2229 chars]"},{"source":{"id":null,"name":"Dovepress.com"},"author":"Dove Press","title":"Elevated Blood Glucose is Associated with Severe Exacerbation of Chron | COPD - Dove Medical Press","description":"Elevated Blood Glucose is Associated with Severe Exacerbation of Chronic Obstructive Pulmonary Disease","url":"https://www.dovepress.com/elevated-blood-glucose-is-associated-with-severe-exacerbation-of-chron-peer-reviewed-fulltext-article-COPD","urlToImage":"https://www.dovepress.com/assets/img/addon/og_logo.png","publishedAt":"2022-10-01T00:39:06Z","content":"Introduction\r\nChronic obstructive pulmonary disease (COPD) is characterized by progressive partially reversible airflow obstruction and airways inflammation.1 It is the third leading cause of mortali… [+15440 chars]"},{"source":{"id":null,"name":"KCRW"},"author":"https://www.facebook.com/kcrw","title":"Can nutrition treat and prevent mental disorders? | Life Examined - KCRW","description":"Psychologist and author Julia Rucklidge discusses the benefits of a nutrient-rich diet in treating mental health disorders and explains the problems of just using medication as a front line defense.","url":"https://www.kcrw.com/culture/shows/life-examined/nutrition-vitamins-treatment-mental-health-junk-food/julia-rucklidge-brain-mental-health-nutrition-vitamins-food","urlToImage":"https://www.kcrw.com/culture/shows/life-examined/nutrition-vitamins-treatment-mental-health-junk-food/julia-rucklidge-brain-mental-health-nutrition-vitamins-food/@@images/rectangular_image/page-header?v=1664583791.16","publishedAt":"2022-10-01T00:24:32Z","content":"When it comes to staying fit and healthy, theyre a few established practices: a good night's sleep, moderate exercise, and healthy food. Poor eating habits too many junk snacks loaded with sugar and … [+2017 chars]"},{"source":{"id":null,"name":"Newswise"},"author":"Fundação de Amparo à Pesquisa do Estado de São Paulo","title":"Study reveals main target of SARS-CoV-2 in brain and describes effects of virus on nervous system - Newswise","description":"A Brazilian study published in the journal PNAS describes some of the effects infection by SARS-CoV-2 can have on the central nervous system.","url":"https://www.newswise.com/coronavirus/study-reveals-main-target-of-sars-cov-2-in-brain-and-describes-effects-of-virus-on-nervous-system","urlToImage":"https://www.newswise.com/assets/new/img/newswise-logo-square.jpg","publishedAt":"2022-09-30T20:55:00Z","content":"Newswise —  A Brazilian study published in the journal PNAS describes some of the effects infection by SARS-CoV-2 can have on the central nervous system. A preliminary version (not yet peer-reviewed)… [+14704 chars]"}]}
 
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
  

    // let health = await data.json();
    props.progress(80);


    props.progress(90);
    setloading(true);
    setarticles(health.articles);
    settotalResults(health.totalResults);

    // this.setState({
    //   articles: health.articles,
    //   totalArticles: health.totalResults,
    //   loading: false,
    // });
    props.progress(100);
  };
  useEffect(() => {
    updatenews();
  }, []);

  
  const fetchMoreData = async () => {
   


    
    setarticles(articles.concat(health.articles));
    settotalResults(health.totalResults);
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
        </div>
    <div className="container center d-flex justify-content-center">
      <button className="btn btn-dark center "  onClick={()=>{window.scrollTo(0,0)}} > 	&#8593; Scroll to Top
    </button>
         </div>
    </div>
  );
};
Health.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
Health.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
};
 
  
