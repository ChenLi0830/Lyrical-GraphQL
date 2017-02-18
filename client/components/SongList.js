import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const SongList = (props) => {
  console.log("props", props);
  if (props.data.loading) return <div>Loading...</div>;
  const songList = props.data.songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
      )
  );
  
  return <ul className="collection">
    {songList}
  </ul>
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