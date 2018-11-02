import React , { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup,Glyphicon} from 'react-bootstrap';
import Profile from './Profile.js';
import Gallery from './Gallery.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      query:"",
      artist:null,
      tracks: []
    }
  }
search(){
  console.log('query',this.state.query)
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const ALBUM_URL ='https://api.spotify.com/v1/artists'
  let FETCH_URL = BASE_URL +'q='+this.state.query+'&type=artist&limit=1';
  const accessToken ='BQAjIxy_nFv6hIo5uPVROlx6A_zCroKZgze5fCpO5sbuZOcceO7OQuLnmhtxZh1QJbgKqTPlHHYoARBCOufrSWdxCct_s35p8zgbOCu_3kF6nsNR6LEKV5qJVNZbAkqrjL-Bpi9QesbtcIGqeWmtzmABKQyiL_CTl0oMOQ';
  const options ={
    method: 'GET',
    headers:{
        'Authorization': 'Bearer '+ accessToken,
            },
    mode: 'cors',
    cache: 'default'
  };
  fetch(FETCH_URL,options)
   .then(response => response.json())
    .then(json => {
         const artist = json.artists.items[0];
         this.setState({artist: artist});
        // console.log(artist);
         FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US&`;
         fetch(FETCH_URL,options)
          .then(response => response.json())
           .then(json => {
             const tracks = json.tracks;
             this.setState({tracks});
            console.log(tracks);
           });
    })




}
  render(){
    return(
      <div className="App">
      <div className="App-title">Music Master</div>
    <FormGroup>
       <InputGroup>
         <FormControl
           type="text"
           placeholder="Search for an Artist"
           value={this.state.query}
           onChange={event => {this.setState({query: event.target.value})}}
           onKeyPress={event => {
             if(event.key === 'Enter'){
                this.search()
                    }
                }
              }
          />
         <InputGroup.Addon>
            <Glyphicon
            glyph="search"
            onClick={()=>this.search()}
            ></Glyphicon>
         </InputGroup.Addon>
       </InputGroup>
    </FormGroup>
    <Profile
       artist ={this.state.artist}
       />
    <Gallery
      tracks= {this.state.tracks}
      />
      </div>
    )
  }
}

export default App;
