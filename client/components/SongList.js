import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

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

const query = gql`
{
  songs{
    id,
    title
  }
}
`;

export default graphql(query)(SongList);