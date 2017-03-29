import React from 'react';
import { Link } from 'react-router';
import Albums from './Albums';
import Songs from './Songs';


export default class Artist extends React.Component {

  constructor (props) {
    super(props);
  }


  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    this.props.selectArtist(artistId);
    this.props.selectArtistAlbums(artistId);
    this.props.selectArtistSongs(artistId);
  }


  render () {
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>  
          <Albums albums={this.props.artistAlbums} />

          <Songs songs={this.props.artistSongs}   currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne} />
      </div>

    );
  }
}


