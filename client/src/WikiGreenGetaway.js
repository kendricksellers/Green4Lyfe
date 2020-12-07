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

let infoSelect = wikiInfo["Green_Getaway"]
let arrayIndex = 6  //maybe if i just change the index of wikiInfo and imageArray that could work
const imageArray = [Community_Garden, Minimalism, Sustainability, Veganism, Plastics, Gardening, Green_Getaway, Tiny_House, EcoVillage, Future_City, Earthships]

class WikiEcoVillage extends React.Component {
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
          <br/><br/>
          <a target="_blank" href="https://www.cnn.com/travel/article/green-vacations-sustainable-places/index.html">Some sustainable spots across the world known for their tourism</a>
          <br/><br/>
          <a target="_blank" href="https://www.arcosanti.org/tours/">Arcosanti - The Sustainable Eco Village in the desert</a>
          <br/><br/>
          Want to check out futuristic and sustainable cities to visit and live in around the world?&nbsp;
            <Link to='/wikifuturecity'>
              See our Futuristic Cities page
            </Link>.

            <br/><br/><br/>
            Hostels are a great way to meet friends, and live simply while travelling or staying over periods of time in a new city.
            <br/>&emsp;&emsp;- Looking to try a short or long stay in one of the USA’s big cities communal living PodShares?&nbsp;
              <a target="_blank" href="https://www.podshare.com/">Check this out</a>.
            <br/>&emsp;&emsp;- Here are some well known&nbsp;
              <a target="_blank" href="https://thepointsguy.com/guide/sustainable-travel-on-a-budget-best-eco-friendly-hostels/">sustainable hostels</a>
            , and&nbsp;
              <a target="_blank" href="https://www.hostelworld.com/blog/eco-friendly-hostels/">more here</a>.
            <br/>&emsp;&emsp;- Or, check out&nbsp;
              <a target="_blank" href="https://www.hostelworld.com/">other hostel options here</a>.

              <br/><br/>
              Travel can be environmentally taxing with fuel use, single-use plastics, and boarding upkeep. Check out&nbsp;
                <a target="_blank" href="https://www.nytimes.com/guides/travel/how-to-travel-sustainably">these tips </a>
              to be more sustainable when you travel. Check out&nbsp;
                <a target="_blank" href="https://sustainabletravel.org/our-work/carbon-offsets/calculate-footprint/">this site </a>
              to donate to offset the carbon footprint you generate by flying.
          
          <br/><br/>
          <Link to='/wikiecovillage'>
            Check out the EcoVillage page 
          </Link> if you want to visit a potential sustainable new community. 
        </div>

        <Link to='/userhome'>
          <div style={{position: "absolute", top: "5%", right: "5%"}}>
            <img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
            <br/>
            Profile Picture
          </div>
        </Link>

      </div> 
    );
  }
}
export default WikiEcoVillage;