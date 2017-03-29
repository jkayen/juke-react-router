import React from 'react';
import { Link } from 'react-router';

export default class Artist extends React.Component {
  constructor (props) {
    super(props);
    this.artistId = this.props.routeParams.artistId;
    this.children = this.props.children;
    this.propsToPassToChildren = {
      selectedArtist: this.props.selectedArtist,
      artistAlbums: this.props.artistAlbums,
      artistSongs: this.props.artistSongs
    }
  }

  componentDidMount () {
    this.props.selectArtist(this.artistId);
    this.props.selectArtistAlbums(this.artistId);
    this.props.selectArtistSongs(this.artistId);

  }
  render () {
    return (
      <div>
      {console.log(this.props)}
        <h3>{ this.props.selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${this.artistId}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${this.artistId}/songs`}>SONGS</Link></li>
        </ul>
        { this.props.children && React.cloneElement(this.props.children, this.propsToPassToChildren) }
      </div>
    )
  }
}





