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

let infoSelect = wikiInfo["Plastics"]
let arrayIndex = 4  //maybe if i just change the index of wikiInfo and imageArray that could work
const imageArray = [Community_Garden, Minimalism, Sustainability, Veganism, Plastics, Gardening, Green_Getaway, Tiny_House, EcoVillage, Future_City, Earthships]

class WikiPlastics extends React.Component {
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

          <br/><br/><a target="_blank" href="https://www.nrdc.org/stories/single-use-plastics-101">About single use plastics</a>
          <br/><br/><a target="_blank" href="http://www.greeneducationfoundation.org/nationalgreenweeksub/waste-reduction-tips/tips-to-use-less-plastic.html">Tips to start living without single use plastics</a>
          <br/><br/><a target="_blank" href="https://myplasticfreelife.com/plasticfreeguide/">100 Steps to a plastic-free life</a>

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
export default WikiPlastics;