import React from 'react';
import './Wiki.css'
import './green4lyfe.css'
import wikiInfo from './Wiki-Info.json';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import wikiImage from './Resources/Tiny_House.png'
import { Earthships, EcoVillage, Future_City, Community_Garden, 
  Gardening, Green_Getaway, Minimalism, Plastics, 
  Sustainability, Tiny_House, Veganism
} from './image-list.js'

let infoSelect = wikiInfo["Tiny_House"]
let imageSource = Tiny_House
const lifestyleSearch = ['Community Garden', 'Minimalism', 'Sustainability', 'Vegetarianism/Veganism', 'Plastics', 'Gardening', 'Green Getaway', 'Tiny House', 'EcoVillage', 'Future City', 'Earthship'];

class Wiki extends React.Component {
  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  changeInfo=(replace)=>{
    infoSelect = wikiInfo["Green Getaway"]
    imageSource = Green_Getaway
  }

  render() {
    // searchbar stuff
      const items = lifestyleSearch.filter((data)=>{
        if(this.state.search == null)
            return data
        else if(data.toLowerCase().includes(this.state.search.toLowerCase())){
            return data }
      }).map(data=>{
        return(
        <div>
          <ul>
            <li style={{position:"relative", top: "160px"}}>
              <button onClick={(g) => this.changeInfo(g) } style={{height: '45px', width : '180px'}} size="sm" > 
                <div class="lifestyle_Side"> {data} </div> 
              </button>
            </li>
          </ul>
        </div>
        )
      })

    return (	    
      <div>
        <Link to='/'>
          <img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
        </Link>

        <input type="text" id="Search" name="Search" placeholder="Search" 
          style={{position: "absolute", top: "125px"}} onChange={(e)=>this.searchSpace(e)}
        />
        {items}

        
                  
        <div class="lifestyle_Main_Title">
          <img src={imageSource} style={{height: "200px", width: "300px"}} />
          <br/>{ infoSelect.map((life) => {return life.Lifestyle }) }
        </div>

        <div class="lifestyle_Main_Blurb">
          { infoSelect.map((life) => {return life.Blurb }) }
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
export default Wiki;