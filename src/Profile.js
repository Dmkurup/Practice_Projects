import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
render(){
 let artist = {name: '',followers:{total:''},genres:[],images:[{url:''}]};
  artist = this.props.artist !== null ? this.props.artist : artist ;

  return(
    this.props.artist !== null
    ? <div className="profile">
       <img className="profile-img"
        alt ="profile"
        src={artist.images[0].url}
       />
      <div className="profile-info">
      <div className="profile-name">{artist.name}</div>
      <div className="profile-followers">{artist.followers.total} Followers</div>
      <div className="profile-genres">{artist.genres.map((genre,k)=>{
        return(
            genre === artist.genres[artist.genres.length -1]
            ? <span key={k}> & {genre}</span>
            :<span key={k}>{genre}, </span>
              )
       })}</div>
       </div>
       </div>
    : null
  )


}



}
export default Profile;
