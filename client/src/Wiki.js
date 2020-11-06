import React from 'react';
import './Wiki.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'

class Wiki extends React.Component {
    render() {
	return (	    
  <div>
    <div>
        <img src={Logo} alt="Green4Lyfe Logo" style={{height: '200px', width: '200px'}} />
    </div>

    <input type="text" id="Search" name="Search" placeholder="Search"/><br/>

    <div class="lifestyle_Side">
      <b>Lifestyle Search Result 1<br/>
      Stuff related to this lifestyle 1 would go here<br/>
      Figure out where to pull up information related to this lifestyle,<br/>
      should it be saved somewhere in the github<br/>
      or should it be pulled from other souces?</b><br/>
      <br/>
      <br/>
      <b>Lifestyle Search Result 2<br/>
      Stuff related to this lifestyle 1 would go here<br/>
      Figure out where to pull up information related to this lifestyle,<br/>
      should it be saved somewhere in the github<br/>
      or should it be pulled from other souces?</b><br/>
      <br/>
    </div>

    <div class="lifestyle_Main">
      <b>Your current Lifestyle</b>
      <br/>
      <b>Stuff related to user's primary lifestyle would go here</b><br/>
      <b>Figure out where to pull up information related to this lifestyle,</b><br/>
      <b>should it be saved somewhere in the github or should it be pulled from other souces?</b><br/>
      <br/>
      <br/>
      <b>Additionally, this section should be centered and bigger than the ones on the side</b><br/>
      <b>and should contain more detailed information</b><br/>

    </div>

  </div> );
  }
}
export default Wiki;