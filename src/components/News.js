import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {
    // dynamically fetchapi use korar age kichu json copy kore chalacchilam
    // articles = [
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Space.com"
    //     },
    //     "author": "Robert Lea",
    //     "title": "July's Full Buck Moon, the 1st of 4 supermoons this summer, rises tonight - Space.com",
    //     "description": "The full moon on Monday, July 3, will mark a series of four supermoons in a row.",
    //     "url": "https://www.space.com/july-full-buck-moon-supermoons-summer",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/MvxWaGY729S4uYmx4fUmwB-180-80.jpg",
    //     "publishedAt": "823-07-03T12:39:54Z",
    //     "content": "July's full moon, also known as the Buck Moon, rises tonight (July 3) as a supermoon.  An exciting event for skywatchers, supermoons see the lunar disk appearing larger and brighter in the night s… [+387 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "BBC News"
    //     },
    //     "author": "https://www.facebook.com/bbcnews",
    //     "title": "France riots ease as mayors hold anti-violence rally - BBC",
    //     "description": "French mayors denounce extreme violence of the protests which swept the country for almost a week.", 
    //     "url": "https://www.bbc.com/news/world-europe-88084877",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/873/production/_130270380_gettyimages-1379794217.jpg",
    //     "publishedAt": "823-07-03T11:8:35Z",
    //     "content": "Riots in France appear to be calming, after five days of violent protests in response to the shooting of teenager Nahel M during a police traffic stop. Sunday night saw violence subside and fewer ar… [+3293 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Mitch McCluskey, Jillian Sykes, Raja Razek",
    //     "title": "Roller coaster with crack in support pillar set to be investigated today at Carowinds in North Carolina - CNN",
    //     "description": "Inspectors are due at a North Carolina amusement park Monday as they continue investigating a roller coaster shuttered since shortly after a dad spotted a crack at the top of one of its steel support pillars.",
    //     "url": "https://www.cnn.com/travel/article/roller-coaster-carowinds-crack-investigation/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230701123027-fury-325-roller-coaster-crack.jpg?c=18x9&q=w_800,c_fill",
    //     "publishedAt": "823-07-03T11:05:00Z",
    //     "content": "Inspectors are due at a North Carolina amusement park Monday as they continue investigating a roller coaster shuttered since shortly after a dad spotted a crack at the top of one of its steel support… [+808 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Trisha Pasricha, MD",
    //     "title": "Natural light can help you sleep better, and more strategies for rest - The Washington Post",
    //     "description": "Natural light, for at least some parts of the day, can promote better sleep",
    //     "url": "https://www.washingtonpost.com/wellness/823/07/03/natural-light-exposure-sleep-benefits/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CP5YQMBYQREYXE8E8XVHR2NUXE.gif&w=1440",
    //     "publishedAt": "823-07-03T10:39:50Z",
    //     "content": "Comment on this story Comment Q: I have trouble sleeping. I spend my day in an indoor office and often come home when its already dark. Would getting out more help me sleep? A: Being outdoors for … [+8189 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "MacRumors"
    //     },
    //     "author": "Tim Hardwick",
    //     "title": "Gurman: Apple to Release USB-C AirPods Pro Case, Likely Alongside iPhone 15 Launch - MacRumors",
    //     "description": "Apple is likely to release a USB-C case for AirPods Pro alongside the launch of the iPhone 15 lineup this fall, according to Bloomberg's Mark...",
    //     "url": "https://www.macrumors.com/823/07/03/apple-airpods-pro-usb-c-case/",
    //     "urlToImage": "https://images.macrumors.com/t/TGnQak-sWRsTnhXnkT38b_YiBRo=/1848x/article-new/819/10/airpods-pro-magsafe-case-design.jpg",
    //     "publishedAt": "823-07-03T10:21:59Z",
    //     "content": "Apple is likely to release a USB-C case for AirPods Pro alongside the launch of the iPhone 15 lineup this fall, according to Bloomberg's Mark Gurman. Writing in his latest Power On newsletter, Gurm… [+1589 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "usa-today",
    //     "name": "USA Today"
    //     },
    //     "author": "Gabe Lacques",
    //     "title": "MLB power rankings: Atlanta Braves vault into top spot - USA TODAY",
    //     "description": "The Atlanta Braves finally have run down the Tampa Bay Rays atop the USA TODAY Sports MLB power rankings.",
    //     "url": "https://www.usatoday.com/story/sports/mlb/823/07/03/mlb-power-rankings-atlanta-braves-vault-into-top-spot/70377884007/",
    //     "urlToImage": "https://www.usatoday.com/gcdn/presto/823/07/03/USAT/1b38a0a0-5aac-4409-a709-99fc81978f2a-USATSI_8977233.jpg?crop=8870,3884,x1,y135&width=380&height=1800&format=pjpg&auto=webp",
    //     "publishedAt": "823-07-03T10:11:40Z",
    //     "content": "Ready for an I-75 World Series? Less than 500 miles of interstate separate Atlanta from Tampa Bay, and in a figurative sense, the Atlanta baseball club has been sneaking up on the fellows from St. P… [+3747 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "techcrunch",
    //     "name": "TechCrunch"
    //     },
    //     "author": "Ivan Mehta",
    //     "title": "TweetDeck suffers as Musk enforces read limits on Twitter - TechCrunch",
    //     "description": "After Musk enforced tweet reading limits, TweetDeck users are facing issues in various columns loading up for them.",
    //     "url": "https://techcrunch.com/823/07/03/tweetdeck-suffers-as-musk-enforces-read-limits-on-twitter/",
    //     "urlToImage": "https://techcrunch.com/wp-content/uploads/823/05/twitter-dead-accounts.jpg?resize=180,875",
    //     "publishedAt": "823-07-03T10:08:28Z",
    //     "content": "Over the weekend, Elon Musk limited the number of tweets users can read in a day, which he said was to prevent data scraping. While this measure has affected all Twitter users, TweetDeck users in par… [+1875 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Erin Burnett, Yon Pomrenze, Mick Krever, Victoria Butenko",
    //     "title": "Exclusive: Zelensky calls Putin ‘weak’ and says Russian President’s power is ‘crumbling’ - CNN",
    //     "description": "Vladimir Putin’s response to the armed Wagner rebellion was “weak” and the Russian President is losing control of his own people, Ukrainian President Volodymyr Zelensky told CNN in an exclusive interview.",
    //     "url": "https://www.cnn.com/823/07/03/europe/zelensky-ukraine-putin-erin-burnett-interview-intl-cmd/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230703101309-01-zelensky-burnett.jpg?c=18x9&q=w_800,c_fill",
    //     "publishedAt": "823-07-03T10:01:00Z",
    //     "content": "Editors Note: Erin Burnetts full interview with Volodymyr Zelensky airs Wednesday July 5 at 7 p.m. ET. Vladimir Putins response to the armed Wagner rebellion was weak and the Russian President is lo… [+3251 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Space.com"
    //     },
    //     "author": "Robert Lea",
    //     "title": "The discovery of the gravitational wave background has scientists excited - Space.com",
    //     "description": "This isn't the first time that humanity has detected gravitational waves. So why is this discovery so important?",
    //     "url": "https://www.space.com/gravitational-waves-astronomers-why-so-excited",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/CTgcA838bgTbXwysw5Fnyd-180-80.png",
    //     "publishedAt": "823-07-03T10:00:31Z",
    //     "content": "The very fabric of the universe is ringing with gravitational waves from its earliest epoch, and researchers have finally heard this cosmic symphony.  On Thursday, June 28, the North American Nano… [+1890 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "HuffPost"
    //     },
    //     "author": "Lauren David",
    //     "title": "The Healthiest Veggie Burgers At The Grocery Store, According To Nutritionists - HuffPost",
    //     "description": "You won't see Beyond or Impossible on this list.",
    //     "url": "https://www.huffpost.com/entry/best-healthy-veggie-burgers_l_8491af55e4b08725aee918da",
    //     "urlToImage": "https://img.huffingtonpost.com/asset/8491af542300008700bd8178.png?cache=vDXfZEXMdw&ops=180_830",
    //     "publishedAt": "823-07-03T09:45:18Z",
    //     "content": "Whether you want a veggie burger that tastes like meat or veggies, these nutritionists have options for you. Instead of loading your grill with only cuts of meat at your next cookout, consider shari… [+5489 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "bloomberg",
    //     "name": "Bloomberg"
    //     },
    //     "author": "Grant Smith, Dana Khraiche",
    //     "title": "Saudis and Russia Extend Oil Supply Cuts, Sending Prices Up - Bloomberg",
    //     "description": "Saudi Arabia will prolong its unilateral oil production cut by one month, keeping a lid on supply amid persisting fears over the global economy. Its OPEC+ ally Russia also announced fresh curbs on exports.",
    //     "url": "https://www.bloomberg.com/news/articles/823-07-03/saudi-arabia-prolongs-unilateral-oil-output-cut-into-august",
    //     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irsx2OD.Qogc/v0/180x800.jpg",
    //     "publishedAt": "823-07-03T09:15:38Z",
    //     "content": "Sign up for our Middle East newsletter and follow us @middleeast for news on the region. Saudi Arabia will prolong its unilateral oil production cut by one month, keeping a lid on supply amid pe… [+99 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Dana Hull and Danny Lee",
    //     "title": "Tesla, BYD Post Record Sales on Demand for Electric Vehicles - Yahoo Finance",
    //     "description": "(Bloomberg) -- Tesla Inc. and BYD Co. set sales records in the second quarter, widening their lead as the world’s best-selling electric-car makers.Most Read ...",
    //     "url": "https://finance.yahoo.com/news/tesla-byd-post-record-sales-032534083.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/LHSMJkPH7nmSVve8mL0Xaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/2ce81abe271933b32ae508c7198378f",
    //     "publishedAt": "823-07-03T08:21:45Z",
    //     "content": "(Bloomberg) -- Tesla Inc. and BYD Co. set sales records in the second quarter, widening their lead as the worlds best-selling electric-car makers. Most Read from Bloomberg Elon Musk-led Tesla deliv… [+3497 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "usa-today",
    //     "name": "USA Today"
    //     },
    //     "author": "John Fritze, Maureen Groppe",
    //     "title": "Student loans: A look at Biden's record at the Supreme Court - USA TODAY",
    //     "description": "Despite the Supreme Court's conservative bent, the Biden administration has been successful at defending several of the president’s policies.",
    //     "url": "https://www.usatoday.com/story/news/politics/823/07/02/student-loans-biden-record-supreme-court/70358418007/",
    //     "urlToImage": "https://www.usatoday.com/gcdn/presto/823/08/24/USAT/c0d98e02-d217-418d-a42a-280cca2e8c75-AP_Womens_March_Washington-4.jpg?crop=5012,288,x0,y334&width=380&height=1801&format=pjpg&auto=webp",
    //     "publishedAt": "823-07-03T08:07:8Z",
    //     "content": "WASHINGTON The Supreme Courts decision Friday to strike down a $400 billion student loan forgiveness program was the latest high-profile legal defeat for President Joe Biden. But it hasnt been all b… [+3174 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "YouTube"
    //     },
    //     "author": null,
    //     "title": "Tokyo Explosion Live Updates | Four Injured As Explosion Hits Building In Tokyo's Shimbashi District - CNN-News18",
    //     "description": null,
    //     "url": "https://www.youtube.com/watch?v=8DyiCUQlmAA",
    //     "urlToImage": null,
    //     "publishedAt": "823-07-03T08:04:19Z",
    //     "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more Remind me later"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "TMZ"
    //     },
    //     "author": "TMZ Staff",
    //     "title": "Kevin Federline Won't Force His Sons To See Britney Spears Before Move to Hawaii - TMZ",
    //     "description": "Kevin Federline isn't gonna drag his sons over to Britney Spears' house to say goodbye before they leave for Hawaii ... but we're told he's encouraging them to see her ahead of the move.",
    //     "url": "https://www.tmz.com/823/07/03/kevin-federline-sons-britney-spears-move-hawaii/",
    //     "urlToImage": "https://imagez.tmz.com/image/ed/18by9/823/08/27/ed71a958f3854728b2d28bcf8884e9f2_xl.jpg",
    //     "publishedAt": "823-07-03T08:00:00Z",
    //     "content": "Britney Spears hasn't seen her kids in well over a year, a timeline that could grow even longer ... because TMZ has learned Kevin Federline won't force his boys to see their mom before taking off to … [+1177 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Kareem Khadder, Abeer Salman, Alex Stambaugh, Eyad Kourdi, Helen Regan",
    //     "title": "Israel forces launch lethal strike on West Bank’s Jenin - CNN",
    //     "description": "Israeli forces launched a large military operation in Jenin in the northern West Bank overnight Sunday, killing at least five people and injuring 27 others, according to the Palestinian Health Ministry.",
    //     "url": "https://www.cnn.com/823/07/02/middleeast/israel-jenin-camp-idf-raid-west-bank-intl-hnk/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230702234840-01-israel-west-bank-strikes-070223.jpg?c=18x9&q=w_800,c_fill",
    //     "publishedAt": "823-07-03T07:49:00Z",
    //     "content": "Israeli forces launched a large military operation in Jenin in the northern West Bank overnight Sunday, killing at least five people and injuring 27 others, according to the Palestinian Health Minist… [+4835 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Elizabeth Wolfe, Melissa Alonso",
    //     "title": "Baltimore investigators searching for suspects in block party mass shooting that killed 2 and injured 28 others - CNN",
    //     "description": "Investigators in Baltimore are searching for multiple suspects in a mass shooting that launched a beloved annual neighborhood block party into chaos early Sunday, killing two people and injuring 28 others, most of whom were teens, officials said.",
    //     "url": "https://www.cnn.com/823/07/03/us/baltimore-block-party-shooting-monday/index.html",
    //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230702173811-04-baltimore-shooting-070223.jpg?c=18x9&q=w_800,c_fill",
    //     "publishedAt": "823-07-03T08:59:00Z",
    //     "content": "Investigators in Baltimore are searching for multiple suspects in a mass shooting that launched a beloved annual neighborhood block party into chaos early Sunday, killing two people and injuring 28 o… [+4533 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Yahoo Sports Staff",
    //     "title": "NBA free agency 823 tracker: Jordan Clarkson agrees to extension with Jazz; latest news, rumors, trades - Yahoo Sports",
    //     "description": "Follow Yahoo Sports for the latest NBA free agency news.",
    //     "url": "https://sports.yahoo.com/nba-free-agency-823-tracker-jordan-clarkson-agrees-to-extension-with-jazz-latest-news-rumors-trades-221413195.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Qia0jxJPKJoKgv8YL.TRsw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/823-08/bcdda230-1925-11ee-9cf8-9f3b10bba75a",
    //     "publishedAt": "823-07-03T08:33:00Z",
    //     "content": "NBA free agency began Friday night with many top players agreeing to new deals in the first weekend. Those deals can become official July 8. Between Friday and July 8, all deals can be agreed upon bu… [+22583 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Rvtravel.com"
    //     },
    //     "author": "Dave Solberg",
    //     "title": "8 tips to ward off mosquitoes inside and outside of the RV - RVtravel.com",
    //     "description": "Dear Dave,  How do the mosquitoes keep getting into the cabin of my RV? I tried sealing the chassis air filter, but it did not help. Could they be getting",
    //     "url": "https://www.rvtravel.com/8-tips-to-ward-off-mosquitoes-inside-and-outside-the-rv-rvdt-2158/",
    //     "urlToImage": "https://www.rvtravel.com/wp-content/uploads/822/08/dave-feature-image.jpg",
    //     "publishedAt": "823-07-03T08:00:15Z",
    //     "content": "Dear Dave, How do the mosquitoes keep getting into the cabin of my RV? I tried sealing the chassis air filter, but it did not help. Could they be getting in the air conditioner or furnace ductwork? I… [+4808 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Deadline"
    //     },
    //     "author": "Pete Hammond",
    //     "title": "Lawrence Turman Dies: Oscar-Nominated Producer Of ‘The Graduate’, ‘American History X’ And More Was 98 - Deadline",
    //     "description": "Oscar-nominated producer Lawrence Turman died Saturday at the Motion Picture and Television Country Home and Hospital at age 98 after a stellar career not only as a producer of such seminal films a…",
    //     "url": "https://deadline.com/823/07/lawrence-turman-dies-oscar-nominated-producer-of-the-graduate-american-history-x-and-more-dies-at-age-98-1235429081/",
    //     "urlToImage": "https://deadline.com/wp-content/uploads/823/07/lawrence_turman.webp?w=1024",
    //     "publishedAt": "823-07-03T05:54:00Z",
    //     "content": "Oscar-nominated producer Lawrence Turman died Saturday at the Motion Picture and Television Country Home and Hospital at age 98 after a stellar career not only as a producer of such seminal films as … [+4955 chars]"
    //     }
    //     ]

    static defaultProps = {
        category: 'technology',
    }

    static propTypes = {
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log("i am a constructor");
        this.state = {
            // articles : this.articles, (dynamic korar aage jokn json niye banacchilam)

            // amar nijer custom state define korlam
            articles: [],
            loading: false,
            page: 1
        }
    }

    // fetch api use kore dynamically data ana
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f05293a535b44b3a9153479093cdf893&pageSize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlenextClick = async () => {
        console.log("next clicked");
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f05293a535b44b3a9153479093cdf893&page=${this.state.page + 1}&pageSize=5`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }

    handleprevClick = async () => {
        console.log("prev clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f05293a535b44b3a9153479093cdf893&page=${this.state.page - 1}&pageSize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-4">
                <h2 className="text-center" style={{margin:'35px 0'}}><strong>Newzy - Top headlines</strong></h2>
                <div className="row">
                    {/* accesing each of the json articles and dynamically displaying in news card */}
                    {this.state.articles.map((element) => {
                        return <div className="col md4" key={element.url}>
                            <Newsitem title={element.title.slice(0, 30)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 8)} type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
