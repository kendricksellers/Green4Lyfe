import React from 'react';
import './Wiki.css'
import './green4lyfe.css'
import wikiInfo from './Wiki-Info.json';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'

class Wiki extends React.Component {
  render() {
    return (	    
      <div>
        <Link to='/'>
          <img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
        </Link>

        <input type="text" id="Search" name="Search" placeholder="Search" style={{position: "absolute", top: "200px"}} /><br/>

        <div class="lifestyle_Side">
          <b>Lifestyle Search Result 1<br/></b>
          Stuff related to this lifestyle 1 would go here<br/>
          Figure out where to pull up information related to this lifestyle,<br/>
          should it be saved somewhere in the github<br/>
          or should it be pulled from other souces?<br/>
          <br/>
          <br/>
          <b>Lifestyle Search Result 2<br/></b>
          Stuff related to this lifestyle 2 would go here<br/>
          Figure out where to pull up information related to this lifestyle,<br/>
          should it be saved somewhere in the github<br/>
          or should it be pulled from other souces?<br/>
          <br/>
        </div>
        
        <div class="lifestyle_Main_Title">
          {
            wikiInfo.CommunityGarden.map((life) => {return life.Lifestyle })
          }
        </div>

        <div class="lifestyle_Main_Blurb">
          {
            wikiInfo.CommunityGarden.map((life) => {return life.Blurb })
          }
        </div>

        

      </div> 
    );
  }
}
export default Wiki;