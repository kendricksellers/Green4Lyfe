import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => console.log(data.message));
  }

  render() {
      return (
	<div className="App">
          Hello World!
        </div>
    );
  }
}

export default App;
