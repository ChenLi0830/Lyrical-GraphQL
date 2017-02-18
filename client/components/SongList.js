import React from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/fetchSongs'

const SongList = (props) => {
  console.log("props", props);
  if (props.data.loading) return <div>Loading...</div>;
  const songList = props.data.songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
      )
  );
  
  return <div>
    <ul className="collection">
      {songList}
    </ul>
    <Link to="/songs/new" className="btn-floating btn-large red right">
      <i className="material-icons">add</i>
    </Link>
  </div>
};

export default graphql(query)(SongList);