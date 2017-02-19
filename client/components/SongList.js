import React from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSongsQuery from '../queries/fetchSongList'
import gql from 'graphql-tag';

const SongList = (props) => {
  const onSongDelete = (id) => {
    props.mutate({
      variables:{id},
      // refetchQueries: [{query: fetchSongsQuery}],
    })
        .then(() => props.data.refetch());
  };
  
  console.log("props", props);
  if (props.data.loading) return <div>Loading...</div>;
  const songList = props.data.songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
            <i className="material-icons" onClick={() => onSongDelete(song.id)}>
              delete
            </i>
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

const mutation = gql`
mutation DeleteSong($id: ID){
  deleteSong(id:$id){
    id
  }
}
`;

export default graphql(mutation)(
    graphql(fetchSongsQuery)(SongList)
);
