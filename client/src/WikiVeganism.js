import React from 'react';
import './Wiki.css'
import './green4lyfe.css'
import wikiInfo from './Wiki-Info.json';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import { Earthships, EcoVillage, Future_City, Community_Garden, 
  Gardening, Green_Getaway, Minimalism, Plastics, 
  Sustainability, Tiny_House, Veganism
} from './wiki-image-list.js'
import { getCookie } from './cookie.js'

let infoSelect = wikiInfo["Veganism"]
let arrayIndex = 3  //maybe if i just change the index of wikiInfo and imageArray that could work
const imageArray = [Community_Garden, Minimalism, Sustainability, Veganism, Plastics, Gardening, Green_Getaway, Tiny_House, EcoVillage, Future_City, Earthships]

class WikiVeganism extends React.Component {
  constructor(props){
    super(props);

    this.state={
      search:null,
      wikiInfo
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  changeInfo=(page)=>{
    window.location.replace(page)
  }

  getUsername() {
    var username = getCookie("username");
    if (username == null)
        return <Link to="/login">Click to log in</Link>
    return username;
      }

  render() {
    return (	    
      <div>
        <Link to='/'>
          <img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
        </Link>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikicommunitygarden') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Community Garden" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikiearthship') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Earthships" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikiecovillage') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "EcoVillage" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikifuturecity') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Future City" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikigardening') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Gardening" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikigreengetaway') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Green Getaway" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikiminimalism') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Minimalism" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikiplastics') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Plastics" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikisustainability') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Sustainability" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikitinyhouse') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Tiny House" } </div> 
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={() => this.changeInfo('wikiveganism') } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> { "Vegetarianism/Veganism" } </div> 
              </button>
            </li>
          </ul>
        </div>
                  
        <div class="lifestyle_Main_Title"> 
          <img src={ imageArray[arrayIndex] } style={{height: "200px", width: "300px"}} /> 
          <br/>{ infoSelect.map((life) => {return life.Lifestyle }) }
        </div> 
        <div class="lifestyle_Main_Blurb">
          { infoSelect.map((life) => {return life.Blurb }) }

          <a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S2212371713000024">this research paper</a>
          , and 77% of agricultural land according to&nbsp;
          
          <a target="_blank" href="https://www.onegreenplanet.org/news/chart-shows-worlds-land-used/">this article</a>.
          These huge industries can be trimmed down if everyone puts in some effort, no matter how small. 
          Plant based diets have also been proven to increase longevity and general health over your lifetime!

          <br/><br/>
          <a target="_blank" href="https://www.downtoearth.org/go-veggie/environment/top-10-reasons">Here</a>

          { infoSelect.map((life) => {return life.Blurb2 }) }

          <br/>
          &emsp;&emsp;&nbsp;- <a target="_blank" href="https://thewimpyvegetarian.com/10-tips-for-becoming-a-vegetarian-for-beginners/">Vegetarian</a>
          &nbsp;- Eat no animal flesh of any kind, but animal products like dairy are ok.

          <br/>
          &emsp;&emsp;&nbsp;- <a target="_blank" href="http://www.eatingwell.com/article/279566/9-healthy-tips-to-help-you-start-eating-a-vegan-diet/">Vegan</a>
          &nbsp;- Eat no animal flesh or animal products of any kind - entirely plant based! (You might be surprised by the food alternatives you’ve never tried!)

          <br/><br/>
          Don’t think you can hack it? Start small! Try a vegetarian or vegan dish that sounds interesting every once in a while, you may be very pleasantly surprised.
          
          <br/><br/>
          Be careful! Not all plant food products are created equally, and&nbsp;
          <a target="_blank" href="https://www.bbc.com/future/article/20200211-why-the-vegan-diet-is-not-always-green">some have actually proven to not be that sustainable.</a>
          



        </div>

        <Link to='/userhome'>
          <div style={{position: "absolute", top: "5%", right: "5%"}}>
            <img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
            <br/>
            <b>{ this.getUsername() }</b>
          </div>
        </Link>

      </div> 
    );
  }
}
export default WikiVeganism;