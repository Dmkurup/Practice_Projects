import React , { Component} from 'react';
import './App.css';

class Gallery extends Component{
  constructor(props){
    super(props);
    this.state={
      playingUrl: '',
      playing:false,
      audio:null
    }
  }

playAudio(previewUrl){
  let audio = new Audio(previewUrl);
  if(!this.state.playing){
     audio.play();
     this.setState({
       playing:true,
       audio:audio,
       playingUrl:previewUrl
     }) ;
  }else if(this.state.playingUrl === previewUrl){
    this.state.audio.pause();
    this.setState({
      playing:false,
      audio:null,
      playingUrl:''
    })
  } else {
    this.state.audio.pause();
    this.setState({
      playing:true,
      playingUrl:previewUrl,
      audio:audio
    });
    audio.play(previewUrl);
  }

}

render(){
  let tracks = this.props.tracks;
  return(
   <div>
     {tracks.map((track,key)=>{
       return(
         <div
            key={key}
            className="track"
            onClick={()=>this.playAudio(track.preview_url)}>
         <img
            alt="trackimg"
            src={track.album.images[0].url}
            className="track-img"/>
        <div className="track-play">
           <div className="track-play-inner">
            {this.state.playingUrl === track.preview_url
            ? <span>| |</span>
            :<span>&#9654;</span>}
           </div>
        </div>
         <p className="track-text">
            {track.name}
            </p>
         </div>
       )
     })};



   </div>
  )
}

}
export default Gallery;
